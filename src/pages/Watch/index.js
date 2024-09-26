import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import styles from "./Watch.module.css";
import { useParams } from "react-router-dom";
import videos from "../../json/videos.json";
import PageNotFound from "../PageNotFound";
import ScrollToButton from "../../components/ScrollToButton";

function Watch() {
    // pega parametros e coloca na variavel, busca na listagem
    // de video e faz a comparacao
    const params = useParams()
    const video = videos.find((video) => { return video.id === params.id })
    if(!video) { return <PageNotFound/> }

    return (
        <>
            <ScrollToButton/>
            <Header/>
            <Container>
                <section className={styles.watch}>
                    <iframe 
                        width="854" height="480" 
                        src={`https://www.youtube.com/embed/${video.id}`} 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; 
                        clipboard-write; encrypted-media; gyroscope; 
                        picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                        </iframe>
                </section>
            </Container>
            <Footer/>
        </>
    )
}

export default Watch;