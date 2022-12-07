import React from "react";
import Bottom from "./components/Bottom/Bottom";
import Center from "./components/Center/Center";
import Foto from "./components/Foto/Foto";
import Nav from "./components/Nav/Nav"
import Work from "./components/Work/Work";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";

function App() {
  return (
    <div className="App"> 
      <Nav/>
      <Header/>
      <Main/>
      <Work/>
      <Center/>
      <Foto/>
      <Bottom/>
      <Footer/>
    </div>
  );
}

export default App;
