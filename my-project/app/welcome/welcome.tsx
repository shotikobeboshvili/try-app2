import Header from "./components/Header";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/footer";

export function Welcome() {
  return (
    <body>
      <Header/>
      <Home/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </body>
  );
}

