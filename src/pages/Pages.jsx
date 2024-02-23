import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import Home from "./Home"
import Searched from "./Searched"


function Pages(){
    const location = useLocation();
    //const showSearched = false;
    const showSearched = location.pathname.startsWith("/articlessearched/")

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home showSearched={showSearched}/>}/>
                <Route path="/articlessearched/:search" element={<Searched/>}/>
            </Routes>
        </AnimatePresence>
    )
}
export default Pages;