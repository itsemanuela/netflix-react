import { useState, useEffect } from "react";
import { Container, Row, Col, Carousel, Spinner } from "react-bootstrap";

const MyFilmCarousel = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "ebb7fabe405f613b137665b33b3cde68";
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  const riproduciSuono = () => {
    const audio = new Audio("/Audio/hover-sound-effect.mp3");
    audio.volume = 0.7;
    audio.play().catch((err) => console.log("Audio bloccato dal browser", err));
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=it-IT&page=1`,
    )
      .then((response) => response.json())
      .then((data1) => {
        fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=it-IT&page=2`,
        )
          .then((response) => response.json())
          .then((data2) => {
            const tuttiIFilm = [...data1.results, ...data2.results];
            setMovies(tuttiIFilm);
            setLoading(false);
          })
          .catch((err) => {
            console.error("Errore caricando pagina 2", err);
            setLoading(false);
          });
      })
      .catch((err) => {
        console.error("Errore caricando pagina 1", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-dark min-vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }

  return (
    <div className="bg-dark text-white min-vh-100 pb-5">
      <Container fluid className="px-5 pt-4">
        <div className="d-flex align-items-center pt-4 mb-4">
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
                <button className="dropdown-item">Comedy</button>
              </li>
              <li>
                <button className="dropdown-item">Drama</button>
              </li>
              <li>
                <button className="dropdown-item">Thriller</button>
              </li>
            </ul>
          </div>
          <div className="ms-auto d-flex border border-secondary">
            <button className="btn btn-dark btn-sm border-0 rounded-0 px-3 py-1">
              <i className="bi bi-text-left text-secondary"></i>
            </button>
            <button className="btn btn-dark btn-sm border-0 rounded-0 px-3 py-1 border-start border-secondary">
              <i className="bi bi-three-dots-vertical text-light"></i>
            </button>
          </div>
        </div>

        <h5 className="mb-3">Trending Now</h5>
        <Carousel
          interval={null}
          indicators={true}
          className="custom-carousel mb-5"
        >
          <Carousel.Item>
            <Row className="g-2">
              {movies.slice(0, 6).map((m) => (
                <Col key={`trend-1-${m.id}`} xs={6} md={4} lg={2}>
                  <img
                    src={IMG_URL + m.poster_path}
                    className="img-fluid rounded movie-card"
                    alt={m.title}
                    onMouseEnter={riproduciSuono}
                    style={{ cursor: "pointer" }}
                  />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="g-2">
              {movies.slice(6, 12).map((m) => (
                <Col key={`trend-2-${m.id}`} xs={6} md={4} lg={2}>
                  <img
                    src={IMG_URL + m.poster_path}
                    className="img-fluid rounded movie-card"
                    alt={m.title}
                    onMouseEnter={riproduciSuono}
                    style={{ cursor: "pointer" }}
                  />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>

        <h5 className="mb-3">Action & Adventure</h5>
        <Carousel
          interval={null}
          indicators={true}
          className="custom-carousel mb-5"
        >
          <Carousel.Item>
            <Row className="g-2">
              {movies.slice(12, 18).map((m) => (
                <Col key={`action-1-${m.id}`} xs={6} md={4} lg={2}>
                  <img
                    src={IMG_URL + m.poster_path}
                    className="img-fluid rounded movie-card"
                    alt={m.title}
                    onMouseEnter={riproduciSuono}
                    style={{ cursor: "pointer" }}
                  />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>

        <h5 className="mb-3">Drama Movies</h5>
        <Carousel
          interval={null}
          indicators={true}
          className="custom-carousel mb-5"
        >
          <Carousel.Item>
            <Row className="g-2">
              {movies.slice(24, 30).map((m) => (
                <Col key={`drama-1-${m.id}`} xs={6} md={4} lg={2}>
                  <img
                    src={IMG_URL + m.poster_path}
                    className="img-fluid rounded movie-card"
                    alt={m.title}
                    onMouseEnter={riproduciSuono}
                    style={{ cursor: "pointer" }}
                  />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default MyFilmCarousel;
