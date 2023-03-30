import { Visibility, VisibilityOff } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpFormWithIllustration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <>
      <Box sx={{ maxWidth: { xs: 320, sm: 350 }, mx: "auto" }}>
        <Box sx={{ a: { textDecoration: "none" }, mb: 3 }}>
          <Link to="/">
            <Box
              display="flex"
              alignItems="center"
              sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}>
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
          variant="h5"
          sx={{ textAlign: { xs: "center", sm: "left" } }}>
          Create a New account
        </Typography>
        <Typography
          variant="subtitle2"
          component="h6"
          fontWeight="400"
          sx={{
            color: "common.greyLight",
            mb: 2,
            textAlign: { xs: "center", sm: "left" },
          }}>
          with 14 Days Trial
        </Typography>
        <Typography
          variant="body1"
          fontWeight="bold"
          sx={{
            color: "common.black",
            pb: 1,
            textAlign: { xs: "center", sm: "left" },
          }}>
          Sign in with
        </Typography>

        <Box
          component="form"
          sx={{ width: 1, mt: 3 }}
          noValidate
          autoComplete="off">
          <FormControl sx={{ width: 1, mb: 3 }} variant="outlined">
            <TextField
              sx={{ width: 1 }}
              required
              id="outlined-required"
              label="Name"
              size="small"
            />
          </FormControl>
          <FormControl sx={{ width: 1, mb: 3 }} variant="outlined">
            <TextField
              sx={{ width: 1 }}
              required
              id="outlined-required"
              label="Email"
              size="small"
            />
          </FormControl>
          <FormControl sx={{ width: 1, mb: 3 }} variant="outlined">
            <TextField
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label="Password"
            />
          </FormControl>
          <FormControl sx={{ width: 1, mb: 3 }} variant="outlined">
            <TextField
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label="Confirm Password"
            />
          </FormControl>

          <Button variant="contained" sx={{ width: 1 }}>
            Create account
          </Button>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ pt: 3 }}>
            <Typography>Already have a account?</Typography>
            <Link to="/login">Login</Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SignUpFormWithIllustration;
