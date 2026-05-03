import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Spinner, Badge } from "react-bootstrap";

const DettaglioSitcom = () => {
  const { id } = useParams();
  const [sitcom, setSitcom] = useState(null);
  const API_KEY = "ebb7fabe405f613b137665b33b3cde68";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=it-IT`,
    )
      .then((res) => res.json())
      .then((data) => setSitcom(data))
      .catch((err) => console.error("Errore nel caricamento:", err));
  }, [id]);

  if (!sitcom)
    return (
      <Spinner
        animation="border"
        variant="danger"
        className="d-block mx-auto mt-5"
      />
    );

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <Container className="mt-5">
        <Row className="align-items-center">
          <Col md={4} className="mb-4">
            <img
              src={`https://image.tmdb.org/t/p/w500${sitcom.poster_path}`}
              alt={sitcom.name}
              className="img-fluid rounded shadow-lg border border-secondary"
            />
          </Col>

          <Col md={8}>
            <h1 className="display-3 fw-bold mb-3">{sitcom.name}</h1>

            <div className="mb-4">
              <Badge bg="danger" className="me-2 p-2">
                Voto: {sitcom.vote_average?.toFixed(1)}
              </Badge>
              <Badge bg="secondary" className="me-2 p-2">
                Stagioni: {sitcom.number_of_seasons}
              </Badge>
              <Badge bg="info" className="p-2 text-dark">
                {sitcom.first_air_date?.split("-")[0]}
              </Badge>
            </div>

            <h3 className="text-secondary fw-bold">Trama</h3>
            <p className="lead" style={{ lineHeight: "1.8" }}>
              {sitcom.overview
                ? sitcom.overview
                : "Purtroppo la trama in italiano non è ancora disponibile per questa serie."}
            </p>

            {sitcom.genres && (
              <div className="mt-4">
                <span className="text-secondary fw-bold">Generi: </span>
                {sitcom.genres.map((g) => (
                  <span key={g.id} className="me-2 text-info">
                    #{g.name}
                  </span>
                ))}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DettaglioSitcom;
