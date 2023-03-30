import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { SignUpForm, SignUpFormWithIllustration } from "../../components";

const SignUp = () => {
  return (
    <>
      {/* Sign Form 1 start */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ width: 1, height: "100vh" }}>
        <SignUpForm />
      </Box>
      {/* Sign Form 1 end */}

      {/* Sign Form 2 start */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ width: 1, height: "100vh" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <SignUpFormWithIllustration />
          </Grid>
          <Grid
            item
            xs={0}
            sm={12}
            md={6}
            sx={{ display: { xs: "none", md: "flex" } }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{ maxWidth: 1, width: 1 }}>
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg"
                alt="banner"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* Sign Form 2 end */}
    </>
  );
};

export default SignUp;
