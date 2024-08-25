import React from "react";

const DealsSection = ({ dealsTitle, deals }) => {
  return (
    <>
      <h2>
        {dealsTitle}{" "}
        <a href=" " className="SeeMore">
          See more
        </a>
      </h2>
      <div className="scroll">
        {deals.map((deal, index) => (
          <div
            className="deals"
            key={index}
            style={{ backgroundImage: `url(${deal.image})` }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default DealsSection;
