import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useSnapshot } from "valtio";
import state from "../store";

const PricingPage = () => {
  const snap = useSnapshot(state);
  return (
    <>
      {state.page === "princing" && (
        <div>
          <Navbar />

          <div>
            {/* Page Title*/}
            <header className="bg-primary py-10 text-white overflow-hidden position-relative z-index-10">
              <div className="container">
                <div className="d-block f-w-72  position-absolute top-n25 start-n13 opacity-10 d-none d-lg-block">
                  <span className="d-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 17.53 17.53"
                    >
                      <path
                        className="text-success"
                        d="M12.11,14.07a6.27,6.27,0,1,1,2-8.64A6.28,6.28,0,0,1,12.11,14.07Z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={5}
                      />
                    </svg>{" "}
                  </span>
                </div>
                <div className="d-block f-w-72  position-absolute bottom-10 end-n3 opacity-10  d-none d-lg-block">
                  <span className="d-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 57.47 48.01"
                    >
                      <rect
                        className="text-success"
                        x="2.5"
                        y="2.5"
                        width="31.65"
                        height="31.65"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={5}
                      />
                      <rect
                        className="text-success"
                        x="25.32"
                        y="15.86"
                        width="31.65"
                        height="31.65"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                      />
                    </svg>{" "}
                  </span>
                </div>
                <div className="text-center col-12 col-sm-9 col-lg-7 col-xl-6 mx-auto pb-8 position-relative z-index-20">
                  <h1 className="display-3 fw-bold mb-3">Simple pricing</h1>
                  <p className="opacity-75 lead">
                    Try TeeChroma for free for 30 days with full features, no
                    credit card required, no commitment required. Then upgrade
                    your account after that when you're ready.
                  </p>
                  <a
                    className="btn btn-white mt-4 w-100 w-md-auto"
                    role="button"
                    onClick={() => (state.page = "customizer")}
                  >
                    Start your trial
                  </a>
                </div>
              </div>
            </header>
            {/* / Page Title*/}
            {/* Page Content Goes Here */}
            <div className="container position-relative z-index-20">
              {/* Pricing Table*/}
              <div className="row g-0 border rounded mt-n10 bg-white shadow-lg">
                {/* Pricing Table Column One*/}
                <div className="col-4 d-none d-lg-block border-end">
                  {/* Column Header*/}
                  <div className="f-h-68 w-100 px-lg-7 py-lg-6 p-4 p-md-5 border-bottom">
                    <h3 className="fs-2 fw-bold">
                      Try one of our flexible plans
                    </h3>
                    <ul className="list-unstyled mt-4 fs-7">
                      <li className="me-4 mb-2 d-flex align-items-center">
                        <i className="ri-checkbox-circle-fill text-success ri-lg me-1" />{" "}
                        No credit card required
                      </li>
                      <li className="me-4 mb-2 d-flex align-items-center">
                        <i className="ri-checkbox-circle-fill text-success ri-lg me-1" />{" "}
                        Cancel anytime
                      </li>
                      <li className="me-4 mb-2 d-flex align-items-center">
                        <i className="ri-checkbox-circle-fill text-success ri-lg me-1" />{" "}
                        30 day free trial
                      </li>
                    </ul>
                  </div>
                  {/* / Column Header*/}
                  {/* Column Rows*/}
                  <div className="f-h-20 px-4 px-md-7 d-flex justify-content-start align-items-center border-bottom">
                    <span
                      className="tooltip-trigger"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="The amount of user accounts available for each package"
                    >
                      Users
                    </span>
                  </div>
                  <div className="f-h-20 px-4 px-md-7 d-flex justify-content-start align-items-center border-bottom">
                    Prompts
                  </div>
                  <div className="f-h-20 px-4 px-md-7 d-flex justify-content-start align-items-center border-bottom">
                    Designs
                  </div>

                  <div className="f-h-20 px-4 px-md-7 d-flex justify-content-start align-items-center border-bottom">
                    Support
                  </div>

                  <div className="f-h-24 px-4 px-md-7 d-flex justify-content-center align-items-center"></div>
                  {/* Column Rows*/}
                </div>
                {/* / Pricing Table Column One*/}
                {/* Pricing Table Column Two*/}
                <div className="col-12 col-md-6 col-lg-4">
                  {/* Column Header*/}
                  <div className="f-h-68 w-100 px-lg-7 py-lg-6 p-4 p-md-5 d-flex flex-column justify-content-between border-bottom">
                    <div>
                      <h3 className="fs-1 fw-black">Essential</h3>
                      <p className="text-muted">
                        Keep things simple and try our services with our basic
                        plan.
                      </p>
                      <p className="display-4 lh-1 fw-black mb-1">
                        <sup className="fs-9 align-super me-1">$</sup>19
                        <span className="fs-5 fw-medium">/mo</span>
                      </p>
                      <span className="d-block text-muted small">
                        Billed annually, per team member
                      </span>
                    </div>
                    <a href="#" className="btn btn-primary w-100 mt-4">
                      Get started
                    </a>
                  </div>
                  {/* / Column Header*/}
                  {/* Column Rows*/}
                  <div className="f-h-20 px-4 px-md-7 d-flex justify-content-center align-items-center border-bottom">
                    <span
                      className="tooltip-trigger"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Single user account available on the basic package"
                    >
                      1 team member
                    </span>
                  </div>
                  <div className="f-h-20 px-4 px-md-7 d-flex justify-content-center align-items-center border-bottom">
                    <span>
                      20 <span className="d-lg-none d-inline">templates</span>
                    </span>
                  </div>
                  <div className="f-h-20 px-4 px-md-7 d-flex justify-content-center align-items-center border-bottom">
                    <span>
                      30 <span className="d-lg-none d-inline">emails</span> per
                      week
                    </span>
                  </div>

                  <div className="f-h-20 px-4 px-md-7 d-flex justify-content-center align-items-center border-bottom">
                    <span>
                      Email <span className="d-lg-none d-inline">support</span>
                    </span>
                  </div>

                  <div className="f-h-24 px-4 px-md-7 d-flex justify-content-center align-items-center">
                    <a role="button" className="btn btn-primary w-100">
                      Get started
                    </a>
                  </div>
                  {/* Column Rows*/}
                </div>
                {/* / Pricing Table Column Two*/}
                {/* Pricing Table Column Three*/}
                <div className="col-12 col-md-6 col-lg-4 border-start mt-8 mt-md-0">
                  {/* Column Header*/}
                  <div className="f-h-68 w-100 px-lg-7 py-lg-6 p-4 p-md-5 d-flex flex-column justify-content-between border-bottom position-relative">
                    <div>
                      <h3 className="fs-1 fw-black">Agency</h3>
                      <p className="text-muted">
                        Perfect for small to mid-sized companies and agencies.
                      </p>
                      <p className="display-4 lh-1 fw-black mb-1">
                        <sup className="fs-9 align-super me-1">$</sup>45
                        <span className="fs-5 fw-medium">/mo</span>
                      </p>
                      <span className="d-block text-muted small">
                        Billed annually, per team member
                      </span>
                    </div>
                    <a href="#" className="btn btn-primary w-100 mt-4">
                      Get started
                    </a>
                    <span className="badge bg-orange position-absolute top-0 start-50 translate-middle d-none d-md-flex">
                      Most Popular
                    </span>
                  </div>
                  {/* / Column Header*/}
                  {/* Column Rows*/}
                  <div className="f-h-20 px-4 px-md-7 d-flex justify-content-center align-items-center border-bottom">
                    <span>10 team members</span>
                  </div>
                  <div className="f-h-20 px-4 px-md-7 d-flex justify-content-center align-items-center border-bottom">
                    <span>
                      500 <span className="d-lg-none d-inline">templates</span>
                    </span>
                  </div>
                  <div className="f-h-20 px-4 px-md-7 d-flex justify-content-center align-items-center border-bottom">
                    <span
                      className="tooltip-trigger"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="The amount of emails available for our agency package"
                    >
                      1000 <span className="d-lg-none d-inline">templates</span>{" "}
                      per week
                    </span>
                  </div>

                  <div className="f-h-20 px-4 px-md-7 d-flex justify-content-center align-items-center border-bottom">
                    <span>
                      Email, Telephone{" "}
                      <span className="d-lg-none d-inline">support</span>
                    </span>
                  </div>

                  <div className="f-h-24 px-4 px-md-7 d-flex justify-content-center align-items-center">
                    <a role="button" className="btn btn-primary w-100">
                      Get started
                    </a>
                  </div>
                  {/* Column Rows*/}
                </div>
                {/* / Pricing Table Column Three*/}
              </div>
              {/* / Pricing Table*/}
              {/* Enterprise Banner*/}
              <div className="my-10 bg-primary p-4 p-md-6 rounded text-white d-flex align-items-center position-relative">
                <div className="row">
                  <div className="col-12 col-md-5 position-relative z-index-20">
                    <h4 className="fs-3 fw-bold mb-3">Need Enterprise?</h4>
                    <p className="opacity-75">
                      Our Enterprise package is custom-built per client - ideal
                      for large businesses.
                    </p>
                    <a role="button" className="btn btn-white">
                      Discuss your requirements
                    </a>
                  </div>
                  <div className="col-12 col-md-6 offset-md-1 mt-5 mt-lg-0">
                    <ul className="list-unstyled">
                      <li className="me-4 mb-2 d-flex align-items-center">
                        <i className="ri-checkbox-circle-fill opacity-75 ri-lg me-1" />{" "}
                        Custom package per client
                      </li>
                      <li className="me-4 mb-2 d-flex align-items-center">
                        <i className="ri-checkbox-circle-fill opacity-75 ri-lg me-1" />{" "}
                        Unlimited resources
                      </li>
                      <li className="me-4 mb-2 d-flex align-items-center">
                        <i className="ri-checkbox-circle-fill opacity-75 ri-lg me-1" />{" "}
                        Add additional features
                      </li>
                    </ul>
                  </div>
                </div>
                {/* SVG Shapes*/}
                <div className="position-absolute top-0 end-0 start-0 bottom-0 z-index-0 d-none d-lg-block overflow-hidden">
                  <div className="d-block f-w-80  position-absolute top-10 end-n25 opacity-25">
                    <span className="d-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 55.95 50.74"
                      >
                        <path
                          className="text-white"
                          d="M55.45,34.33A15.92,15.92,0,1,1,39.54,18.41,15.91,15.91,0,0,1,55.45,34.33Z"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit={10}
                        />
                        <path
                          className="text-white"
                          d="M34.33,18.41A15.92,15.92,0,1,1,18.41,2.5,15.92,15.92,0,0,1,34.33,18.41Z"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={5}
                        />
                      </svg>{" "}
                    </span>
                  </div>
                </div>
                {/* / SVG Shapes*/}
              </div>
              {/* / Enterprise Banner*/}
              {/* Company Logos*/}
              <div className="my-10 py-4">
                <div className="container">
                  <p className="mb-6 text-center small fw-bolder tracking-wider text-muted text-uppercase">
                    Already trusted by thousands of brands
                  </p>
                  <div className="row gx-8 gy-5 justify-content-center align-items-center">
                    {/* Logo*/}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                      <picture>
                        <img
                          className="img-fluid"
                          src="./assets/images/logos/logo-17.svg"
                          alt
                        />
                      </picture>
                    </div>
                    {/* / Logo*/}
                    {/* Logo*/}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                      <picture>
                        <img
                          className="img-fluid"
                          src="./assets/images/logos/logo-18.svg"
                          alt
                        />
                      </picture>
                    </div>
                    {/* / Logo*/}
                    {/* Logo*/}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                      <picture>
                        <img
                          className="img-fluid"
                          src="./assets/images/logos/logo-19.svg"
                          alt
                        />
                      </picture>
                    </div>
                    {/* / Logo*/}
                    {/* Logo*/}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                      <picture>
                        <img
                          className="img-fluid"
                          src="./assets/images/logos/logo-20.svg"
                          alt
                        />
                      </picture>
                    </div>
                    {/* / Logo*/}
                    {/* Logo*/}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                      <picture>
                        <img
                          className="img-fluid"
                          src="./assets/images/logos/logo-21.svg"
                          alt
                        />
                      </picture>
                    </div>
                    {/* / Logo*/}
                    {/* Logo*/}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                      <picture>
                        <img
                          className="img-fluid"
                          src="./assets/images/logos/logo-22.svg"
                          alt
                        />
                      </picture>
                    </div>
                    {/* / Logo*/}
                  </div>
                </div>
              </div>
              {/* / Company Logos*/}
            </div>
            {/* FAQs*/}

            {/* / FAQs*/}
            {/* /Page Content */}
            {/* / Main Section*/}
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default PricingPage;
