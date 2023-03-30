import Box from "@mui/material/Box";
import React from "react";
import HeroBlock from "../../components/HeroBlock";
import HeroBlockWithImage from "../../components/HeroBlockWithImage/HeroBlockWithImage";
const HeroSection = () => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        flexDirect="column"
        justifyContent="center"
        sx={{ width: 1, height: "100vh" }}>
        <HeroBlock />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirect="column"
        justifyContent="center"
        sx={{ width: 1, height: "100vh" }}>
        <HeroBlockWithImage />
      </Box>
    </>
  );
};

export default HeroSection;
