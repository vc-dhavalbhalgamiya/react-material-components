import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";

const ContentSection = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            sx={{ textAlign: "left", height: 1 }}>
            <Typography
              component="h1"
              variant="h3"
              sx={{
                typography: { md: "h4", xs: "h5", xl: "h3", fontWeight: "900" },
              }}>
              Building digital products & brands.
            </Typography>
            <Typography
              sx={{ py: 2 }}
              component="p"
              variant="body1"
              color="common.greyLight">
              Here at flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </Typography>
            <Box sx={{ pt: 5 }}>
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
                      <Button variant="contained"> Try Free</Button>
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </FormControl>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          alignItems="center"
          justifyContent="center">
          <Box
            sx={{ width: 1, maxWidth: { xs: 250, lg: 1 }, margin: "0 auto" }}>
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mobile-app.svg"
              alt="img"
              width="100%"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContentSection;
