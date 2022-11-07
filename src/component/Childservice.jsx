import React, { useState } from "react";
import "../component/Services.css";

const Childservice = (props) => {
  const { image, name, price, info } = props.value;
  const [hidden, sethidden] = useState(false);
  const demo = () => {
    sethidden(!hidden);
  };
  return (
    <div className="col-4">
      <div className="card" style={{ marginTop: "30PX" }}>
        <img
          src={image}
          className="card-img-top w-100"
          alt="..."
          height="190px"
        />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{name}</h5>
            <h5>${price}</h5>
          </div>

          <p className="card-text " style={{ textAlign: "justify" }}>
            {info.slice(0, 90)}
            {hidden ? info.slice(100) : ""}
            <button
              onClick={demo}
              style={{
                border: "none",
                background: "none",
                color: "blue",
                outline: "none",
              }}
            >
              {hidden ? "hidden" : "show more"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Childservice;
