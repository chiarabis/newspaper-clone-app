import Searchbar from "./Searchbar"
import Categories from "./Categories"

export default function Navbar() {
  return (
    <>
    <div className='menu'>
        <Searchbar/>
        <Categories/>
    </div>
    <hr></hr>
    </>
  )
}
