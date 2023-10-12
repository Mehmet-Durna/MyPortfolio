import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import NavBar from "./components/Navbar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mehmet Durna</title>

      </Helmet>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
