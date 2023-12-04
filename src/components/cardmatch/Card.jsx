import React from "react";

const Card = ({ number }) => {
  return (
    <div className="h-24 w-5 bg-white">
      <span>{number}</span>
    </div>
  );
};

export default Card;
