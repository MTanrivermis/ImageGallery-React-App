import React from "react";
import Picture from "../components/picture";
import data from "../helper/data";
const Homepage = () => {
  console.log(data);

  return (
    <>
    <div className="container-fluid">
      <div className="row">
      {data.map((items) => {
        const {
          photographer,
          src: { large },
        } = items;
        return (
          
              <Picture photographer={photographer} src={large} />
           
        );
      })}
      </div>
    </div>
     
    </>
  );
};

export default Homepage;
