import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { LoginForm, LoginWithSocial } from "../../components";
import LoginFormWithSocial from "../../components/LoginFormWithSocial/LoginFormWithSocial";
const Login = () => {
  return (
    <>
      {/* Login 01 Form start  */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ width: 1, height: "100vh" }}>
        <LoginForm />
      </Box>
      {/* Login 01 Form  end

      {/* Login 02 Form  start */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ width: 1, height: "100vh" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <LoginWithSocial />
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
      {/* Login 02 Form  end */}
      {/* Login 03 Form  start */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ width: 1, height: "100vh" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <LoginFormWithSocial />
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
      {/* Login 03 Form  end */}
    </>
  );
};

export default Login;
