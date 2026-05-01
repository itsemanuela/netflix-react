import "./App.css";
import MyFooter from "./Components/MyFooter";
import MyNavbar from "./Components/MyNavbar";
import MyGallery from "./Components/MyMovies";
import Sottotitolo from "./Components/Sottotitolo";

function App() {
  return (
    <>
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
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
