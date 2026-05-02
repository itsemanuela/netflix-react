const Sottotitolo = () => {
  return (
    <div className="d-flex align-items-center pt-4 mb-4">
      <h1 className="fw-bold mb-4 mt-4 me-4 ms-3">Le Saghe più amate!</h1>
      <div className="dropdown">
        <button
          className="btn btn-dark border-light dropdown-toggle btn-sm px-3 fw-bold"
          type="button"
          data-bs-toggle="dropdown"
        >
          Genres
        </button>
        <ul className="dropdown-menu dropdown-menu-dark">
          <li>
            <a className="dropdown-item" href="#">
              Comedy
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Drama
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Thriller
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sottotitolo;
