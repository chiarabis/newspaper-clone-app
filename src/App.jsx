import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import Header from './components/top-section/header/Header';
import Form from "./components/top-section/form/Form";
import Navbar from './components/top-section/Navbar';
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";



function App() {
  const [login, setLogin] = useState(false);
  const [subscribe, setSubscribe] = useState(false);


  const handleLoginClick = () => {
    setLogin(true);
  }

  const handleCloseForm = () => {
    setLogin(false);
    setSubscribe(false);
  }

  const handleSubscribeClick = () => {
    setSubscribe(true);
  }

  return (
    <>
      <BrowserRouter>
        <Helmet>
          <meta charset="UTF-8" />
          <title>Daily Newspaper</title>
          <meta name="description" content="News from the World - Information website creates with NYT API" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="keywords" content="news, best sellers, books, opinion, breaking news, local news, world, culture, education, information, communication, media" />
          <meta name="author" content="Chiara Bissolo" />
          <meta property="og:title" content="Daily Newspaper" />
          <meta property="og:description" content="News from the World - Information website creates with NYT API" />
          <meta property="og:image" content="/image-og.png" />
          <meta property="og:url" href="https://newspaper-clone-aepvqmjjh-chiaras-projects-ea049797.vercel.app" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://newspaper-clone-aepvqmjjh-chiaras-projects-ea049797.vercel.app" />
          <link rel="icon" type="image/png" href="/favicon/favicon.ico"/>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap" rel="stylesheet" />
        </Helmet>

        <Header onLoginClick={handleLoginClick} onSubscribeClick={handleSubscribeClick}/>
        <Navbar/>
        <Pages/>
        <Form login={login} subscribe={subscribe} onCloseForm={handleCloseForm} />
        <Footer/>

      </BrowserRouter>
    </>
  )
}

export default App;
