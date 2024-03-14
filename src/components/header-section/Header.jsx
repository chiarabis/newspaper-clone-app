import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../../css/header.css'

// eslint-disable-next-line react/prop-types
export default function Header( {onLoginClick, onSubscribeClick} ) {
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

    const handleLoginClick = () => {
        if(onLoginClick) {
            onLoginClick();
        }
    };
    const handleSubscribeClick = () => {
        if (onSubscribeClick) {
          onSubscribeClick();
        }
    };



    return (
        <>
            <div className='header-container'>
                <div className='date'>
                    <span>{formatDateTime(currentDateTime)}</span>
                </div>
                
                <div className='title'>
                <h1><Link to={'/'} className='title-link'>Daily Newspaper</Link></h1>
                </div>
                
                <div className='buttons'>
                    <button type='button' className='header-button' style={{marginRight: '1.5rem'}} onClick={handleSubscribeClick}>subscribe</button>
                    <button type='button' className='header-button' onClick={handleLoginClick}>login</button>
                </div>
            </div>
            <hr></hr>
        </>
  )
}