import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import Home from "./Home"
import Searched from "./Searched"
import CategoriesNews from "./CategoriesNews"
import AllTopStories from "./AllTopStories"
import AllMostShared from "./AllMostShared"


function Pages(){
    return (
        <AnimatePresence mode="wait">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/articlessearched/:search" element={<Searched/>}/>
                <Route path="/category/:category/:buttonName" element={<CategoriesNews/>}/>
                <Route path='/all-top-stories' element={<AllTopStories/>}/>
                <Route path='/all-most-shared' element={<AllMostShared/>}/>
            </Routes>
        </AnimatePresence>
    )
}
export default Pages;