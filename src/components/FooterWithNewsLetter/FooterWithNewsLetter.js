import EmailIcon from "@mui/icons-material/Email";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

const FooterWithNewsLetter = () => {
  const infoBlock = [
    {
      place: "New  York",
      address: "Huntersville,957 Hill Hills Suite 491, United States",
      phone: "+12(3) 456 7890 1234",
      email: "company@name.com",
    },
    {
      place: "ROME",
      address: "Piazza di Spagna,00187 Roma RM, Italy",
      phone: "+12(3) 456 7890 1234",
      email: "company@name.com",
    },
    {
      place: "LONDON",
      address: "Fulham Rd, London SW6 1HS, United Kingdom",
      phone: "+12(3) 456 7890 1234",
      email: "company@name.com",
    },
  ];
  return (
    <div>
      <Container>
        <Box sx={{ pt: 5 }}>
          <Grid container spacing={2}>
            {infoBlock.map(({ place, address, phone, email }) => (
              <Grid item xs={12} sm={6} lg={4}>
                <Typography
                  sx={{ textAlign: "left", fontWeight: "bold", mb: 1.5 }}
                  variant="body1"
                  color="primary.main">
                  {place}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "left",
                    pb: 1,
                    color: "common.greyLight",
                  }}
                  variant="subtitle1">
                  {address}
                </Typography>
                <List
                  sx={{
                    a: {
                      textDecoration: "none",
                      transition: "all ease 0.2s",
                      color: "primary.main",
                      "&:hover": { color: "primary.dark" },
                    },
                  }}>
                  <ListItem
                    sx={{ display: "flex", alignItems: "center", pl: 0 }}>
                    <Box display="inline-flex" sx={{ mr: 1 }}>
                      <SmartphoneIcon />
                    </Box>
                    <Link to="/">Office: {phone}</Link>
                  </ListItem>
                  <ListItem
                    sx={{ display: "flex", alignItems: "center", pl: 0 }}>
                    <Box display="inline-flex" sx={{ mr: 1 }}>
                      <EmailIcon />
                    </Box>
                    <Link to="/">Support: {email}</Link>
                  </ListItem>
                </List>
              </Grid>
            ))}
            <Grid item xs={12} sm={6} lg={12}>
              <Box
                sx={{
                  display: "flex",

                  justifyContent: "center",
                  pt: 3,
                  flexDirection: { xs: "column", lg: "row" },
                  alignItems: { xs: "flex-start", lg: "center" },
                }}>
                <Typography variant="body1" color="primary.main">
                  Sign up to our newsletter
                </Typography>
                <FormControl sx={{ m: 1 }} variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    placeholder="Your Email"
                    startAdornment={
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <Button variant="contained">Subscription</Button>
                      </InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                    }}
                  />
                </FormControl>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 3 }}>
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
            sx={{
              ml: { xs: 1, sm: 2 },
              pt: 2,
              color: "common.greyLight",
            }}
            variant="subtitle1">
            © 2021-2022 Flowbite™. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default FooterWithNewsLetter;
