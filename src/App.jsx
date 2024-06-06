// //import './App.css';
import Header from "./App/Components/Header/Header";
import Banner from "./App/Components/Banner/Banner";
import AboutPage from "./App/Pages/AboutPage";
import Services from "./App/Pages/Services";
import Portfolio from "./App/Components/Portfolio/Portfolio";
//import Footer from './App/Components/Footer/Footer';
import Testimonials from "./App/Components/Testimonials/testimonials";
import Contact from "./App/Components/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <AboutPage />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      {/* <Footer/> */}
    </>
  );
}

 export default App;


