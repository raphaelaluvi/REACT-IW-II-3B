import { useEffect, useState } from "react";
import VideoList from "../VideoList";
import styles from "./SearchVideoList.module.css";
import Loader from "../Loader";

//filtra video por categoria ou titulo
function filterVideos(videos, searchText) {
    return videos.filter( (video) => video.category.includes(searchText) || video.
    title.includes(searchText) )
}

function SearchVideoList({ videos }) {

    const [ searchText, setSearchText ] = useState()
    const foundVideos = filterVideos(videos, searchText)

    const [ loading, setLoading ] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
    }, [])

    return (
        <section className={styles.container}>
            <input
                type="search"
                placeholder="Pesquisar..."
                value={searchText}
                onChange={event => setSearchText(event.target.value)}
            />

            {
                loading ? <Loader/> :
                <VideoList
                    videos={foundVideos} 
                    emptyHeading={`Sem vídeos sobre ${"searchText"}`}
                />
            }
        </section>
    )
}

export default SearchVideoList;