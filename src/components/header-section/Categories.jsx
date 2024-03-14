import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import '../../css/categories.css'

export default function Categories() {
  const [dropdownStates, setDropdownStates] = useState([
    { category: 'USA', isOpen: false },
    { category: 'World', isOpen: false },
    { category: 'Business', isOpen: false },
    { category: 'Culture', isOpen: false },
    { category: 'Sport', isOpen: false },
    { category: 'Tech & Science', isOpen: false },
    { category: 'Lifestyle', isOpen: false },
  ]);

  const dropdownRefs = useRef([]);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      for (let i = 0; i < dropdownRefs.current.length; i++) {
        if (dropdownRefs.current[i].current && !dropdownRefs.current[i].current.contains(event.target)) {
          setDropdownStates(prevStates => prevStates.map((state, index) => index === i ? { ...state, isOpen: false } : state));
        }
      }
    }
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (categoryIndex) => {
    const updatedDropdownStates = dropdownStates.map((dropdownState, index) => ({
      ...dropdownState,
      isOpen: index === categoryIndex ? !dropdownState.isOpen : false
    }));
    setDropdownStates(updatedDropdownStates);
  }

  const handleDropdownClick = (event) => {
    event.stopPropagation();
  };


  const buttonMapping = {
    'USA News': 'us',
    'Politic' : 'politics',
    'Upshot': 'upshot',
    'New York': 'nyregion',
    'Health': 'health',
    'Education': 'education',
    'Obituaries': 'obituaries',
    'Europe': 'europe',
    'Middle East': 'middleeast',
    'Africa': 'africa',
    'Americas': 'americas',
    'Asia': 'asiapacific',
    'Business': 'business',
    'Economy': 'economy',
    'Deal Book': 'dealbook',
    'Media': 'mediaandadvertising',
    'Your money': 'yourmoney',
    'Jobs': 'jobs',
    'Automotive': 'automobiles',
    'Small business': 'smallbusiness',
    'Arts': 'arts',
    'Dance': 'dance',
    'Theater': 'theater',
    'Movies': 'movies',
    'Music': 'music',
    'Art & Design': 'artanddesign',
    'TV': 'television',
    'Sport news': 'sports',
    'Soccer': 'soccer',
    'Tennis': 'tennis',
    'Baseball': 'baseball',
    'Golf': 'golf',
    'Hockey': 'hockey',
    'Football': 'profootball',
    'Basket': 'probasketball',
    'Technology': 'technology',
    'Science': 'science',
    'Climate': 'climate',
    'Personal tech': 'personaltech',
    'Energy': 'energyenvironment',
    'Space': 'space',
    'Well': 'well',
    'Style': 'style',
    'Travel': 'travel',
    'Food': 'food',
    'Real estate': 'realestate',
    'Weddings': 'weddings',
    'T Magazine': 'tmagazine'
  }


  const handleDropdownItemClick = (category, buttonName) => {
    const section = buttonMapping[buttonName];
    navigate(`/category/${category.toLowerCase()}/${buttonName.toLowerCase()}`, { state: {section} });
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='hamburger-container'>
        <button className='hamburger-button' onClick={toggleMenu}>
          {isMenuOpen ? (
            <img src='/hamburger-close-menu.png' alt='close-menu' style={{ width: '30px' }} />
          ) : (
            <img src='/hamburger-menu.png' alt='open-menu' style={{ width: '30px' }} />
          )}
        </button>
      
      <ul className={`categories-container ${isMenuOpen ? 'open' : ''}`}>
        {dropdownStates.map((dropdownState, index) => {
          const dropdownRef = dropdownRefs.current[index] || React.createRef();
          dropdownRefs.current[index] = dropdownRef;

          return (
            <li className='category' key={index} onClick={() => toggleDropdown(index)} ref={dropdownRef}>
              <a className={`category-title ${dropdownState.isOpen ? 'colored' : ''}`}>{dropdownState.category}</a>
              {dropdownState.isOpen && (
                <ul className='dropdown' onClick={(event) => handleDropdownClick(event, index)}>
                  {dropdownState.category === 'USA' && (
                    <>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'USA News')}>USA News</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Politic')}>Politic</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Upshot')}>Upshot</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'New York')}>New York</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Health')}>Health</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Education')}>Education</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Obituaries')}>Obituaries</button></li>
                    </>
                  )}
                  {dropdownState.category === 'World' && (
                    <>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Europe')}>Europe</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Middle East')}>Middle East</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Africa')}>Africa</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Americas')}>Americas</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Asia')}>Asia</button></li>
                    </>
                  )}
                  {dropdownState.category === 'Business' && (
                    <>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Business')}>Business</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Economy')}>Economy</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Deal Book')}>Deal Book</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Media')}>Media</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Your money')}>Your money</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Automotive')}>Automotive</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Small business')}>Small business</button></li>
                    </>
                  )}
                  {dropdownState.category === 'Culture' && (
                    <>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Arts')}>Arts</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Dance')}>Dance</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Theater')}>Theater</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Movies')}>Movies</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Music')}>Music</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Art & Design')}>Art & Design</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'TV')}>TV</button></li>
                    </>
                  )}
                  {dropdownState.category === 'Sport' && (
                    <>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Sport news')}>Sport news</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Soccer')}>Soccer</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Tennis')}>Tennis</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Baseball')}>Baseball</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Golf')}>Golf</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Hockey')}>Hockey</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Football')}>Football</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Basket')}>Basket</button></li>
                    </>
                  )}
                  {dropdownState.category === 'Tech & Science' && (
                    <>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Technology')}>Technology</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Science')}>Science</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Climate')}>Climate</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Personal tech')}>Personal tech</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Energy')}>Energy</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Space')}>Space</button></li>
                    </>
                  )}
                  {dropdownState.category === 'Lifestyle' && (
                    <>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Well')}>Well</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Style')}>Style</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Travel')}>Travel</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Food')}>Food</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Real estate')}>Real estate</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Weddings')}>Weddings</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'T Magazine')}>T Magazine</button></li>
                    </>
                  )}
                </ul>
              )}
            </li>
          );

      })}
      </ul>
      </div>

    </>
  )
}
