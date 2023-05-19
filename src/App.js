import React from "react";
import NavBar from "./componenets/navbar/NavBar";
import {originals,action,ComedyMovies,HorrorMovies,RomanceMovies,Documentaries} from './urls'
import './App.css'
import Banner from "./componenets/Banner/Banner";
import RowPost from "./componenets/RowPost/RowPost";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={ComedyMovies} title="Comedy " isSmall />
      <RowPost url={HorrorMovies} title="Horror " isSmall />
      <RowPost url={RomanceMovies} title="Romance " isSmall />
      <RowPost url={Documentaries} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
