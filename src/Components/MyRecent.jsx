import { useState, useEffect } from "react";
import { Container, Row, Col, Carousel, Spinner, Badge } from "react-bootstrap";

const MyRecent = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "ebb7fabe405f613b137665b33b3cde68";
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  const riproduciSuono = () => {
    const audio = new Audio("/Audio/hover-sound-effect.mp3");
    audio.volume = 0.4;
    audio.play().catch(() => {});
  };

  useEffect(() => {
    const url2026 = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=it-IT&primary_release_year=2026&sort_by=popularity.desc`;

    fetch(`${url2026}&page=1`)
      .then((res) => res.json())
      .then((data1) => {
        fetch(`${url2026}&page=2`)
          .then((res) => res.json())
          .then((data2) => {
            setMovies([...data1.results, ...data2.results]);
            setLoading(false);
          })
          .catch((err) => console.error("Errore Pagina 2:", err));
      })
      .catch((err) => {
        console.error("Errore Pagina 1:", err);
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
          <h1 className="fw-bold mb-0 me-4">Novità 2026</h1>
          <div className="ms-auto d-flex border border-secondary">
            <button className="btn btn-dark btn-sm border-0 rounded-0 px-3 py-1">
              <i className="bi bi-text-left text-secondary"></i>
            </button>
            <button className="btn btn-dark btn-sm border-0 rounded-0 px-3 py-1 border-start border-secondary">
              <i className="bi bi-three-dots-vertical text-light"></i>
            </button>
          </div>
        </div>

        <h5 className="mb-3 text-danger fw-bold">I più attesi del 2026</h5>
        <Carousel
          interval={null}
          indicators={true}
          className="custom-carousel mb-5"
        >
          <Carousel.Item>
            <Row className="g-2">
              {movies.slice(0, 6).map((m) => (
                <Col
                  key={m.id}
                  xs={6}
                  md={4}
                  lg={2}
                  className="position-relative"
                >
                  <img
                    src={IMG_URL + m.poster_path}
                    className="img-fluid rounded movie-card"
                    alt={m.title}
                    onMouseEnter={riproduciSuono}
                  />
                  <Badge
                    bg="danger"
                    className="position-absolute top-0 start-0 m-2"
                  >
                    2026
                  </Badge>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="g-2">
              {movies.slice(6, 12).map((m) => (
                <Col key={m.id} xs={6} md={4} lg={2}>
                  <img
                    src={IMG_URL + m.poster_path}
                    className="img-fluid rounded movie-card"
                    alt={m.title}
                    onMouseEnter={riproduciSuono}
                  />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>

        <h5 className="mb-3">Blockbuster 2026</h5>
        <Carousel
          interval={null}
          indicators={true}
          className="custom-carousel mb-5"
        >
          <Carousel.Item>
            <Row className="g-2">
              {movies.slice(12, 18).map((m) => (
                <Col key={m.id} xs={6} md={4} lg={2}>
                  <img
                    src={IMG_URL + m.poster_path}
                    className="img-fluid rounded movie-card"
                    alt={m.title}
                    onMouseEnter={riproduciSuono}
                  />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="g-2">
              {movies.slice(18, 24).map((m) => (
                <Col key={m.id} xs={6} md={4} lg={2}>
                  <img
                    src={IMG_URL + m.poster_path}
                    className="img-fluid rounded movie-card"
                    alt={m.title}
                    onMouseEnter={riproduciSuono}
                  />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>

        <h5 className="mb-3">Scelti per te: 2026</h5>
        <Carousel
          interval={null}
          indicators={true}
          className="custom-carousel mb-5"
        >
          <Carousel.Item>
            <Row className="g-2">
              {movies.slice(24, 30).map((m) => (
                <Col key={m.id} xs={6} md={4} lg={2}>
                  <img
                    src={IMG_URL + m.poster_path}
                    className="img-fluid rounded movie-card"
                    alt={m.title}
                    onMouseEnter={riproduciSuono}
                  />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="g-2">
              {movies.slice(30, 36).map((m) => (
                <Col key={m.id} xs={6} md={4} lg={2}>
                  <img
                    src={IMG_URL + m.poster_path}
                    className="img-fluid rounded movie-card"
                    alt={m.title}
                    onMouseEnter={riproduciSuono}
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

export default MyRecent;
