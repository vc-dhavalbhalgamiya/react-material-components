import { Divider, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import React from "react";
import { Link } from "react-router-dom";
const pages = [
  { title: "about", path: "/about" },
  { title: "Premium", path: "/premium" },
  { title: "Campaigns", path: "/campaigns" },
];
const followUs = [
  { title: "Git hub", path: "/github" },
  { title: "Discord", path: "/discord" },
];
const legal = [
  { title: "Privacy Policy", path: "/privacy" },
  { title: "Terms & Conditions", path: "/terms-and-condition" },
];
const FooterWithSocial = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={6} md={6}>
          <Box
            sx={{
              a: { textDecoration: "none", display: "flex" },
              textAlign: "left",
            }}>
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
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography
            sx={{ textAlign: "left", fontWeight: "bold", mb: 1 }}
            variant="h6"
            color="primary.main">
            RESOURCES
          </Typography>
          <Box sx={{ a: { textDecoration: "none", textAlign: "left" } }}>
            {pages.map((page) => (
              <Box
                sx={{
                  mb: 1,
                  a: {
                    transition: "all ease 0.2s",
                    textDecoration: "none",
                    color: "primary.main",
                    "&:hover": { color: "primary.dark" },
                  },
                }}>
                <Link to={page.path}>
                  <Typography
                    sx={{ textTransform: "capitalize" }}
                    variant="body1">
                    {page.title}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography
            sx={{ textAlign: "left", fontWeight: "bold", mb: 1 }}
            variant="h6"
            color="primary.main">
            FOLLOW US
          </Typography>
          <Box sx={{ a: { textDecoration: "none", textAlign: "left" } }}>
            {followUs.map((page) => (
              <Box
                sx={{
                  mb: 1,
                  a: {
                    transition: "all ease 0.2s",
                    textDecoration: "none",
                    color: "primary.main",
                    "&:hover": { color: "primary.dark" },
                  },
                }}>
                <Link to={page.path}>
                  <Typography
                    sx={{ textTransform: "capitalize" }}
                    variant="body1">
                    {page.title}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography
            sx={{ textAlign: "left", fontWeight: "bold", mb: 1 }}
            variant="h6"
            color="primary.main">
            LEGAL
          </Typography>
          <Box sx={{ a: { textDecoration: "none", textAlign: "left" } }}>
            {legal.map((page) => (
              <Box
                sx={{
                  mb: 1,
                  a: {
                    transition: "all ease 0.2s",
                    textDecoration: "none",
                    color: "primary.main",
                    "&:hover": { color: "primary.dark" },
                  },
                }}>
                <Link to={page.path}>
                  <Typography
                    sx={{ textTransform: "capitalize" }}
                    variant="body1">
                    {page.title}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ my: 3 }} />
      <Grid container>
        <Grid item xs={12} sm={6} lg={6}>
          <Box sx={{ a: { textDecoration: "none" } }}>
            <Typography
              sx={{
                textAlign: { sm: "left", xs: "center" },
                color: "common.greyLight",
              }}
              variant="subtitle1">
              © 2021-2022 Flowbite™. All Rights Reserved.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <Box
            display="flex"
            sx={{
              justifyContent: { sm: "flex-end", xs: "center" },
              a: {
                width: 30,
                mx: 1,
                transition: "all ease 0.2s",
                textDecoration: "none",
                color: "primary.main",
                "&:hover": { color: "primary.dark" },
              },
            }}
            alignItems="center">
            <Link to="/">
              <FacebookIcon />
            </Link>
            <Link to="/">
              <TwitterIcon />
            </Link>
            <Link to="/">
              <GoogleIcon />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FooterWithSocial;
