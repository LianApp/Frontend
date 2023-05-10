import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import Slider from "react-slick";

const UISlider = ({children}: { children: React.ReactNode }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
const sliderSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    autoplaySpeed: 10000,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    nextArrow: <div>next</div>,
    prevArrow: <div>prev</div>,   
    beforeChange(oldIndex: number, newIndex: number) {
      setActiveSlideIndex(newIndex);
    },
  };
return (
    <Box width="100%" height="100%">
        <Slider {...sliderSettings}>{children}</Slider>
    </Box>
    );
};
export default Slider;