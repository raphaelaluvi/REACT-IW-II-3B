import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel";
import Category, { categories, filterCategory } from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ScrollToButton from "../../components/ScrollToButton";

function Home() {

  return (
    <>
      <ScrollToButton/>
      <Header />
      <Banner image="home" />

      {/* colocou os filhos dentro das tags (componente com os parametros)*/}
      <Container>

        {categories.map((category, index) =>
          <Category category={category} key={category.id || index}> {/* Add key prop */}
            <Carousel>
              {filterCategory(index).map((video) => <Card id={video.id} key={video.id} />)}
            </Carousel>
          </Category>
        )}

      </Container>

      <Footer />
    </>
  );
}

export default Home;
