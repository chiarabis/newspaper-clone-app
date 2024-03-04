import Popular from '../components/Popular';
import Searched from '../pages/Searched';
import OtherNews from '../components/OtherNews'

function Home( {showSearched} ){
    //const [showSearched, setShowSearched] = useState();

    return (
      <>
        {showSearched ? <Searched/> : <Popular />}
        <OtherNews/>
      </>
    );
}
export default Home;