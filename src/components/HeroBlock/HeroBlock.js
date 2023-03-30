import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import VideocamIcon from "@mui/icons-material/Videocam";
import { Button, Chip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { Link } from "react-router-dom";
import { ProductHunt, Reddit, YouTube } from "../../icons";
const HeroBlock = () => {
  return (
    <>
      <Box>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center">
          <Box
            display="inline-flex"
            sx={{
              borderRadius: 6,
              py: 1.5,
              px: 2.5,
              mb: 6,
              width: "auto",
              alignItems: "center",
              border: "1px solid ",
              borderColor: "common.borderColor",
            }}>
            <Chip
              sx={{ backgroundColor: "common.borderColor", mr: 1 }}
              label="Chip Filled"
            />
            <Typography variant="body1" component="p">
              Lorem Ipsum is simply dummy text
            </Typography>
          </Box>
          <Typography
            component="h1"
            sx={{ typography: { md: "h4", xs: "h4", xl: "h1" } }}
            fontWeight="bold">
            We invest in the world’s potential
          </Typography>
          <Typography variant="body1" component="p" color="common.greyLight">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </Typography>
        </Box>
        <Box sx={{ py: 5 }}>
          <Button variant="contained" sx={{ mx: 2 }}>
            Learn More <ArrowRightAltIcon sx={{ ml: 1 }} />
          </Button>
          <Button variant="outlined" sx={{ mx: 2 }}>
            <VideocamIcon sx={{ mr: 1 }} /> Watch Video
          </Button>
        </Box>
        <Typography
          sx={{ pt: 3 }}
          variant="body1"
          component="p"
          color="common.greyLight">
          Featured in
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            pt: 3,
            flexDirection: { sm: "row", xs: "column" },
            svg: { color: "#6B7280", "&:hover": { color: "primary.main  " } },
          }}>
          <Link to="/">
            <Box sx={{ width: { lg: 200, xs: 100 } }}>
              <YouTube />
            </Box>
          </Link>
          <Link to="/">
            <Box
              sx={{
                width: { lg: 250, xs: 150 },
                mx: { sm: 4 },
                py: { md: 0, xs: 2 },
              }}>
              <ProductHunt />
            </Box>
          </Link>
          <Link to="/">
            <Box sx={{ width: { lg: 160, xs: 100 } }}>
              <Reddit />
            </Box>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default HeroBlock;
