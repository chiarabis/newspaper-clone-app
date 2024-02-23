import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(()=> {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date())
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    const formatDateTime = (date) => {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
        const formattedDate = date.toLocaleString(undefined, options)
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        return formattedDate;
    }
    

    return (
        <>
        <div className='header-container'>
            <span>{formatDateTime(currentDateTime)}</span>
            <h1><Link to={'/'} className='title-link'>Daily Newspaper</Link></h1>
            <div className='header-btn-container'>
                <button type='button' className='header-button'>subscribe</button>
                <button type='button' className='header-button'>login</button>
            </div>
            </div>
        <hr></hr>
        </>
  )
}