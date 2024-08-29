import Banner from "./components/Banner";
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from "./json/videos.json";

function App() {
  return (
    <>
      <Header/>
      <Banner image="home"/>

      {/* colocou os filhos dentro das tags (componente com os parametros) teste*/}
      <Container>
      <h2>Séries</h2>

        <section className="cards">
          
          {
            // esta mapeamendo e chamando cada um de video e dps cria um car pra cada video e chamando o id
            videos.map(video => {
              return <Card id={video.id} key = {video.id}/>
            })
          }

        </section>
      </Container>

      <Footer/>
    </>
  );
}

export default App;
