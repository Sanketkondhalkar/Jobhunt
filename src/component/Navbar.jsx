import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navcontainer">
      <div className="container ">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid logo ">
            <Link to="/">
              {" "}
              <img
                src="https://www.closer.pt/media/1688/icon_job_offer.png"
                alt=""
                width="30"
                height="24"
              ></img>
            </Link>
            <Link className="navbar-brand fw-bold fs-3" to="#">
              Job<span style={{ color: "red" }}>Hunt</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse  flex-row-reverse"
              id="navbarNav"
            >
              <ul className="navbar-nav fs-5">
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    aria-current="page"
                    to="/"
                    style={{ fontSize: "larger" }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/gallery"
                    style={{ fontSize: "larger" }}
                  >
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/review"
                    style={{ fontSize: "larger" }}
                  >
                    Review
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    to="/services"
                    tabindex="-1"
                    style={{ fontSize: "larger" }}
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
