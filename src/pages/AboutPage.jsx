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
                    Launched in 2017, TeeChroma is an online template design
                    tool with a mission to make landing page design accessible
                    to everyone in the world.
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
                      12
                    </span>
                    <span className="d-block fs-9 fw-bolder tracking-wide text-uppercase text-muted">
                      Locations
                    </span>
                  </div>
                  <div>
                    <span className="display-3 fw-bold text-primary d-block">
                      75K
                    </span>
                    <span className="d-block fs-9 fw-bolder tracking-wide text-uppercase text-muted">
                      Customers
                    </span>
                  </div>
                  <div>
                    <span className="display-3 fw-bold text-primary d-block">
                      160
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
                    In 2015, one of our founders had an experience with landing
                    pages where he realized that you can’t control your results,
                    but only act on them. This is what inspired him and the
                    other co-founder to build a landing page design tool which
                    helps users build their landing pages.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas quis tortor sed neque pellentesque suscipit.
                    Quisque finibus tristique faucibus. Pellentesque rhoncus
                    justo ac ipsum pulvinar commodo. Nam quis hendrerit dui.
                    Vestibulum dolor ligula, vehicula bibendum iaculis in,
                    placerat et sapien. Maecenas in odio at quam volutpat
                    lobortis.
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
                            src="./assets/images/profile-small-2.jpeg"
                            alt
                          />
                        </picture>
                        <p className="lead fw-bolder mb-0 mt-4">
                          Jack Johnston
                        </p>
                        <p className="text-primary small fw-bold mb-4">
                          Founder &amp; CEO
                        </p>
                        <p className="text-muted">
                          Serial angel investor and entrepreneur, Jack has
                          founded multiple successful startups prior to
                          TeeChroma.
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
                            src="./assets/images/profile-small-3.jpeg"
                            alt
                          />
                        </picture>
                        <p className="lead fw-bolder mb-0 mt-4">JP Laurent</p>
                        <p className="text-primary small fw-bold mb-4">
                          Executive Chairman
                        </p>
                        <p className="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas quis tortor sed neque pellentesque.
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
                  {/* Single Team*/}
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="card rounded shadow-lg h-100">
                      <div className="card-body d-flex align-items-center flex-column justify-content-center text-center p-5">
                        <picture className="avatar">
                          <img
                            className="img-fluid rounded-circle"
                            src="./assets/images/profile-small-5.jpeg"
                            alt
                          />
                        </picture>
                        <p className="lead fw-bolder mb-0 mt-4">
                          Patrica Smith
                        </p>
                        <p className="text-primary small fw-bold mb-4">
                          VP Marketing
                        </p>
                        <p className="text-muted">
                          Nullam faucibus placerat vestibulum. Vivamus blandit
                          risus a ligula efficitur tincidunt.
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
                            src="./assets/images/profile-small-6.jpeg"
                            alt
                          />
                        </picture>
                        <p className="lead fw-bolder mb-0 mt-4">
                          Samanth Rowson
                        </p>
                        <p className="text-primary small fw-bold mb-4">
                          Head Designer
                        </p>
                        <p className="text-muted">
                          Vestibulum fermentum urna sit amet dolor rutrum, non
                          consequat velit vehicula. Proin sed consequat diam.
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
                            src="./assets/images/profile-small-7.jpeg"
                            alt
                          />
                        </picture>
                        <p className="lead fw-bolder mb-0 mt-4">Jack Smith</p>
                        <p className="text-primary small fw-bold mb-4">
                          Technical Lead
                        </p>
                        <p className="text-muted">
                          Sed venenatis ligula tortor, vel pharetra massa
                          convallis a. Ut bibendum porttitor nisi ornare.
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
