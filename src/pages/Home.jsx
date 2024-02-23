import Popular from '../components/Popular';
import Searched from '../pages/Searched';


function Home( {showSearched} ){
    //const [showSearched, setShowSearched] = useState();

    return (
      <div>
        {showSearched ? <Searched/> : <Popular />}
      </div>
    );
}
export default Home;