import React from 'react';
import "./App.css"
import Row from "./components/Row";
import Banner from "./components/Banner"
import requests from "./requests"
import Nav from "./components/Nav"

function App() {

  return (
    <div className="App">
    <Nav />
    <Banner />
      <Row title="ANIMATION" 
      fetchUrl={requests.fetchAnimantion} 
      isLargeRow
      />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchhorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomance} />
      <Row title="Triller Movies" fetchUrl={requests.fetchThriller} />
      <Row title="War Movies" fetchUrl={requests.fetchWar} />
      <Row title="Crime" fetchUrl={requests.fetchCrime} />
      <Row title="Drama" fetchUrl={requests.fetchDrama} />
      <Row title="Western" fetchUrl={requests.fetchWestern} />
      <Row title="Fantasy" fetchUrl={requests.fetchFantasy} />
      <Row title="Advanture" fetchUrl={requests.fetchAdventure} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentries} />
    </div>
  );
}

export default App;
