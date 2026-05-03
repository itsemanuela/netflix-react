import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MyTvShow from "./Components/MySitcomCarousel";

import MyFooter from "./Components/MyFooter";
import MyNavbar from "./Components/MyNavbar";
import MyGallery from "./Components/MyMovies";
import Sottotitolo from "./Components/Sottotitolo";
import NetflixSound from "./Components/NetflixSound";
import Settings from "./Components/Settings";
import Profile from "./Components/Profile";
import MyFilmCarousel from "./Components/MyFilmCarousel";
import MyRecent from "./Components/MyRecent";
import SignOut from "./SignOut";
import MySitcomCarousel from "./Components/MySitcomCarousel";
import Dettaglio from "./Components/Dettaglio";
import DettaglioSitcom from "./Components/DettaglioSitcom";

const AppContent = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === "/logout";

  return (
    <div className="App bg-dark min-vh-100 text-white">
      <NetflixSound />

      <header>{!isLoginPage && <MyNavbar />}</header>

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
          <Route path="/recently-added" element={<MyRecent />} />

          <Route path="/" element={<MySitcomCarousel />} />
          <Route path="/logout" element={<SignOut />} />
          <Route path="/movie-details/:movieId" element={<Dettaglio />} />
          <Route path="/tv-shows/:id" element={<DettaglioSitcom />} />
        </Routes>
      </main>

      <footer>{!isLoginPage && <MyFooter />}</footer>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
