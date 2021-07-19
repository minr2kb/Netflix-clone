import React from 'react';
import './App.css';
import Row from './components/Row';
import requests from './requests';
import Banner from "./components/Banner"
import Nav from './components/Nav';

function App() {
  return (
    <div className="app">
        <Nav/>
        {/* <div style={{position: "absolute"}}> */}
        <Banner/>
        <div style={{position: "relative", top:"-5rem"}}>
            <Row title="Trending Now" fetchURL={requests.fetchTrending} isLargeRow={false}/>
            <Row title="Top Rated" fetchURL={requests.fetchTopRated} isLargeRow={false}/>
            <Row title="Only on Netflix" fetchURL={requests.fetchNetflixOriginals} isLargeRow={true}/>
            <Row title="Action Movies" fetchURL={requests.fetchActionMovies} isLargeRow={false}/>
            <Row title="Comedies" fetchURL={requests.fetchComedyMovies} isLargeRow={false}/>
            <Row title="Romantic Movies" fetchURL={requests.fetchRomanceMovies} isLargeRow={false}/>
            <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} isLargeRow={false}/>
            <Row title="Sci-Fi Movies" fetchURL={requests.fetchSFMovies} isLargeRow={false}/>
            <Row title="Animations" fetchURL={requests.fetchAnimations} isLargeRow={false}/>
        </div>
        {/* </div> */}

    </div>
  );
}

export default App;
