import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function Archive() {
    const [year, setYear] = useState('2023');
    const [month, setMonth] = useState('1');
    const [archiveArticles, setArchiveArticles] = useState([]);

    useEffect(()=> {
        const fetchData = async() => {
            try{
                const response = await axios.get(`https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=wXNVG3mc1gkxxG8gI31boCVHyMOeEDVg`);
                setArchiveArticles(response.docs)
                console.log(response.docs)
            } catch(error){
                console.log('Error in fetching articles from archive:', error.message)
            }
        }
        fetchData();
    }, [year, month])

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const handleMonthChange = (event) => {
        setMonth(event.target.value)
    }

    return (
        <div className='c section-container'>
            <div className='articles-header' style={{margin: 0, justifyContent: 'space-between'}}>
                <h2>Archive</h2>

                <select value={year} onChange={handleYearChange} style={{margin: 0}}>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                </select>
                <select value={month} onChange={handleMonthChange} style={{margin: 0}}>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
            </div>

            <div className='side-item'>
                {archiveArticles && archiveArticles.slice(0, 2).map((article, index) => (
                    <div key={index} className='article'>
                        <Link to={article.web_url} target="_blank" rel="noopener noreferrer">
                            <h3>{article.headline.main}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
  )
}
