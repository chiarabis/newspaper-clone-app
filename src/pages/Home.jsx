import Popular from '../components/Popular';
import Searched from '../pages/Searched';
import OtherNews from '../components/OtherNews';
import BookBestSellers from '../components/BookBestSellers';
import BookReview from '../components/BookReview';

// eslint-disable-next-line react/prop-types
function Home( {showSearched} ){
    return (
      <>
        {showSearched ? <Searched/> : <Popular />}
        <OtherNews/>
        <BookBestSellers/>
        <BookReview/>
      </>
    );
}
export default Home;