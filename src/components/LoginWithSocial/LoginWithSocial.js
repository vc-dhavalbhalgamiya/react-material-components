import { Visibility, VisibilityOff } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginWithSocial = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
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
      <Typography variant="h5" sx={{ textAlign: { sm: "left", xs: "center" } }}>
        Sign in to your account
      </Typography>
      <Typography
        variant="subtitle2"
        component="h6"
        fontWeight="400"
        sx={{
          color: "common.greyLight",
          mb: 2,
          textAlign: { sm: "left", xs: "center" },
        }}>
        or Start Your 14 Days Trial
      </Typography>
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{
          color: "common.black",
          pb: 1,
          textAlign: { sm: "left", xs: "center" },
        }}>
        Sign in with
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: 1 }}>
        <Button variant="outlined">facebook </Button>
        <Button variant="outlined">Google</Button>
        <Button variant="outlined">Twitter</Button>
      </Box>
      <Divider sx={{ my: 2 }} textAlign="center">
        <Typography
          variant="body1"
          sx={{ fontWeight: 400 }}
          color="common.greyLight">
          OR
        </Typography>
      </Divider>
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
            label="Email"
            size="small"
          />
        </FormControl>
        <FormControl sx={{ width: 1 }} variant="outlined">
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
        <Box display="flex" sx={{ pt: 1 }} justifyContent="flex-end">
          <Link to="/password">
            <Typography variant="small" color="">
              Forgot your password?
            </Typography>
          </Link>
        </Box>
        <Box display="flex" sx={{ pb: 3 }} justifyContent="flex-start">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
          />
        </Box>
        <Button variant="contained" sx={{ width: 1 }}>
          {" "}
          Sign in{" "}
        </Button>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ pt: 3 }}>
          <Typography> Don't have a account?</Typography>
          <Link to="/signup">Signup</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginWithSocial;
