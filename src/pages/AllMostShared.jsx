import { Link, useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export default function AllMostShared() {
    const apiKey = import.meta.env.VITE_SOME_KEY;
    const location = useLocation();
    const navigate = useNavigate();
    const { period } = location.state;
    const [allMostShared, setAllMostShared] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/shared/${period}/facebook.json?api-key=${apiKey}`);
                setAllMostShared(response.data.results)
            } catch(error) {
                console.log('Error in fetching all most shared articles:', error.message);
            }
        }
        fetchData()
    }, [period, apiKey])

    const handleBack = () => {
        navigate(-1)
    }

    const getText = (period) => {
        switch (period) {
            case "1":
                return "Last 1 day";
            case "7":
                return "Last 7 days";
            case "30":
                return "Last 30 days";
        }
    }


    return (
        <>
            <div className="articles-header">
                <button type='button' className='back-button' onClick={handleBack}>
                    <img src='/arrow-left.png'></img>
                </button>
                <h2>All most shared on Facebook - {getText(period)}</h2>
            </div>

            <div className="articles-container">
                {allMostShared.map((article, index) => (
                    <div key={index} className='article overlay'>
                    <Link to={article.url} target="_blank" rel="noopener noreferrer">
                        <h3>{article.title}</h3>

                        <div>
                        {article.media && article.media.length > 0
                            && article.media[0]['media-metadata']
                            && article.media[0]['media-metadata'].length > 0
                            && (
                                <img className='article-img' src={article.media[0]['media-metadata'][2].url} alt="article image"
                                style={{height: '150px'}}/>
                            )}
                        </div>
                        
                        <img className='eye-icon' src='/eye.png'></img>

                        <div className='author-date'>
                            <span>{article.byline}</span>
                            <span>{article.published_date}</span>
                        </div>
                        
                        <p>{article.abstract}</p>
                    </Link>
                    </div>
                ))}
            </div>
        </>
    )
}
