import React from "react";

const BannerSlider = (props) => {
  return (
    <img
      className={`${"bannerstyle"} BannerSlider`}
      src={props.image}
      alt={props.alt}
    />
  );
};

export default BannerSlider;
