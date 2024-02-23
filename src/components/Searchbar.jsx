import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
//import axios from 'axios'


export default function Searchbar() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      const isInput = target.tagName.toLowerCase() === 'input';
      const isButton = target.tagName.toLowerCase() === 'button';
      
      if (!isInput && !isButton) {
        setIsButtonVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
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

  const handleButtonClick = async(e) => {
    setIsButtonVisible(true);
    e.preventDefault();
    navigate('/articlessearched/' + search)
  };

  const handleReset = () => {
    setSearch('')
  }

  return (
    <>
    <div className='search-container'>
        <input type='text' placeholder='Search...'
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            value={search}
            onChange={(e) => setSearch(e.target.value)}></input>
            <button 
              className={`close-button ${isInputFocused || isButtonVisible ? 'visible' : ''}`}
              onClick={handleReset}><img src='/close.png'/>
            </button>
        <button type='submit'
            className={`search-button ${isInputFocused || isButtonVisible ? 'visible' : ''}`}
            onClick={handleButtonClick}>go</button>
    </div>
    </>
  )
}