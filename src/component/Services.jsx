import React, { useState } from "react";
import services from "../Services";
import Childservice from "./Childservice";

const Services = () => {
  const [service, setservice] = useState(services);
  return (
    <div className="services  " style={{ height: "auto" }}>
      <div className="container">
        <h1 className="text-center">Services</h1>

        <div className="row" style={{ marginBottom: "50px" }}>
          {service.map((item) => {
            return <Childservice value={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
