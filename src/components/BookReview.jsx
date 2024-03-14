import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/othernews.css'
import '../css/book.css'

const apiKey = process.env.API_KEY;

export default function BookReview() {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    const [search, setSearch] = useState('');

    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [bookReviews, setBookReviews] = useState([]);
    const [noResultsFound, setNoResultsFound] = useState(false);


    const handleButtonClick = async(e) => {
        setIsButtonVisible(true);
        e.preventDefault();
        try {
          const response = await axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?title=${search}&api-key=${apiKey}`);
          const reviewsByTitle = response.data.results
          setBookReviews(reviewsByTitle);

          if (reviewsByTitle.length > 0) {
            const { book_title, book_author } = reviewsByTitle[0];
            setBookTitle(book_title);
            setBookAuthor(book_author);
            setBookReviews(reviewsByTitle);
            setNoResultsFound(false);
          } else {
            setBookTitle('');
            setBookAuthor('');
            setBookReviews([]);
            setNoResultsFound(true);
          }

        } catch (error) {
          console.error('Error in fetching data from book reviews:', error.message);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
          const target = event.target;
          const isInput = target.tagName.toLowerCase() === 'input';
          const isButton = target.tagName.toLowerCase() === 'button';
          
          if (!isInput && !isButton) {
            setIsButtonVisible(false);
            setSearch('');
          }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
          document.removeEventListener('clik', handleClickOutside);
        };
    }, []);

    
    const handleInputFocus = () => {
        setIsInputFocused(true);
        setIsButtonVisible(true);
    };
    const handleInputBlur = () => {
        setIsInputFocused(false);
        if (!isButtonVisible) {
          setIsButtonVisible(false);
        }
    };   
    const handleReset = () => {
        setSearch('')

        setBookTitle('');
        setBookAuthor('');
        setBookReviews([]);
        setNoResultsFound(false);
    };


    return (
    <>
        <div className='book-container section-container'>
            <div className='articles-header' style={{margin: '0'}}>
                <h2>Book review</h2>
            </div>

            <div className='book-input-container'>
                <div className='flex-column'>
                    <label>Search by title:</label>
                    <div className='searchbar-container'>
                        <input type='text' placeholder='Insert a title...'
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}/>

                        <button 
                        className={`close-button ${isInputFocused || isButtonVisible ? 'visible' : ''}`}
                        onClick={handleReset}><img src='/close.png'/></button>

                        <button type='submit'
                        className={`search-button ${isInputFocused || isButtonVisible ? 'visible' : ''}`}
                        onClick={handleButtonClick}>go</button>
                    </div>
                </div>
            </div>

            <div style={{margin: '2rem 0'}}>
                {(bookTitle && bookAuthor && !noResultsFound) && (
                    <div style={{marginBottom: '1rem'}}>
                        <div className='title-author'>
                            {bookTitle && (
                                <span>Title: {bookTitle}</span>
                            )}
                            <img src='circle.png' className='circle-divider' style={{height: '100%', margin: '0 0.8rem'}} alt='divider' />
                            {bookAuthor && (
                                <span>Author: {bookAuthor}</span>
                            )}
                            
                        </div>
                    </div>
                )}

                {(noResultsFound && <h3>No results found</h3>)}

                {bookReviews.length > 0 && (
                    <div className='book-review-container'>
                        {bookReviews.map((review, index) => (
                            <div key={index}>
                                <p>{review.summary}</p>
                                {review.byline && (
                                    <span>By {review.byline}</span>
                                )}
                                <Link to={review.url} className='review-link'>
                                    <p>Read full review</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </>
    )
}
