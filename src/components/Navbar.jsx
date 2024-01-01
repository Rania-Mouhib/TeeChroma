import state from "../store";
import { useSnapshot } from "valtio";

import "../assets/css/theme.bundle.css";
import "../assets/css/libs.bundle.css";

import "../assets/js/theme.bundle.js";
import "../assets/js/vendor.bundle.js";

const Navbar = () => {
  const snap = useSnapshot(state);

  return (
    <div className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container">
        {/* Logo*/}
        <a
          className="navbar-brand d-flex align-items-center lh-1 me-10 transition-opacity opacity-75-hover"
          role="button"
          onClick={() => (state.page = "home")}
        >
          {/* Logo SVG Icon*/}
          <span className="f-w-7 d-block text-success me-2">
            <svg
              className="w-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 246.46 258.91"
            >
              <path
                d="M145.61,187.72,22.41,116.58,0,129.52l50.45,29.13L0,187.77l22.41,12.94s90.75,52.38,100.82,58.2l123.23-71.13L44.7,71.2l78.54-45.34,78.4,45.26-28,16.2-50.31-29L100.85,71.2l123.21,71.13,22.4-12.94L196,100.25q25.25-14.55,50.46-29.12L123.23,0,0,71.13,201.77,187.71l-78.52,45.41L44.8,187.78l28.06-16.19,50.34,29.07Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </span>
          {/*/ Logo SVG Icon */}
          <span className="fw-bold text-body">Sigma</span>
        </a>
        {/* / Logo*/}
        {/* Mobile Menu Btn*/}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="ri-menu-line" />
        </button>
        {/* /Mobile Menu Btn*/}
        <div
          className="navbar-collapse justify-content-between align-items-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="./pricing.html">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./about.html">
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => (state.page = "contact")}
                role="button"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="d-none d-lg-flex">
            <a className="btn btn-link text-muted" role="button">
              Login
            </a>
            <a
              
              className="btn btn-primary ms-2"
              role="button"
              onClick={() => (state.page = "customizer")}
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
