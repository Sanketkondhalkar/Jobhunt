import React, { useState } from "react";
import data from "../gallery";

const Gallery = () => {
  const [image, setImage] = useState(data);
  console.log(data);
  return (
    <div
      className="gallery d-flex align-items-center  property"
      style={{ height: "auto" }}
    >
      <div className="container">
        <h1 className="text-center">Gallery</h1>

        <div className="row">
          {image.map((item) => {
            return (
              <div className="col-4" key={item.id}>
                <img
                  src={item.image}
                  className="img-fluid mt-5 gallery-image"
                  alt="..."
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

// import React, { useState } from "react";
// import data from "../data.js";

// const Gallery = () => {
//   const [image, setimage] = useState(data);
//   console.log(image);
//   return (
//     <div className="container">
//       <div className="row">
//         {image.map((item) => {
//           return (
//             // <div className="col-3">
//             <img src={item.image} className="img-thumbnail" alt="..." />
//             // </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Gallery;
