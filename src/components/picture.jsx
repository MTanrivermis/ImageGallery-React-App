import React from "react";

const Picture = ({ photographer, src }) => {
  return (
    <div className="col col-sm-6 col-md-4 col-lg-3 m-auto  hover">
      <div className="view overlay">
        <img  className="img-fluid"style={{width:"300px" , height:"300px"}} src={src} alt="" />
      </div>
      <h2 className="">{photographer}</h2>
    </div>
  );
};

export default Picture;
