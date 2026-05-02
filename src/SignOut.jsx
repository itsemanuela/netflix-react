import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/movies");
  };

  return (
    <div className="login-wrapper">
      <header className="p-4">
        <img src="/Immagini/netflix_logo.png" alt="Netflix" width="160" />
      </header>

      <Container className="d-flex justify-content-center align-items-center flex-column login-content">
        <div className="login-box">
          <h1 className="fw-bold mb-3">Inserisci i tuoi dati per accedere</h1>
          <p className="text-secondary mb-4">
            Oppure{" "}
            <span className="text-white cursor-pointer">
              crea un nuovo account.
            </span>
          </p>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Indirizzo email o numero di cellulare"
                className="login-input"
                required
              />
            </Form.Group>

            <Button
              variant="danger"
              type="submit"
              className="w-100 login-btn fw-bold py-2"
            >
              Continua
            </Button>
          </Form>

          <div className="mt-4">
            <p className="text-secondary small d-flex align-items-center cursor-pointer">
              Chiedi assistenza <i className="bi bi-chevron-down ms-2"></i>
            </p>
          </div>

          <p className="recaptcha-text mt-5">
            Questa pagina è protetta da Google reCAPTCHA per garantire che tu
            non sia un bot.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default SignOut;
