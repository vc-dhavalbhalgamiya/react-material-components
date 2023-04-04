import { Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

const ContentSectionWithImages = () => {
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
              We didn't reinvent the wheel
            </Typography>
            <Typography
              sx={{ py: 2 }}
              component="p"
              variant="body1"
              color="common.greyLight">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
              <br />
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </Typography>
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
            sx={{
              position: "relative",
              width: 1,
              maxWidth: { xs: 250, md: 1 },
              margin: "0 auto",
              height: { xs: 350, md: 550 },
            }}>
            <Box
              sx={{
                position: "absolute",
                left: 60,
                width: "50%",
                borderRadius: "20px",
                overflow: "hidden",
              }}>
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                alt="img"
                width="100%"
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                borderRadius: "20px",
                left: "45%",
                width: "50%",
                overflow: "hidden",
                top: 140,
              }}>
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                alt="img"
                width="100%"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContentSectionWithImages;
