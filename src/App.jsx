
//import Home from "./pages/Home"
import { BrowserRouter } from "react-router-dom"
import Pages from "./pages/Pages"
import Header from './components/Header';
import Navbar from './components/Navbar';



function App() {

  return (
    <>
      <BrowserRouter>

          <Header/>
          <Navbar/>

          <Pages/>
                
      </BrowserRouter>
    </>
  )
}

export default App
