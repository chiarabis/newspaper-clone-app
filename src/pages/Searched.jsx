import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from "axios";


export default function Searched() {
    const apiKey = import.meta.env.VITE_SOME_KEY;
    const { search } = useParams();
    const [searchArticles, setSearchArticles] = useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
        const fetchData = async() => {
            try{
                const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${apiKey}`); 
                const searchedResults = response.data.response.docs;
                setSearchArticles(searchedResults)
            } catch(error) {
                console.error('Error during searching:', error);
            }
        }
        fetchData();
    }, [search, apiKey])

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <>
            <div className='articles-header'>
                <button type='button' className='back-button' onClick={handleBack}>
                    <img src='/arrow-left.png'></img>
                </button>
                <h2>Results for: {search}</h2>
            </div>

            <section className='articles-container'>
                {searchArticles.map((article, index) => {
                    const dateString = article.pub_date
                    const dateOnly = dateString.split("T")[0];

                    return (
                        <div key={index} className='article'>
                            <Link to={article.web_url} target="_blank" rel="noopener noreferrer" className='link'>
                                <h3>{article.headline.main}</h3>
                            </Link>
                            <div className='author-date flex-column'>
                                <span>{article.byline.original}</span>
                                <span>{dateOnly}</span>
                            </div>
                            <p>{article.abstract}</p>
                        </div>
                    )})
                }
            </section>
        </>
    )
}
