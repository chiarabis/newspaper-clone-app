/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../othernews-section/othernews.css'
import './book.css'


export default function BookBestSellers() {
    const apiKey = import.meta.env.VITE_SOME_KEY;
    const [bestSellers, setBestSellers] = useState([])

    useEffect(()=> {
        const fetchData = async() => {
            try{
                const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${apiKey}`)
                const lists = response.data.results.lists;
                setBestSellers(lists)
            } catch(error) {
                console.log('Error in fetching data from best sellers:', error.message)
            }
        }
        fetchData();
    }, [apiKey])

    const responsive = {
        0: { items: 1 },
        350: { items: 2 },
        568: { items: 2 },
        780: { items: 3 },
        960: { items: 4},
        1024: { items: 5 },
    };
    
    const items = [];


    return (
        <div className='book-container section-container' style={{paddingBottom: '0.8rem'}}>
            <div className='articles-header' style={{margin: '0'}}>
                <h2>Best sellers</h2>
            </div>

            <div className='scroll-item' style={{marginTop: '1rem', height: '90vh', padding: 0}}>
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
                                <div key={bookIndex} className='book-item'>
                                    
                                    <div style={{display: 'flex'}}>
                                        <span className='number'>{book.rank}</span>
                                        <img src={book.book_image} className='cover'/>
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
