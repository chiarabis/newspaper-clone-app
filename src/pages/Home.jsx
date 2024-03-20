import { useState, useEffect } from 'react';
import Popular from '../components/Popular';
import OtherNews from '../components/othernews-section/OtherNews';
import BookBestSellers from '../components/book-section/BookBestSellers';
import BookReview from '../components/book-section/BookReview';


function Home(){
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingHomepage = async () => {
      try {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      } catch (error) {
        console.log('Error during loading:', error.message);
      }
    };
    loadingHomepage();
  }, []);

  return (
    <>
      {loading ? (
        <span className="loader"></span>
      ) : (
      <>
        <Popular />
        <OtherNews />
        <BookBestSellers />
        <BookReview />
      </>
      )}
    </>
  );
}
export default Home;