import { Component } from "react";
import { Container, Carousel, Spinner, Alert, Row, Col } from "react-bootstrap";

class MyGallery extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: "",
  };

  getFilm = () => {
    fetch(`http://www.omdbapi.com/?apikey=b3658703&s=${this.props.sagaName}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore di connessione", response.status);
        }
      })
      .then((data) => {
        if (data.Response === "True") {
          this.setState({ movies: data.Search, isLoading: false });
        } else {
          throw new Error(data.Error);
        }
      })
      .catch((err) =>
        this.setState({ isError: err.message, isLoading: false }),
      );
  };

  componentDidMount() {
    this.getFilm();
  }

  render() {
    return (
      <Container fluid className="px-5 my-4">
        <h4 className="text-light mb-3">{this.props.sagaName}</h4>

        {this.state.isLoading && (
          <Spinner
            animation="border"
            variant="danger"
            className="d-block mx-auto"
          />
        )}
        {this.state.isError && (
          <Alert variant="danger">{this.state.isError}</Alert>
        )}

        {!this.state.isLoading && !this.state.isError && (
          <Carousel
            indicators={true}
            interval={null}
            className="custom-carousel"
          >
            <Carousel.Item>
              <Row className="row-cols-2 row-cols-md-3 row-cols-lg-5 g-2">
                {this.state.movies.slice(0, 5).map((movie) => (
                  <Col key={movie.imdbID}>
                    <img
                      src={movie.Poster}
                      alt={movie.Title}
                      className="img-fluid rounded shadow movie-img"
                    />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="row-cols-2 row-cols-md-3 row-cols-lg-5 g-2">
                {this.state.movies.slice(0, 5).map((movie) => (
                  <Col key={movie.imdbID}>
                    <img
                      src={movie.Poster}
                      alt={movie.Title}
                      className="img-fluid rounded shadow movie-img"
                    />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          </Carousel>
        )}
      </Container>
    );
  }
}

export default MyGallery;
