import { Modal, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PlansModal = ({ show, handleClose }) => {
  const navigate = useNavigate();

  const handleSelection = () => {
    handleClose();
    navigate("/logout");
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      centered
      contentClassName="bg-dark text-white border-secondary shadow-lg"
    >
      <Modal.Header closeVariant="white" className="border-secondary">
        <Modal.Title className="fw-bold">
          I NUOVI ABBONAMENTI <span className="text-danger">NETFLIX</span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-4" style={{ backgroundColor: "#141414" }}>
        <Row className="g-3">
          <Col md={4}>
            <Card className="h-100 bg-secondary bg-opacity-10 border-secondary text-white text-center">
              <Card.Body className="d-flex flex-column">
                <div className="fw-bold mb-3 p-1 bg-dark rounded small">
                  CON PUBBLICITÀ
                </div>
                <h2 className="fw-bold">€5,49</h2>
                <p className="small text-secondary mb-4">
                  al mese
                  <br />
                  (senza download)
                </p>

                <Button
                  variant="outline-danger"
                  className="mt-auto fw-bold"
                  onClick={handleSelection}
                >
                  SCEGLI
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 bg-dark border-danger text-white text-center shadow">
              <Card.Body className="d-flex flex-column">
                <div className="fw-bold mb-3 p-1 bg-danger rounded small">
                  STANDARD
                </div>
                <h2 className="fw-bold">€12,99</h2>
                <p className="small text-secondary mb-4">
                  al mese
                  <br />
                  (due schermi senza pubblicità)
                </p>
                <Button
                  variant="danger"
                  className="mt-auto fw-bold"
                  onClick={handleSelection}
                >
                  SCEGLI
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 bg-secondary bg-opacity-10 border-secondary text-white text-center">
              <Card.Body className="d-flex flex-column">
                <div className="fw-bold mb-3 p-1 bg-dark rounded small">
                  PREMIUM
                </div>
                <h2 className="fw-bold">€17,99</h2>
                <p className="small text-secondary mb-4 text-xs">
                  al mese
                  <br />
                  (quattro dispositivi contemporaneamente)
                </p>
                <Button
                  variant="outline-danger"
                  className="mt-auto fw-bold"
                  onClick={handleSelection}
                >
                  SCEGLI
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Modal.Body>

      <Modal.Footer className="border-secondary justify-content-center">
        <small className="text-secondary text-center">
          La disponibilità dei contenuti in HD e Ultra HD dipende dal piano e
          dalle capacità del dispositivo.
        </small>
      </Modal.Footer>
    </Modal>
  );
};

export default PlansModal;
