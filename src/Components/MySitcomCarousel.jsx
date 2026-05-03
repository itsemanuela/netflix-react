import { useState, useEffect } from "react";
import { Container, Row, Col, Carousel, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

//Stessa logica del MyFilmCarousel, ho cambiato l'endpoint della mia Api per recuperare tutte le sitcom

const MySitcomCarousel = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "ebb7fabe405f613b137665b33b3cde68";
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  const riproduciSuono = () => {
    const audio = new Audio("/Audio/hover-sound-effect.mp3");
    audio.volume = 0.5;
    audio.play().catch(() => {});
  };

  useEffect(() => {
    const urlBase = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=it-IT&with_genres=35&sort_by=popularity.desc`;

    fetch(`${urlBase}&page=1`)
      .then((res) => res.json())
      .then((data1) => {
        fetch(`${urlBase}&page=2`)
          .then((res) => res.json())
          .then((data2) => {
            const tutteLeSitcom = [...data1.results, ...data2.results];
            setShows(tutteLeSitcom);
            setLoading(false);
          })
          .catch((err) => console.error("Errore Pagina 2", err));
      })
      .catch((err) => {
        console.error("Errore Pagina 1", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <Spinner
        animation="border"
        variant="danger"
        className="d-block mx-auto mt-5"
      />
    );

  return (
    <div className="bg-dark text-white min-vh-100 pb-5">
      <Container fluid className="px-5 pt-4">
        <div className="d-flex align-items-center pt-4 mb-4">
          <h1 className="fw-bold mb-0 me-4">TV Sitcoms</h1>
          <div className="ms-auto d-flex border border-secondary">
            <button className="btn btn-dark btn-sm border-0 rounded-0 px-3 py-1">
              <i className="bi bi-text-left text-secondary"></i>
            </button>
            <button className="btn btn-dark btn-sm border-0 rounded-0 px-3 py-1 border-start border-secondary">
              <i className="bi bi-three-dots-vertical text-light"></i>
            </button>
          </div>
        </div>

        <h5 className="mb-3">Le Sitcom più amate</h5>
        <Carousel
          interval={null}
          indicators={true}
          className="custom-carousel mb-5"
        >
          <Carousel.Item>
            <Row className="g-2">
              {shows.slice(0, 6).map((s) => (
                <Col key={s.id} xs={6} md={4} lg={2}>
                  <Link to={`/tv-shows/${s.id}`}>
                    <img
                      src={IMG_URL + s.poster_path}
                      className="img-fluid rounded movie-card"
                      alt={s.name}
                      onMouseEnter={riproduciSuono}
                    />
                  </Link>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="g-2">
              {shows.slice(6, 12).map((s) => (
                <Col key={s.id} xs={6} md={4} lg={2}>
                  <Link to={`/tv-shows/${s.id}`}>
                    <img
                      src={IMG_URL + s.poster_path}
                      className="img-fluid rounded movie-card"
                      alt={s.name}
                      onMouseEnter={riproduciSuono}
                    />
                  </Link>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>

        <h5 className="mb-3">Grandi Classici TV</h5>
        <Carousel
          interval={null}
          indicators={true}
          className="custom-carousel mb-5"
        >
          <Carousel.Item>
            <Row className="g-2">
              {shows.slice(12, 18).map((s) => (
                <Col key={s.id} xs={6} md={4} lg={2}>
                  <Link to={`/tv-shows/${s.id}`}>
                    <img
                      src={IMG_URL + s.poster_path}
                      className="img-fluid rounded movie-card"
                      alt={s.name}
                      onMouseEnter={riproduciSuono}
                    />
                  </Link>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="g-2">
              {shows.slice(18, 24).map((s) => (
                <Col key={s.id} xs={6} md={4} lg={2}>
                  <Link to={`/tv-shows/${s.id}`}>
                    <img
                      src={IMG_URL + s.poster_path}
                      className="img-fluid rounded movie-card"
                      alt={s.name}
                      onMouseEnter={riproduciSuono}
                    />
                  </Link>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>

        <h5 className="mb-3">Show da non perdere</h5>
        <Carousel
          interval={null}
          indicators={true}
          className="custom-carousel mb-5"
        >
          <Carousel.Item>
            <Row className="g-2">
              {shows.slice(24, 30).map((s) => (
                <Col key={s.id} xs={6} md={4} lg={2}>
                  <Link to={`/tv-shows/${s.id}`}>
                    <img
                      src={IMG_URL + s.poster_path}
                      className="img-fluid rounded movie-card"
                      alt={s.name}
                      onMouseEnter={riproduciSuono}
                    />
                  </Link>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="g-2">
              {shows.slice(30, 36).map((s) => (
                <Col key={s.id} xs={6} md={4} lg={2}>
                  <Link to={`/tv-shows/${s.id}`}>
                    <img
                      src={IMG_URL + s.poster_path}
                      className="img-fluid rounded movie-card"
                      alt={s.name}
                      onMouseEnter={riproduciSuono}
                    />
                  </Link>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default MySitcomCarousel;
