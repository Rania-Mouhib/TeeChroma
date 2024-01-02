import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useSnapshot } from "valtio";
import state from "../store";

const AboutPage = () => {
  const snap = useSnapshot(state);
  return (
    <>
      {state.page === "about" && (
        <div>
          <Navbar />
          <main className="mt-0 ">
            {/* Page Title*/}
            <header className="pt-10">
              <div className="container">
                <div className="text-center col-12 col-sm-9 col-lg-7 col-xl-6 mx-auto position-relative z-index-20">
                  <h1 className="display-3 fw-bold mb-3">About us</h1>
                  <p className="text-muted lead mb-0">
                  Launched in 2023, TeeChroma is an online Customize design tool with a mission to make t-shirt designing accessible to everyone in the world.
                  </p>
                </div>
              </div>
            </header>
            {/* / Page Title*/}
            {/* Page Content Goes Here */}
            <div className="container position-relative z-index-20 py-7">
              {/* About Us Images*/}
              <div className="row g-3">
                {/* Images Left Side*/}
                <div className="col-12 col-lg-6 d-none d-lg-block">
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <picture>
                        <img
                          className="img-fluid rounded shadow-sm"
                          src="./assets/images/about-1.jpeg"
                          alt="HTML Bootstrap Template by Pixel Rocket"
                        />
                      </picture>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="row gy-3">
                        <div className="col-12">
                          <picture>
                            <img
                              className="img-fluid rounded shadow-sm"
                              src="./assets/images/about-2.jpeg"
                              alt="HTML Bootstrap Template by Pixel Rocket"
                            />
                          </picture>
                        </div>
                        <div className="col-12">
                          <picture>
                            <img
                              className="img-fluid rounded shadow-sm"
                              src="./assets/images/about-3.jpeg"
                              alt="HTML Bootstrap Template by Pixel Rocket"
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Images Left Side*/}
                {/* Images Right Side*/}
                <div className="col-12 col-lg-6">
                  <div className="row g-3">
                    <div className="col-12 col-md-6 d-none d-lg-block">
                      <picture>
                        <img
                          className="img-fluid rounded shadow-sm"
                          src="./assets/images/about-4.jpeg"
                          alt="HTML Bootstrap Template by Pixel Rocket"
                        />
                      </picture>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="row gy-3">
                        <div className="col-12">
                          <picture>
                            <img
                              className="img-fluid rounded shadow-sm"
                              src="./assets/images/about-5.jpeg"
                              alt="HTML Bootstrap Template by Pixel Rocket"
                            />
                          </picture>
                        </div>
                        <div className="col-12">
                          <picture>
                            <img
                              className="img-fluid rounded shadow-sm"
                              src="./assets/images/about-6.jpeg"
                              alt="HTML Bootstrap Template by Pixel Rocket"
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Images Right Side*/}
              </div>
              {/* About Us Images*/}
              {/* Company Summary*/}
              <div className="col-12 col-md-8 col-lg-6 mx-auto text-center py-4 border-bottom mb-5">
                <div className="my-5 d-none d-md-flex align-items-start justify-content-between">
                  <div>
                    <span className="display-3 fw-bold text-primary d-block">
                    10
                    </span>
                    <span className="d-block fs-9 fw-bolder tracking-wide text-uppercase text-muted">
                    COUNTRIES
                    </span>
                  </div>
                  <div>
                    <span className="display-3 fw-bold text-primary d-block">
                    80K
                    </span>
                    <span className="d-block fs-9 fw-bolder tracking-wide text-uppercase text-muted">
                      Customers
                    </span>
                  </div>
                  <div>
                    <span className="display-3 fw-bold text-primary d-block">
                    200
                    </span>
                    <span className="d-block fs-9 fw-bolder tracking-wide text-uppercase text-muted">
                      Staff
                    </span>
                  </div>
                </div>
              </div>
              {/* Company Summary*/}
              {/* Company Story*/}
              <div className="py-6 row gx-8 align-items-center">
                <div className="col-12 col-lg-6">
                  <p className="mb-3 small fw-bolder tracking-wider text-uppercase text-primary">
                    How it started
                  </p>
                  <h2 className="display-5 fw-bold mb-6">Our story</h2>
                  <p>
                  It all began when the Front-End Development teacher gave Lahcen & Rania the project of creating a React project to add value to the 2030 World Cup. Here’s where the story begins: they decided to create a platform for customizing t-shirts to support our favorite football team.
                  </p>
                  <p>
                    By Lahcen & Rania.
                  </p>
                </div>
                <div className="col-12 col-lg-6">
                  <picture>
                    <img
                      className="img-fluid rounded shadow-sm"
                      src="./assets/images/about-7.jpeg"
                      alt="HTML Bootstrap Template by Pixel Rocket"
                    />
                  </picture>
                </div>
              </div>
              {/* /Company Story*/}
              {/* Company Leadership*/}
              <div className="py-8">
                <h2 className="display-5 fw-bold mb-6 text-center">Our team</h2>
                <div className="row g-6">
                  {/* Single Team*/}
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="card rounded shadow-lg h-100">
                      <div className="card-body d-flex align-items-center flex-column justify-content-center text-center p-5">
                        <picture className="avatar">
                          <img
                            className="img-fluid rounded-circle"
                            src="./assets/images/lahcen.jpg"
                            alt
                          />
                        </picture>
                        <p className="lead fw-bolder mb-0 mt-4">
                          Lahcen EZZARA
                        </p>
                        <p className="text-primary small fw-bold mb-4">
                          Co-Founder &amp; CEO
                        </p>
                        <p className="text-muted">
                          Artificial Intelligence & Software Engineering Student at ENSAM Casablanca, Python Passionate.
                        </p>
                        <ul className="list-unstyled d-flex align-items-center justify-content-center mb-0">
                          <li className="mx-2">
                            <a href="#" className="text-decoration-none">
                              <i className="ri-linkedin-box-fill ri-2x" />
                            </a>
                          </li>
                          <li className="mx-2">
                            <a href="#" className="text-decoration-none">
                              <i className="ri-facebook-box-fill ri-2x" />
                            </a>
                          </li>
                          <li className="mx-2">
                            <a href="#" className="text-decoration-none">
                              <i className="ri-twitter-fill ri-2x" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* / Single Team*/}
                  {/* Single Team*/}
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="card rounded shadow-lg h-100">
                      <div className="card-body d-flex align-items-center flex-column justify-content-center text-center p-5">
                        <picture className="avatar">
                          <img
                            className="img-fluid rounded-circle"
                            src="./assets/images/profile-small-4.jpeg"
                            alt
                          />
                        </picture>
                        <p className="lead fw-bolder mb-0 mt-4">Rania Mouhib</p>
                        <p className="text-primary small fw-bold mb-4">
                          Co-Founder &amp; CTO
                        </p>
                        <p className="text-muted">
                        Artificial Intelligence & Software Engineering Student at ENSAM Casablanca.
                        </p>
                        <ul className="list-unstyled d-flex align-items-center justify-content-center mb-0">
                          <li className="mx-2">
                            <a href="#" className="text-decoration-none">
                              <i className="ri-linkedin-box-fill ri-2x" />
                            </a>
                          </li>
                          <li className="mx-2">
                            <a href="#" className="text-decoration-none">
                              <i className="ri-facebook-box-fill ri-2x" />
                            </a>
                          </li>
                          <li className="mx-2">
                            <a href="#" className="text-decoration-none">
                              <i className="ri-twitter-fill ri-2x" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* / Single Team*/}
                  {/* Single Team*/}
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="card rounded shadow-lg h-100">
                      <div className="card-body d-flex align-items-center flex-column justify-content-center text-center p-5">
                        <picture className="avatar">
                          <img
                            className="img-fluid rounded-circle"
                            src="./assets/images/profile-small-4.jpeg"
                            alt
                          />
                        </picture>
                        <p className="lead fw-bolder mb-0 mt-4">Gary Waite</p>
                        <p className="text-primary small fw-bold mb-4">
                          Founder &amp; CTO
                        </p>
                        <p className="text-muted">
                          Mauris consequat sodales dolor, eu iaculis tortor
                          efficitur vel. Mauris sed felis augue argum felis.
                        </p>
                        <ul className="list-unstyled d-flex align-items-center justify-content-center mb-0">
                          <li className="mx-2">
                            <a href="#" className="text-decoration-none">
                              <i className="ri-linkedin-box-fill ri-2x" />
                            </a>
                          </li>
                          <li className="mx-2">
                            <a href="#" className="text-decoration-none">
                              <i className="ri-facebook-box-fill ri-2x" />
                            </a>
                          </li>
                          <li className="mx-2">
                            <a href="#" className="text-decoration-none">
                              <i className="ri-twitter-fill ri-2x" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  
                  
                  {/* / Single Team*/}
                </div>
              </div>
              {/* / Company Leadership*/}
              {/* Careers*/}
              <div className="d-flex justify-content-center my-5">
                <div className="rounded-pill border px-5 py-3 text-muted d-flex align-items-center">
                  Want to join our team?{" "}
                  <a
                    href="#"
                    className="fw-bold d-flex align-items-center ms-2"
                  >
                    We are hiring <i className="ri-arrow-right-line ms-1" />
                  </a>
                </div>
              </div>
              {/* / Careers*/}
            </div>
            {/* /Page Content */}
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default AboutPage;
