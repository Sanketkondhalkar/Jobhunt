import React from "react";
import Gallery from "./Gallery";
import Review from "./Review";
import Services from "./Services";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div
        className="parent d-flex align-items-center property1"
        style={{ height: "auto" }}
      >
        <div className="container">
          <div className="row  homepagerow">
            <div className="col ">
              <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://cdni.iconscout.com/illustration/premium/thumb/isometric-digital-marketing-strategy-2485632-2082086.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://www.pngitem.com/pimgs/m/491-4913510_isometric-seo-digital-marketing-vector-png-transparent-png.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/008/258/224/small_2x/robot-in-charge-of-optimizing-seo-free-vector.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col  text-center">
              <div style={{ marginTop: "100px" }}>
                <h1 className="mt-5">
                  Job hunt is over now ! Discover more than 5000+ jobs
                </h1>
                <p>
                  As applicants come in, it’s easy to see and organize them all
                  in one place. Filter,
                </p>
                <p className="mt-5" style={{ textAlign: "justify" }}>
                  As applicants come in, it’s easy to see and organize them all
                  in one place. Filter, sort, and rate your applicants so you
                  can focus your energy and outreach on the best ones. And, when
                  you rate an applicant a “Good fit,” LinkedIn learns who you’re
                  looking for and will recommend your job to similar people.
                </p>
                <Link to="/services">
                  <button type="button" className="btn btn-outline-danger">
                    Enquire Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Gallery />

      <Services />
      <Review />
    </>
  );
};

export default Homepage;
