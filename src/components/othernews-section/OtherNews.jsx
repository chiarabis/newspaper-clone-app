import MostShared from "./MostShared"
import TopStories from "./TopStories"
import Jobs from "./Jobs"
import Opinion from "./Opinion"
import './othernews.css'

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
