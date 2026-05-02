import { Link, NavLink } from "react-router-dom";

const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top px-lg-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/movies">
          <img src="/Immagini/netflix_logo.png" alt="Netflix" width="110" />
        </Link>

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
              <NavLink className="nav-link" to="/movies" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tv-shows">
                Sitcom
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Saghe
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/recently-added">
                Recently Added
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav d-flex flex-row align-items-center gap-3">
            <li className="nav-item">
              <i className="bi bi-search text-light cursor-pointer"></i>
            </li>
            <li
              className="nav-item px-2 text-light fw-bold"
              style={{ cursor: "pointer" }}
            >
              KIDS
            </li>
            <li className="nav-item">
              <i className="bi bi-bell text-light"></i>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle p-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src="/Immagini/kids_icon.png"
                  alt="Profile"
                  width="32"
                  className="rounded"
                />
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
                <li>
                  <Link className="dropdown-item" to="/settings">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/account">
                    Account
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/logout">
                    Sign Out
                  </Link>
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
