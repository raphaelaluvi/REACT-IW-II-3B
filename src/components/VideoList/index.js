import styles from "./VideoList.module.css";
import Card from "../Card";

function VideoList({ videos, emptyHeading }) {

    const count = videos.length
    let heading = emptyHeading
    if(count > 0) {
        const noun = count> 1 ? 'videos' : 'videos';
        heading = `${count} ${noun}`
    }


    return(
        <section className={styles.videos}>
            <>
                <h2>{heading}</h2>
                <section className={styles.videos}>
                    { videos.map((video) => <Card id={video.id} key={video.id}/> ) }
                </section>
            </>
        </section>
    );
}

export default VideoList;