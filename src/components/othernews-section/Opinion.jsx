import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import React from 'react'
import '../../css/othernews.css'


export default function Opinion() {
    const [opinionArticles, setOpinionArticles] = useState();

    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await axios.get(`https://api.nytimes.com/services/xml/rss/nyt/sunday-review.xml`);
                const xmlData = response.data;
                
                //convertire dati xml in json: si può usare una libreria, ma l'ho fatto manualmente
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
                
                const articles = xmlDoc.getElementsByTagName('item');

                const parsedArticles = Array.from(articles).map(article => {
                    const title = article.getElementsByTagName('title')[0].childNodes[0].nodeValue;
                    const link = article.getElementsByTagName('link')[0].childNodes[0].nodeValue;

                    let author = '';
                    const authorNode = article.getElementsByTagName('dc:creator')[0];
                    if (authorNode){
                        author = authorNode.childNodes[0].nodeValue;
                    }

                    return {title, author, link}
                })
                setOpinionArticles(parsedArticles)

            } catch(error) {
                console.log('Error in fetching articles from sunday opinion section:', error.message)
            }
        }
        fetchData();
    })

    return (
    <div className='c section-container'>
        <div className='articles-header' style={{margin: 0}}>
            <h2>Sunday opinion</h2>
        </div>

        <div className='scroll-item'>
            {opinionArticles && opinionArticles.map((article, index) => (
                <React.Fragment key={index}>
                    <div className='article' style={{marginBottom: '1rem'}}>
                        <Link to={article.link} target="_blank" rel="noopener noreferrer" className='link'>
                            <p style={{textAlign: 'start'}}>{article.title}</p>
                        </Link>
                        {article.author && (
                            <span className='opinion-author'>By {article.author}</span>
                        )}
                    </div>
                    {index !== opinionArticles.length - 1 &&
                        <img src='circle.png' className='circle-divider'/>}
                </React.Fragment>
            ))}
        </div>
    </div>
  )
}
