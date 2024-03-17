import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';

export default function CategoriesNews() {
    const { section } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [sectionArticles, setSectionArticles] = useState([]);
    const [sectionTitle, setSectionTitle] = useState('');
    const [showAllArticles, setShowAllArticles] = useState(false);
    
    const handleBack = () => {
        navigate(-1)
    }

    const handleShowAll = () => {
        setShowAllArticles(true);
    }
    
    const handleReduce = () => {
        setShowAllArticles(false);
    }


    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await axios.get(`https://api.nytimes.com/services/xml/rss/nyt/${section}.xml`);
                const xmlData = response.data;
                
                //convertire dati xml in json: si può usare una libreria, ma l'ho fatto manualmente
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
                
                const sectionTitle = xmlDoc.getElementsByTagName('title')[0].childNodes[0].nodeValue;
                setSectionTitle(sectionTitle);
                
                const articles = xmlDoc.getElementsByTagName('item');
                
                const parsedArticles = Array.from(articles).map(article => {
                    const title = article.getElementsByTagName('title')[0].childNodes[0].nodeValue;
                    const link = article.getElementsByTagName('link')[0].childNodes[0].nodeValue;

                    let description = '';
                    const descriptionNode = article.getElementsByTagName('description')[0];
                    if (descriptionNode && descriptionNode.childNodes.length > 0) {
                        description = descriptionNode.childNodes[0].nodeValue;
                    }

                    let author = '';
                    const authorNode = article.getElementsByTagName('dc:creator')[0];
                    if (authorNode){
                        author = authorNode.childNodes[0].nodeValue;
                    }

                    let date = '';
                    const dateNode = article.getElementsByTagName('pubDate')[0];
                    const formatDate = (dateString) => {
                        const dateObject = new Date(dateString);
                        const options = { year: 'numeric', month: 'long', day: 'numeric' };
                        return dateObject.toLocaleDateString('en-US', options);
                    };
                    if (dateNode){
                        date = formatDate(dateNode.childNodes[0].nodeValue)
                    }

                    let image = '';
                    const imageNode = article.getElementsByTagName('media:content')[0];
                    if (imageNode){
                        image = imageNode.getAttribute('url');
                    }
                    
                    return {title, link, description, author, date, image}
                    
                })
                setSectionArticles(parsedArticles);
                
            } catch(error){
                console.error(`Error during request for "${section}":`, error)
            }
        }

        const section = location.state?.section;
        if(section){
            fetchData()
        }
           
    }, [section, location.state])




    return (
        <>
            <div className='articles-header'>
                <button type='button' className='back-button' onClick={handleBack}>
                    <img src='/arrow-left.png'></img>
                </button>
                <h2>{sectionTitle}</h2>
            </div>

            <section className='articles-container'>
                {showAllArticles ? (
                    sectionArticles.map((article, index) => (
                        <div key={index} className='article overlay'>
                            <Link to={article.link} target="_blank" rel="noopener noreferrer">
                                <h3>{article.title}</h3>

                                <div>
                                    {article.image && (
                                        <img className='article-img' src={article.image} alt='article image'/>
                                    )}
                                </div>

                                <img className='eye-icon' src='/eye.png'></img>

                                <div className='author-date'>
                                    {article.author && (
                                        <span>By {article.author}</span>
                                    )}
                                    {article.date && (
                                        <span>{article.date}</span>
                                    )}
                                </div>

                                <p>{article.description}</p>
                            </Link>
                        </div>
                    ))
                ) : (
                    sectionArticles.slice(0, 5).map((article, index) => (
                        <div key={index} className='article overlay'>
                            <Link to={article.link} target="_blank" rel="noopener noreferrer">
                                <h3>{article.title}</h3>

                                {article.image && (
                                    <img src={article.image} alt='article image' className='article-img'/>
                                )}
                                <img className='eye-icon' src='/eye.png'></img>

                                <div className='author-date'>
                                    {article.author && (
                                        <span>By {article.author}</span>
                                    )}
                                    {article.date && (
                                        <span>{article.date}</span>
                                    )}
                                </div>

                                <p>{article.description}</p>
                            </Link>
                        </div>
                    ))
                )}

                {!showAllArticles ? (
                    <div className='popular-button'><button type='button' onClick={handleShowAll}>Show all</button></div>
                ) : (
                    <div className='popular-button'><button type='button' onClick={handleReduce}>Reduce</button></div>
                )}

            </section>
        </>
    )
}
