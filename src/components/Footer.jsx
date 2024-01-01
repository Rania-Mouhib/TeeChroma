import state from "../store";
import { useSnapshot } from "valtio";

const Footer = () => {
  const snap = useSnapshot(state);

  return (
    <>
      <footer className="bg-dark pt-10 pb-8  ">
        <div className="container">
          {/* Free trial */}
          <div className="border-bottom border-white-10 pb-7">
            <div className="col-12 col-md-8 col-lg-6 d-flex mx-auto flex-column align-items-center justify-content-center">
              <h2 className="fs-1 fw-bolder text-white text-center">
                Try Sigma for free for 30 days with unlimited features.
              </h2>
              <a
                href="#"
                className="btn btn-primary mt-3 w-100 w-md-auto"
                role="button"
              >
                Start free trial
              </a>
            </div>
          </div>
          {/* Free trial*/}
        </div>
        {/* Footer Menus*/}
        <div className="container pt-7">
          <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center">
            {/* Footer Logo*/}
            <a
              className="d-flex align-items-center lh-1 text-white transition-opacity opacity-50-hover text-decoration-none mb-4 mb-md-0"
              role="button"
              onClick={() => (state.page = "home")}
            >
              {/* Logo SVG Icon*/}
              <span className="f-w-7 d-block text-success me-2">
                <img src="logo.png" alt="TeeChroma Logo" />
              </span>
              {/*/ Logo SVG Icon */}
              <span className="fw-bold">Sigma</span>
            </a>
            {/* /Footer Logo*/}
            {/* Footer socials*/}
            <ul className="list-unstyled d-flex align-items-center justify-content-end">
              <li className="ms-5">
                <a
                  role="button"
                  className="text-white text-decoration-none opacity-50-hover transition-opacity"
                >
                  <i className="ri-facebook-circle-line ri-lg" />
                </a>
              </li>
              <li className="ms-5">
                <a
                  role="button"
                  className="text-white text-decoration-none opacity-50-hover transition-opacity"
                >
                  <i className="ri-twitter-line ri-lg" />
                </a>
              </li>
              <li className="ms-5">
                <a
                  role="button"
                  className="text-white text-decoration-none opacity-50-hover transition-opacity"
                >
                  <i className="ri-instagram-line ri-lg" />
                </a>
              </li>
              <li className="ms-5">
                <a
                  role="button"
                  className="text-white text-decoration-none opacity-50-hover transition-opacity"
                >
                  <i className="ri-snapchat-line ri-lg" />
                </a>
              </li>
            </ul>
            {/* Footer socials*/}
          </div>
          <div className="d-flex flex-wrap justify-content-between mt-5 mt-lg-7">
            {/* Menu*/}
            <div className="w-100 w-sm-50 w-lg-auto mb-4 mb-lg-0">
              <h6 className="text-uppercase fs-xs fw-bolder tracking-wider text-white opacity-50">
                Product
              </h6>
              <ul className="list-unstyled footer-nav">
                <li>
                  <a href="#">
                    Page builder{" "}
                    <span className="badge bg-danger rounded ms-2 align-middle">
                      new
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">AI generator</a>
                </li>
                <li>
                  <a href="#">Landing page templates</a>
                </li>
                <li>
                  <a href="#">Sketch plugin</a>
                </li>
                <li>
                  <a href="#">
                    Figma addon{" "}
                    <span className="badge bg-primary rounded ms-2 align-middle">
                      beta
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">XD integration</a>
                </li>
              </ul>
            </div>
            {/* /Menu*/}
            {/* Menu*/}
            <div className="w-100 w-sm-50 w-lg-auto mb-4 mb-lg-0">
              <h6 className="text-uppercase fs-xs fw-bolder tracking-wider text-white opacity-50">
                Company
              </h6>
              <ul className="list-unstyled footer-nav">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Our core values</a>
                </li>
                <li>
                  <a href="#">Join our team</a>
                </li>
                <li>
                  <a href="#">Our blog</a>
                </li>
                <li>
                  <a href="#">Latest news</a>
                </li>
                <li>
                  <a href="#">Share price</a>
                </li>
              </ul>
            </div>
            {/* /Menu*/}
            {/* Menu*/}
            <div className="w-100 w-sm-50 w-lg-auto mb-4 mb-lg-0">
              <h6 className="text-uppercase fs-xs fw-bolder tracking-wider text-white opacity-50">
                Navigation
              </h6>
              <ul className="list-unstyled footer-nav">
                <li>
                  <a href="#">Start free trial</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Register</a>
                </li>
                <li>
                  <a href="#">Help &amp; support</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Forgotten password</a>
                </li>
              </ul>
            </div>
            {/* /Menu*/}
            {/* Menu*/}
            <div className="w-100 w-sm-50 w-lg-auto mb-4 mb-lg-0">
              <h6 className="text-uppercase fs-xs fw-bolder tracking-wider text-white opacity-50">
                Legals
              </h6>
              <ul className="list-unstyled footer-nav">
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; conditions</a>
                </li>
                <li>
                  <a href="#">Cookie policy</a>
                </li>
                <li>
                  <a href="#">Refund policy</a>
                </li>
                <li>
                  <a href="#">GDPR information</a>
                </li>
                <li>
                  <a href="#">Company legals</a>
                </li>
              </ul>
            </div>
            {/* /Menu*/}
          </div>
        </div>
        {/* Footer Menus*/}
        {/* Footer bottom*/}
        <div className="container">
          <div className="border-top pt-6 mt-7 border-white-10 d-flex flex-column flex-md-row justify-content-between align-items-center">
            <span className="small text-white opacity-50 mb-2 mb-md-0">
              All rights reserved © TeeChroma 2023 - by L&R
            </span>
            <span className="small text-white opacity-50">
              Terms of service | Security policy
            </span>
          </div>
        </div>
        {/* Footer bottom*/}
      </footer>
    </>
  );
};

export default Footer;
