import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const pages = [
    { title: "about", path: "/about" },
    { title: "Premium", path: "/premium" },
    { title: "Campaigns", path: "/campaigns" },
    { title: "Blog", path: "/blog" },
    { title: "Affiliate Program", path: "/affiliate-program" },
    { title: "FAQs", path: "/faq" },
    { title: "Contact", path: "/contact" },
  ];
  return (
    <>
      <Box sx={{ py: 5 }}>
        <Box sx={{ a: { textDecoration: "none" } }}>
          <Link to="/">
            <Box display="flex" alignItems="center" justifyContent="center">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                alt="logo"
              />
              <Typography sx={{ ml: { xs: 1, sm: 2 } }} variant="h6">
                Flowbite
              </Typography>
            </Box>
          </Link>
        </Box>
        <Typography
          sx={{ ml: { xs: 1, sm: 2 }, pt: 2, pb: 3, color: "common.greyLight" }}
          variant="body1">
          Open-source library of over 400+ web components and interactive
          elements built for better web.
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            flexWrap: "wrap",
            a: {
              transition: "all ease 0.2s",
              textDecoration: "none",
              color: "primary.main",
              "&:hover": { color: "primary.dark" },
            },
          }}>
          {pages.map((page) => (
            <Link to={page.path}>
              <Typography
                sx={{ ml: { xs: 1, sm: 2, textTransform: "capitalize" } }}
                variant="body1">
                {page.title}
              </Typography>
            </Link>
          ))}
        </Box>

        <Typography
          sx={{ ml: { xs: 1, sm: 2 }, pt: 2, pb: 3, color: "common.greyLight" }}
          variant="subtitle1">
          © 2021-2022 Flowbite™. All Rights Reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
