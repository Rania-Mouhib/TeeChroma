import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useSnapshot } from "valtio";
import state from "../store";

const ContactPage = () => {
  const snap = useSnapshot(state);
  return (
    <>
      {state.page === "contact" && (
        <div>
          <div>
            {/* Navbar */}
            <Navbar />
            {/* / Navbar*/}
            {/* Main Section*/}
            <main className="mt-0 ">
              {/* Page Title*/}
              <header className="pt-10">
                <div className="container">
                  <div className="text-center col-12 col-sm-9 col-lg-7 col-xl-6 mx-auto position-relative z-index-20">
                    <h1 className="display-3 fw-bold mb-3">Contact us</h1>
                    <p className="text-muted lead mb-0">
                    Got questions? We've got answers. Contact us anytime!
                    </p>
                  </div>
                </div>
              </header>
              {/* / Page Title*/}
              {/* Page Content Goes Here */}
              <div className="container position-relative z-index-20">
                {/* Support Categories*/}
                
                {/* Support Categories*/}
                {/* Contact Details & Form*/}
                <div className="row gx-10 my-10 pt-5">
                  {/* Contact Form*/}
                  <div className="col-12 col-lg-8">
                    <p className="mb-3 small fw-bolder tracking-wider text-uppercase text-primary">
                      Get in touch
                    </p>
                    <h2 className="display-5 fw-bold mb-6">
                      Send us a message
                    </h2>
                    <form>
                      <div className="row g-5">
                        {/* Name*/}
                        <div className="col-12 col-md-6">
                          <label className="form-label">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Lahcen Ezzara"
                          />
                        </div>
                        {/* / Name*/}
                        {/* Email*/}
                        <div className="col-12 col-md-6">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="lahcen@teechroma.com"
                          />
                        </div>
                        {/* / Email*/}
                        {/* Company Name*/}
                        <div className="col-12 col-md-6">
                          <label className="form-label">Country</label>
                          <input
                            type="text"
                            className="form-control"
                            name="company"
                            placeholder="Morocco"
                          />
                        </div>
                        {/* / Company Name*/}
                        {/* Telephone*/}
                        <div className="col-12 col-md-6">
                          <label className="form-label">Telephone</label>
                          <input
                            type="text"
                            className="form-control"
                            name="telephone"
                            placeholder="+212 6 00 00 00 00"
                          />
                        </div>
                        {/* / Telephone*/}
                        {/* Project Information*/}
                        <div className="col-12">
                          <label className="form-label">Message</label>
                          <textarea
                            name="about"
                            className="form-control"
                            cols={30}
                            rows={10}
                            defaultValue={""}
                          />
                        </div>
                        {/* / Project Information*/}
                        {/* Submit btn*/}
                        <div className="col-12 justify-content-end d-flex">
                          <button className="btn btn-primary" type="submit">
                            Send Message
                          </button>
                        </div>
                        {/* / Submit Btn*/}
                      </div>
                    </form>
                  </div>
                  {/* / Contact Form*/}
                  {/* Contact Details*/}
                  <div className="col-12 col-lg-4 mt-5 mt-lg-0">
                    <div className="mb-5">
                      <p className="mb-4 small fw-bolder tracking-wider text-uppercase text-primary">
                        Find us online
                      </p>
                      <ul className="list-unstyled">
                        <li className="d-flex align-items-center mb-2">
                          <i className="ri-instagram-line me-3 ri-lg" />{" "}
                          <a className="text-muted" role="button">
                            Instagram
                          </a>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <i className="ri-facebook-line me-3 ri-lg" />{" "}
                          <a className="text-muted" role="button">
                            Facebook
                          </a>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <i className="ri-twitter-line me-3 ri-lg" />{" "}
                          <a className="text-muted" role="button">
                            Twitter
                          </a>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <i className="ri-youtube-line me-3 ri-lg" />{" "}
                          <a className="text-muted" role="button">
                            YouTube
                          </a>
                        </li>
                      </ul>
                    </div>
                    <p className="mb-4 small fw-bolder tracking-wider text-uppercase text-primary">
                      Our head office
                    </p>
                    <p>
                    150 Avenue Nile Sidi Othman, Casablanca 20670, Morocco
                    </p>
                  </div>
                  {/* / Contact Details*/}
                </div>
                {/* Contact Details & Form*/}
              </div>
              {/* /Page Content */}
            </main>
            {/* / Main Section*/}
            {/* Footer */}
            {/* Footer*/}
            <Footer />
            {/* / Footer*/}
          </div>

          <div>
            <Helmet>
              <script src="/assets/js/vendor.bundle.js"></script>
              <script src="/assets/js/theme.bundle.js"></script>
            </Helmet>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactPage;
