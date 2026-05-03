import { useState, useEffect } from "react";
import { Toast, ToastContainer, Button } from "react-bootstrap";

const Modale = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ToastContainer className="netflix-toast-container">
      <Toast
        id="toastAbbonamento"
        show={show}
        onClose={() => setShow(false)}
        className="bg-dark text-white border-secondary"
        autohide={false}
      >
        <Toast.Header className="bg-dark text-white border-secondary justify-content-between">
          <div className="d-flex align-items-center">
            <i className="bi bi-bell-fill text-danger me-2"></i>
            <strong className="me-auto text-danger text-uppercase">
              Offerta limitata
            </strong>
          </div>
        </Toast.Header>
        <Toast.Body className="d-flex flex-column justify-content-between">
          <p className="mb-4 mt-2">
            Guarda i tuoi titoli preferiti a partire da soli{" "}
            <strong className="text-white">5,49 €</strong>.
          </p>
          <Button variant="danger" size="sm" className="w-100 fw-bold py-2">
            SCOPRI I PIANI
          </Button>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default Modale;
