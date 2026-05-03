import { useState, useEffect } from "react";
import { Toast, ToastContainer, Button } from "react-bootstrap";
import PlansModal from "./PlansModal";

const Modale = () => {
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowToast(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenPlans = () => {
    setShowToast(false);
    setShowModal(true);
  };

  return (
    <>
      <ToastContainer className="netflix-toast-container">
        <Toast
          id="toastAbbonamento"
          show={showToast}
          onClose={() => setShowToast(false)}
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
            <Button
              variant="danger"
              size="sm"
              className="w-100 fw-bold py-2"
              onClick={handleOpenPlans}
            >
              SCOPRI I PIANI
            </Button>
          </Toast.Body>
        </Toast>
      </ToastContainer>

      <PlansModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default Modale;
