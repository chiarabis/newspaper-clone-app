import MostShared from "./othernews-section/MostShared"
import TopStories from "./othernews-section/TopStories"
import Jobs from "./othernews-section/Jobs"
import Opinion from "./othernews-section/Opinion"
import '../css/othernews.css'

export default function OtherNews() {
    
    return (
        <>
        <section className='othernews-container'>
            <MostShared/>
            <TopStories/>
            <Opinion/>
            <Jobs/>
        </section>

        <hr/>
        </>
    )
}
