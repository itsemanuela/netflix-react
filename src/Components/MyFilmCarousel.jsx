const MyFilmCarousel = () => {
  const riproduciSuono = () => {
    const audio = new Audio("/Audio/hover-sound-effect.mp3");
    audio.volume = 0.7;
    audio.play().catch(() => {});
  };

  return (
    <div className="netflix-wrapper text-white">
      <div className="d-flex align-items-center pt-4 mb-4 px-5">
        <h1 className="fw-bold mb-0 me-4">TV Shows</h1>
        <div className="dropdown">
          <button
            className="btn btn-dark border-light dropdown-toggle btn-sm px-3 fw-bold"
            type="button"
            data-bs-toggle="dropdown"
          >
            Genres
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li>
              <a className="dropdown-item" href="#">
                Comedy
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Drama
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Thriller
              </a>
            </li>
          </ul>
        </div>
      </div>

      <section className="mb-5">
        <h5 className="mb-3 px-5">Trending Now</h5>
        <div
          id="carouselTrending"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row g-1 px-5 netflix-scroll-x">
                <div className="col-6 col-md-4 col-lg-2">
                  <img
                    src="/Immagini/film-media/media0.webp"
                    className="netflix-img-card"
                    alt="movie"
                    onMouseEnter={riproduciSuono}
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <img
                    src="/Immagini/film-media/media1.jpg"
                    className="netflix-img-card"
                    alt="movie"
                    onMouseEnter={riproduciSuono}
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <img
                    src="/Immagini/film-media/media9.jpg"
                    className="netflix-img-card"
                    alt="movie"
                    onMouseEnter={riproduciSuono}
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <img
                    src="/Immagini/film-media/media2.webp"
                    className="netflix-img-card"
                    alt="movie"
                    onMouseEnter={riproduciSuono}
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <img
                    src="/Immagini/film-media/media3.webp"
                    className="netflix-img-card"
                    alt="movie"
                    onMouseEnter={riproduciSuono}
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <img
                    src="/Immagini/film-media/media4.jpg"
                    className="netflix-img-card"
                    alt="movie"
                    onMouseEnter={riproduciSuono}
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev netflix-nav-btn"
            type="button"
            data-bs-target="#carouselTrending"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next netflix-nav-btn"
            type="button"
            data-bs-target="#carouselTrending"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      <section className="mb-5">
        <h5 className="mb-3 px-5">Watch It Again</h5>
        <div id="carouselAgain" className="carousel slide" data-bs-ride="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row g-1 px-5 netflix-scroll-x">
                <div className="col-6 col-md-4 col-lg-2">
                  <img
                    src="/Immagini/film-media/media11.jpg"
                    className="netflix-img-card"
                    alt="movie"
                    onMouseEnter={riproduciSuono}
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <img
                    src="/Immagini/film-media/media12.jpg"
                    className="netflix-img-card"
                    alt="movie"
                    onMouseEnter={riproduciSuono}
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <img
                    src="/Immagini/film-media/media13.jpg"
                    className="netflix-img-card"
                    alt="movie"
                    onMouseEnter={riproduciSuono}
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <img
                    src="/Immagini/film-media/media14.webp"
                    className="netflix-img-card"
                    alt="movie"
                    onMouseEnter={riproduciSuono}
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <img
                    src="/Immagini/film-media/media15.jpg"
                    className="netflix-img-card"
                    alt="movie"
                    onMouseEnter={riproduciSuono}
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <img
                    src="/Immagini/film-media/media16.webp"
                    className="netflix-img-card"
                    alt="movie"
                    onMouseEnter={riproduciSuono}
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev netflix-nav-btn"
            type="button"
            data-bs-target="#carouselAgain"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next netflix-nav-btn"
            type="button"
            data-bs-target="#carouselAgain"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      <section className="mb-5">
        <h5 className="mb-3 px-5">New Releases</h5>
        <div
          id="carouselRelease"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row g-1 px-5 netflix-scroll-x">
                <div className="col-6 col-md-4 col-lg-2">
                  <img
                    src="/Immagini/film-media/media23.webp"
                    className="netflix-img-card"
                    alt="movie"
                    onMouseEnter={riproduciSuono}
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <img
                    src="/Immagini/film-media/media24.jpg"
                    className="netflix-img-card"
                    alt="movie"
                    onMouseEnter={riproduciSuono}
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <img
                    src="/Immagini/film-media/media25.webp"
                    className="netflix-img-card"
                    alt="movie"
                    onMouseEnter={riproduciSuono}
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <img
                    src="/Immagini/film-media/media26.webp"
                    className="netflix-img-card"
                    alt="movie"
                    onMouseEnter={riproduciSuono}
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <img
                    src="/Immagini/film-media/media27.jpg"
                    className="netflix-img-card"
                    alt="movie"
                    onMouseEnter={riproduciSuono}
                  />
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <img
                    src="/Immagini/film-media/media28.jpg"
                    className="netflix-img-card"
                    alt="movie"
                    onMouseEnter={riproduciSuono}
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev netflix-nav-btn"
            type="button"
            data-bs-target="#carouselRelease"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next netflix-nav-btn"
            type="button"
            data-bs-target="#carouselRelease"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default MyFilmCarousel;
