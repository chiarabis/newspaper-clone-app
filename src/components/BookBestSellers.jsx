/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function BookBestSellers() {
    const [bestSellers, setBestSellers] = useState([])


    useEffect(()=> {
        const fetchData = async() => {
            try{
                const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=wXNVG3mc1gkxxG8gI31boCVHyMOeEDVg`)
                const lists = response.data.results.lists;
                setBestSellers(lists)
            } catch(error) {
                console.log('Error in fetching data from best sellers:', error.message)
            }
        }
        fetchData();
    }, [])

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        780: { items: 3 },
        960: { items: 4},
        1024: { items: 5 },
    };
    
    const items = [
        {/*<div className="item" data-value="1">1</div>,
        <div className="item" data-value="2">2</div>,
        <div className="item" data-value="3">3</div>,
        <div className="item" data-value="4">4</div>,
    <div className="item" data-value="5">5</div>,*/}
    ];


    return (
        <div className='book-container'>
            <div className='articles-header' style={{margin: '0'}}>
                <h2>Best sellers</h2>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', marginTop: '1rem'}}>
                {bestSellers && bestSellers.map((list, listIndex)=> (
                    <div key={listIndex} style={{marginBottom: '1.5rem', height: 'auto'}}>
                        <h3 className='list-name'>{list.list_name}</h3>

                        <AliceCarousel
                            infinite={true}
                            disableButtonsControls={true}
                            mouseTracking={true}
                            items={items}
                            responsive={responsive}
                            controlsStrategy="default"
                            >

                            {list.books.map((book, bookIndex) => (
                                <div key={bookIndex}
                                style={{display: 'flex', flexDirection: 'column',
                                margin: '2rem 1rem', textAlign: 'start'}}>
                                    
                                    <div style={{display: 'flex'}}>
                                        <span style={{color: 'var(--light-dusty-blue)', fontSize: '2rem', marginRight: '1rem'}}>{book.rank}</span>
                                        <img src={book.book_image} style={{width: '150px'}}/>
                                    </div>
                                    <h4>{book.title}</h4>
                                    <span>By {book.author}</span>
                                    <p>{book.description}</p>

                                    <Link to={book.amazon_product_url}>
                                        <button type='button' className='header-button' style={{margin: 0}}>buy</button>
                                    </Link>
                                    
                                </div>
                            ))}
                        </AliceCarousel>
                    </div>
                ))}
            </div>
        </div>
    )
}
