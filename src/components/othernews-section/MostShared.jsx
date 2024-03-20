import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import './othernews.css'


export default function Mostshared() {
    const apiKey = import.meta.env.VITE_SOME_KEY;
    const [period, setPeriod] = useState('1')
    const [mostShared, setMostShared] = useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
        const fetchData = async () => {
            try{
                const response = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/shared/${period}/facebook.json?api-key=${apiKey}`)
                setMostShared(response.data.results.slice(0, 6))
            } catch (error) {
                console.log('Error in fetching articles:', error.message)
            }
        }
        fetchData();
    }, [period, apiKey])
    
    const handlePeriodChange = (event) => {
        setPeriod(event.target.value);
    };

    const handleMore = (e) => {
        e.preventDefault();
        navigate('/all-most-shared', { state: { period: period } })
    }


    return (
        <div className='a section-container'>

            <div className='articles-header' style={{margin: 0}}>
                <h2>Most shared on Facebook</h2>
                <select value={period} onChange={handlePeriodChange}>
                    <option value="1">Last 1 day</option>
                    <option value="7">Last 7 days</option>
                    <option value="30">Last 30 days</option>
                </select>
            </div>

            <div className='main-item'>
                {mostShared && mostShared.map((article, index) => (
                <div key={index} className='article overlay'>
                    <Link to={article.url} target="_blank" rel="noopener noreferrer">
                        <h4>{article.title}</h4>

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
                    </Link>
                </div>
                ))}
            </div>

            <div className='popular-button' style={
                {display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'center', 
                margin: '2rem 0'}}>
                <button type='button' onClick={handleMore}>More</button>
            </div>
        </div>
    )
}
