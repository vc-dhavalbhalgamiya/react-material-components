import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ a: { textDecoration: "none" }, p: { xs: 1, sm: 0 } }}>
      <Box>
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
        <Box
          sx={{
            maxWidth: { xs: 1, sm: 350 },
            mt: { xs: 1, sm: 3 },
            borderRadius: 3,
            boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
            p: { xs: 1.5, sm: 3 },
          }}>
          <Typography variant="h5" fontWeight="bold">
            Sign in to your account
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
      </Box>
    </Box>
  );
};

export default LoginForm;
