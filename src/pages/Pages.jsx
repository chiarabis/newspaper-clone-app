import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import Home from "./Home"
import Searched from "./Searched"
import CategoriesNews from "./CategoriesNews"
import AllTopStories from "./AllTopStories"
import AllMostShared from "./AllMostShared"


function Pages(){
    const location = useLocation();
    const showSearched = location.pathname.startsWith("/articlessearched/")

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home showSearched={showSearched}/>}/>
                <Route path="/articlessearched/:search" element={<Searched/>}/>
                <Route path="/category/:category/:buttonName" element={<CategoriesNews/>}/>
                <Route path='/all-top-stories' element={<AllTopStories/>}/>
                <Route path='/all-most-shared' element={<AllMostShared/>}/>
            </Routes>
        </AnimatePresence>
    )
}
export default Pages;