import React from "react";

export const SliderItem = ({ position }) => {
  console.log(position);
  return (
    <div
      style={{
        position: "absolute",
        left: position,
        width: "50px",
        height: "50px",
        backgroundColor: "blue",
      }}>
      SliderItem
    </div>
  );
};
