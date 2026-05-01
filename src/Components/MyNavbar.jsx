const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top px-lg-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            id="logoprincipale"
            src="./Immagini/netflix_logo.png"
            alt="Netflix"
            width="110"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tv Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Recently Added
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                My List
              </a>
            </li>
          </ul>
          <ul className="navbar-nav d-flex flex-row align-items-center gap-3">
            <li className="nav-item search-box">
              <input type="checkbox" id="check" />

              <label htmlFor="check" className="nav-link">
                <i className="bi bi-search"></i>
              </label>

              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
            </li>

            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                KIDS
              </a>
            </li>
            <li className="nav-item search-box">
              <a href="#">
                {" "}
                <i className="bi bi-bell text-light"></i>{" "}
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <img
                  src="./Immagini/avatar.png"
                  alt="Profile"
                  width="32"
                  className="rounded"
                />
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" target="_blank" href="#">
                    Account
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" id="dangerzone" href="#">
                    Sign Out
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
