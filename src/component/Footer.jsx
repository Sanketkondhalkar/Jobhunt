import React from "react";
import { Link } from "react-router-dom";
import "../component/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="footer-content">
            <div className="row footer-row">
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="logo-widget footer-widget">
                  <figure className="logo-box">
                    <Link to="#">
                      <img
                        src="https://www.closer.pt/media/1688/icon_job_offer.png"
                        alt=""
                      />
                    </Link>
                    <div style={{ display: "inline" }}>
                      <Link to="">
                        <h1 style={{ color: "white" }}>
                          Job<span style={{ color: "red" }}>Hunt</span>
                        </h1>
                      </Link>
                    </div>
                  </figure>
                  <div className="text">
                    <p>
                      Lorem ipsum dolor amet consectetur adi pisicing elit sed
                      eiusm tempor incididunt ut labore dolore magna aliqua enim
                      ad minim veniam quis.nostrud exercita.laboris nisi ut
                      aliquip ea commodo conse quatuis aute irure.
                    </p>
                  </div>
                  <ul className="footer-social">
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-vimeo-v"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-google-plus-g"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 offset-lg-2 footer-column">
                <div className="service-widget footer-widget">
                  <div className="footer-title">Services</div>
                  <ul className="list">
                    <li>
                      <Link to="#">React Developer</Link>
                    </li>
                    <li>
                      <Link to="#">Angular Devloper</Link>
                    </li>
                    <li>
                      <Link to="#">Asp .net mvc Developer</Link>
                    </li>
                    <li>
                      <Link to="#">React Native Develoepr</Link>
                    </li>
                    <li>
                      <Link to="#">Bootstrap developer</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-widget">
                <div className="contact-widget footer-widget">
                  <div className="footer-title">Contacts</div>
                  <div className="text">
                    <p>
                      Roopa Solitary ,Near MBP BUS STOP ,Ghansoli thane-4000443
                    </p>
                    <p>+2(784) 1223323</p>
                    <p>info@jobhunt.com</p>
                    <p>+9876543210</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- main-footer end --> */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <div className="copyright text-center">
                <Link to="#">jobHunt</Link> &copy; 2022 All Right Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
