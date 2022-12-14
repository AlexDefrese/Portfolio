import React from "react";
import About from "./components/About/index";
import Contact from "./components/Contact/index";
import NavBar from "./components/NavBar/index";
import Work from "./components/Work/index";
import Skills from "./components/Skills/index";





function App() {
  return (
    <main >
      <NavBar />
      <About />
      <Work />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
