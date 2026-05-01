import { Component } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";

class SingleFilm extends Component {
  render() {
    const { movie } = this.props;

    if (!movie) return null;

    return (
      <Container className="my-5 p-4 bg-dark text-white rounded shadow-lg border border-secondary">
        <Row className="align-items-center">
          <Col md={4}>
            <img
              src={movie.img}
              className="img-fluid rounded shadow"
              alt={movie.title}
            />
          </Col>

          <Col md={8}>
            <h1 className="display-4 fw-bold">{movie.title}</h1>
            <div className="d-flex gap-2 mb-3">
              <Badge bg="danger">{movie.year}</Badge>
              <Badge bg="secondary">IMDb ID: {movie.id}</Badge>
            </div>

            <p className="lead mt-3">
              Clicca su "Modifica" per gestire i metadati del film nel
              Backoffice.
            </p>

            <hr className="my-4 border-secondary" />

            <div className="d-flex gap-3">
              <button
                className="btn btn-outline-light"
                onClick={this.props.onClose}
              >
                Chiudi
              </button>

              <a
                href={`/backoffice.html?id=${movie.id}`}
                className="btn btn-danger"
              >
                Modifica Film
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SingleFilm;
