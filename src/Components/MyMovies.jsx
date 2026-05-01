import { Component } from "react";
import { Container, Carousel, Row, Col, Spinner, Alert } from "react-bootstrap";

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
      <Container fluid className="px-4 my-4">
        <h5 className="text-light mt-4 mb-3">{this.props.sagaName}</h5>

        {this.state.isLoading && (
          <div className="d-flex justify-content-center my-5">
            <Spinner animation="border" variant="danger" />
          </div>
        )}

        {this.state.isError && (
          <Alert variant="danger">{this.state.isError}</Alert>
        )}

        {!this.state.isLoading && !this.state.isError && (
          <Carousel
            id="carouselTrending"
            indicators={true}
            interval={null}
            className="custom-carousel pb-4"
          >
            <Carousel.Item>
              <Row className="flex-nowrap overflow-x-auto g-1 px-5 no-scrollbar">
                {this.state.movies.slice(0, 6).map((movie) => (
                  <Col key={movie.imdbID} xs={12} md={4} lg={2}>
                    <img
                      src={movie.Poster}
                      alt={movie.Title}
                      className="rounded film img-fluid"
                      style={{
                        aspectRatio: "2/3",
                        objectFit: "cover",
                        minWidth: "100%",
                      }}
                    />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>

            {this.state.movies.length > 6 && (
              <Carousel.Item>
                <Row className="flex-nowrap overflow-x-auto g-1 px-5 no-scrollbar">
                  {this.state.movies.slice(6, 12).map((movie) => (
                    <Col key={movie.imdbID} xs={12} md={4} lg={2}>
                      <img
                        src={movie.Poster}
                        alt={movie.Title}
                        className="rounded film img-fluid"
                        style={{
                          aspectRatio: "2/3",
                          objectFit: "cover",
                          minWidth: "100%",
                        }}
                      />
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

export default MyGallery;
