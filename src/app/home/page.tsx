import Header from "../../components/header/Header";
import Automobiles from "../../components/automobiles/Automobiles";
import Footer from "../../components/footer/Footer";
import Filter from "../../components/filter/Filter";

export default function Home() {
  return (
    <>
      <Header />
      <Filter/>
      <Automobiles/>
      <Footer/>
    </>
  );
}
