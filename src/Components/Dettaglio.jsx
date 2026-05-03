import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Spinner, Badge, Button } from "react-bootstrap";

const Dettaglio = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=b3658703&i=${movieId}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error("Errore fetch:", err));
  }, [movieId]);

  if (!movie) {
    return (
      <div className="bg-dark min-vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }

  return (
    <Container className="text-white mt-5 pt-5">
      <Row className="align-items-center">
        <Col md={4}>
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400x600"
            }
            alt={movie.Title}
            className="img-fluid rounded shadow-lg border border-secondary"
          />
        </Col>

        <Col md={8} className="ps-md-5">
          <h1 className="fw-bold display-4">{movie.Title}</h1>

          <div className="d-flex gap-2 my-3">
            <Badge bg="danger">{movie.Year}</Badge>
            <Badge bg="secondary">{movie.Runtime}</Badge>
            <Badge bg="dark" className="border border-secondary">
              {movie.Genre}
            </Badge>
          </div>

          <p className="lead text-secondary fst-italic">"{movie.Plot}"</p>
          <hr className="border-secondary" />

          <p>
            <strong>Regia:</strong> {movie.Director}
          </p>
          <p>
            <strong>Attori:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Rating:</strong>{" "}
            <i className="bi bi-star-fill text-warning"></i> {movie.imdbRating}
          </p>

          <Button variant="light" className="px-5 py-2 fw-bold me-3 mt-3">
            Riproduci
          </Button>
          <Button
            variant="outline-secondary"
            className="px-5 py-2 fw-bold mt-3 text-white"
          >
            Aggiungi alla lista
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Dettaglio;
