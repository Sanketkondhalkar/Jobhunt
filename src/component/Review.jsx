import React from "react";
import "../component/Revive.css";
const Review = () => {
  return (
    <div
      className="review property d-flex align-items-center "
      style={{ height: "auto" }}
    >
      <div className="container">
        <h1 className="text-center">Testinomial</h1>
        <h4 className="text-center">
          Trusted and loved by the word best developers
        </h4>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          similique accusamus ratione facilis, quae, eaque officia voluptates
        </p>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ marginTop: "30px" }}
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner text-center">
            <div className="carousel-item active ">
              <div className="card carddata">
                <div className="card-body text-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZyEvdZ2BauOYJ3MVlQiD6DOpdZWMic5MjITLk3v6wOyjtwQlGkeSwXXnbEr_LIR6Ugg&usqp=CAU"
                    className="img-fluid data"
                    alt="..."
                  />
                  <h1>Hitesh Yadav</h1>
                  <p>React developers</p>
                  <div>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Facilis adipisci corporis error inventore quaerat nam aut
                      eum voluptatibus voluptatum temporibus? Itaque iste
                      dolorum corporis provident at repellendus veritatis illum
                      assumenda.
                    </p>
                    <p>⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card carddata">
                <div className="card-body text-center">
                  <img
                    src="http://evedonusfilm.com/wp-content/uploads/2022/05/photo-1457449940276-e8deed18bfff.jpg"
                    className="img-fluid data"
                    alt="..."
                  />
                  <h3>Sanket kondhalkar</h3>
                  <p>Angular developers</p>

                  <div>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Facilis adipisci corporis error inventore quaerat nam aut
                      eum voluptatibus voluptatum temporibus? Itaque iste
                      dolorum corporis provident at repellendus veritatis illum
                      assumenda.
                    </p>
                    <p>⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card carddata">
                <div className="card-body text-center">
                  <img
                    src="http://evedonusfilm.com/wp-content/uploads/2022/05/photo-1457449940276-e8deed18bfff.jpg"
                    className="img-fluid data"
                    alt="..."
                  />
                  <h2>Aadesh shinde</h2>
                  <p>React developers</p>

                  <div>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Facilis adipisci corporis error inventore quaerat nam aut
                      eum voluptatibus voluptatum temporibus? Itaque iste
                      dolorum corporis provident at repellendus veritatis illum
                      assumenda.
                    </p>
                    <p>⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          > */}
          {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
          {/* <span className="visually-hidden">Previous</span> */}
          {/* </button> */}
          {/* <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          > */}
          {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
          {/* <span className="visually-hidden">Next</span> */}
          {/* </button> */}
        </div>
      </div>
    </div>
  );
};

export default Review;
