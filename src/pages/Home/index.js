import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Category, {categories, filterCategory} from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {
  return (
    <>
      <Header/>
      <Banner image="home"/>

      {/* colocou os filhos dentro das tags (componente com os parametros)*/}
      <Container>
        
        { categories.map((category, index) => 
          <Category category = {category}>
            {/* esta mapeamendo e chamando cada um de video e dps cria um car pra cada video e chamando o id */}
              { filterCategory(index).map((video) => <Card id={video.id} key = {video.id}/> )}
          </Category>  
        )}

      </Container>

      <Footer/>
    </>
  );
}

export default Home;
