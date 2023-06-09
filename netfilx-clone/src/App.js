import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from "./Request"


function App() {
  return (
    <div className="App">
      <Banner />
      <Row title="NETFILX ORIGINALS"
      fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now"fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated"fetchUrl={requests.fetchTopRatedMovies}/>
      <Row title="Action Movies"fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comdey Movies"fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies"fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies"fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries"fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
