import { Component } from "react";
import { Container, Carousel, Row, Col, Spinner, Alert } from "react-bootstrap";

class MyGallery extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: "",
  };
  //suono hover sulle card!
  riproduciSuono = () => {
    const audio = new Audio("./public/Audio/hover-sound-effect.mp3");
    audio.volume = 0.4;
    audio.play().catch((err) => console.log("Audio bloccato:", err));
  };

  getFilm = () => {
    this.setState({ isLoading: true });

    fetch(`http://www.omdbapi.com/?apikey=b3658703&s=${this.props.sagaName}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella risposta del server");
        }
      })
      .then((data) => {
        if (data.Response === "True") {
          const validMovies = data.Search.filter(
            (m) => m.Poster && m.Poster !== "N/A" && m.Type === "movie",
          );
          //ho dovuto trovare un modo per filtrare i film in quanto mi sono accorta che parti dell'api sono "rotte" e non permettono di mostrare i poster: dunque ho cercato un metodo per non mostrare quelli rotti (display:none sullo style delle img)
          this.setState({
            movies: validMovies,
            isLoading: false,
            isError: "",
          });
        } else {
          throw new Error(data.Error);
        }
      })
      .catch((err) => {
        console.error("Errore nel recupero film:", err);
        this.setState({ isError: err.message, isLoading: false });
      });
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
                      className="film-poster"
                      onMouseEnter={this.riproduciSuono}
                      onError={(e) => {
                        e.target.closest(".col").style.display = "none";
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
                        className="film-poster"
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
