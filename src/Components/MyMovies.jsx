import { Component } from "react";
import { Container, Carousel, Row, Col, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

class MyMovies extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: "",
  };

  getFilm = () => {
    this.setState({ isLoading: true });

    fetch(
      `http://www.omdbapi.com/?apikey=b3658703&s=${encodeURIComponent(
        this.props.sagaName,
      )}&type=movie`,
    )
      .then((response) => {
        if (!response.ok) throw new Error("Errore di rete");
        return response.json();
      })
      .then((data) => {
        if (data.Response === "True") {
          const uniqueMovies = data.Search.filter(
            (movie, index, self) =>
              index === self.findIndex((m) => m.imdbID === movie.imdbID),
          );

          this.setState({
            movies: uniqueMovies,
            isLoading: false,
            isError: "",
          });
        } else {
          throw new Error(data.Error);
        }
      })
      .catch((err) => {
        this.setState({ isError: err.message, isLoading: false });
      });
  };

  componentDidMount() {
    this.getFilm();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sagaName !== this.props.sagaName) {
      this.getFilm();
    }
  }

  render() {
    const { movies, isLoading, isError } = this.state;

    return (
      <Container fluid className="px-4 my-4">
        <h5 className="text-light mt-4 mb-3 text-capitalize">
          {this.props.sagaName}
        </h5>

        {isLoading && (
          <div className="d-flex justify-content-center my-5">
            <Spinner animation="border" variant="danger" />
          </div>
        )}

        {isError && <Alert variant="danger">{isError}</Alert>}

        {!isLoading && !isError && (
          <Carousel
            id={`carousel-${this.props.sagaName.replace(/\s+/g, "")}`}
            indicators={false}
            interval={null}
          >
            <Carousel.Item>
              <Row className="flex-nowrap g-1 px-5">
                {movies.slice(0, 6).map((movie) => (
                  <Col key={movie.imdbID} xs={12} md={4} lg={2}>
                    <Link to={`/movie-details/${movie.imdbID}`}>
                      <img
                        src={
                          movie.Poster !== "N/A"
                            ? movie.Poster
                            : "https://via.placeholder.com/300x450?text=No+Poster"
                        }
                        alt={movie.Title}
                        className="img-fluid rounded film-poster movie-card"
                        style={{ cursor: "pointer" }}
                      />
                    </Link>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>

            {movies.length > 6 && (
              <Carousel.Item>
                <Row className="flex-nowrap g-1 px-5">
                  {movies.slice(6, 12).map((movie) => (
                    <Col key={movie.imdbID} xs={12} md={4} lg={2}>
                      <Link to={`/movie-details/${movie.imdbID}`}>
                        <img
                          src={
                            movie.Poster !== "N/A"
                              ? movie.Poster
                              : "https://via.placeholder.com/300x450?text=No+Poster"
                          }
                          alt={movie.Title}
                          className="img-fluid rounded film-poster movie-card"
                          style={{ cursor: "pointer" }}
                        />
                      </Link>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            )}
          </Carousel>
        )}
      </Container>
    );
  }
}

export default MyMovies;
