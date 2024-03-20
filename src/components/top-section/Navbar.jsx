import Searchbar from "./Searchbar"
import Categories from "./categories/Categories"

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
