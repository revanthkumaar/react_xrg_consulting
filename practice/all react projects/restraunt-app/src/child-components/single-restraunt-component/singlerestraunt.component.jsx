import React from "react";

const SingleRestraunt = ({listofplaces}) => {
  console.log("this is inside single restraunt");
  console.log(listofplaces);
  return (
    <div className="single-restraunt-component">
      <p>this is single restraunt component</p>
      {listofplaces.map((place) => (
        <p>{place.name}</p>
      ))}
    </div>
  );
};

export default SingleRestraunt;
