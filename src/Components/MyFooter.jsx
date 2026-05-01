const MyFooter = () => {
  return (
    <footer className="mt-5 py-5 container">
      <div className="row justify-content-center">
        <div className="col-6 col-md-2 mb-3">
          <div className="d-flex mb-3">
            <a
              href="#"
              className="text-secondary me-3 text-decoration-none small fw-bold"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="#"
              className="text-secondary me-3 text-decoration-none small fw-bold"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="#"
              className="text-secondary me-3 text-decoration-none small fw-bold"
            >
              <i className="bi bi-twitter-x"></i>
            </a>
            <a
              href="#"
              className="text-secondary text-decoration-none small fw-bold"
            >
              <i className="bi bi-youtube"></i>
            </a>
          </div>

          <ul className="list-unstyled mt-3">
            <li>
              <a href="#" className="text-secondary text-decoration-none small">
                Audio and Subtitles
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary text-decoration-none small">
                Media Center
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary text-decoration-none small">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary text-decoration-none small">
                Contact us
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="btn btn-outline-secondary btn-sm mt-3 rounded-0"
          >
            Service Code
          </button>

          <div className="mt-3">
            <p className="text-secondary small mt-3">
              <i className="bi bi-c-circle"></i> 1997-2024 Netflix, Inc.
            </p>
          </div>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <ul className="list-unstyled mt-md-5">
            <li>
              <a href="#" className="text-secondary text-decoration-none small">
                Audio Description
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary text-decoration-none small">
                Investor Relations
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary text-decoration-none small">
                Legal Notices
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <ul className="list-unstyled mt-md-5">
            <li>
              <a href="#" className="text-secondary text-decoration-none small">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary text-decoration-none small">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary text-decoration-none small">
                Cookies Preferences
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <ul className="list-unstyled mt-md-5">
            <li>
              <a href="#" className="text-secondary text-decoration-none small">
                Gift Cards
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary text-decoration-none small">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary text-decoration-none small">
                Corporate Information
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
