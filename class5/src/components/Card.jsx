import React from "react";

const Card = (props) => {

  return (
    <div className="h-60 flex flex-col items-center justify-evenly text-xl bg-white w-60 p-5 rounded-xl">
      <h1>{props.user.name}</h1>
      <p className="text-xs text-center">{props.user.description}</p>
      <h2>{props.user.city}, {props.user.age}</h2>
    </div>
  );
};

export default Card;
