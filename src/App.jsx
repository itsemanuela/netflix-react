import "./App.css";
import MyFooter from "./Components/MyFooter";
import MyNavbar from "./Components/MyNavbar";
import MyGallery from "./Components/MyMovies";
import Sottotitolo from "./Components/Sottotitolo";
import NetflixSound from "./Components/NetflixSound";

function App() {
  return (
    <>
      <NetflixSound />
      <header>
        <MyNavbar />
      </header>
      <main>
        <Sottotitolo />
        <MyGallery sagaName="Harry Potter" />
        <MyGallery sagaName="Spider Man" />
        <MyGallery sagaName="Matrix" />
        <MyGallery sagaName="The Lord of the Rings" />
        <MyGallery sagaName="Hunger Games" />
        <MyGallery sagaName="X-Men " />
        <MyGallery sagaName="Batman" />
        <MyGallery sagaName="James Bond" />
        <MyGallery sagaName="Superman" />
        <MyGallery sagaName="Star Wars" />
        <MyGallery sagaName="Twilight" />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
