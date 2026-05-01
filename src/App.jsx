import "./App.css";
import MyFooter from "./Components/MyFooter";
import MyNavbar from "./Components/MyNavbar";
import MyGallery from "./Components/MyMovies";

function App() {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main>
        <MyGallery sagaName="Harry Potter" />

        <MyGallery sagaName="Hunger Games" />

        <MyGallery sagaName="Twilight" />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
