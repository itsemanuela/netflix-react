import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyTvShow from "./Components/MySitcomCarousel";
//Per reindirizzare le pagine nel tuo progetto Netflix, ho seguito un flusso di lavoro basato su React Router DOM, infatti ho installato dal terminale il metodo BrowserRouter e studiato come fare per migliorare e semplificare il passaggio da una pagina all'altra sulla politica della SinglePage di react!

import MyFooter from "./Components/MyFooter";
import MyNavbar from "./Components/MyNavbar";
import MyGallery from "./Components/MyMovies";
import Sottotitolo from "./Components/Sottotitolo";
import NetflixSound from "./Components/NetflixSound";
import Settings from "./Components/Settings";
import Profile from "./Components/Profile";
import MyFilmCarousel from "./Components/MyFilmCarousel";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-dark min-vh-100 text-white">
        <NetflixSound />
        <header>
          <MyNavbar />
        </header>

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Sottotitolo />
                  <MyGallery sagaName="Harry Potter" />
                  <MyGallery sagaName="Spider Man" />
                  <MyGallery sagaName="Matrix" />
                  <MyGallery sagaName="The Lord of the Rings" />
                  <MyGallery sagaName="Hunger Games" />
                  <MyGallery sagaName="X-Men" />
                  <MyGallery sagaName="Batman" />
                  <MyGallery sagaName="James Bond" />
                  <MyGallery sagaName="Superman" />
                  <MyGallery sagaName="Star Wars" />
                  <MyGallery sagaName="Twilight" />
                </>
              }
            />

            <Route path="/settings" element={<Settings />} />

            <Route path="/account" element={<Profile />} />
            <Route path="/movies" element={<MyFilmCarousel />} />
            <Route path="/tv-shows" element={<MyTvShow />} />
          </Routes>
        </main>

        <footer>
          <MyFooter />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
