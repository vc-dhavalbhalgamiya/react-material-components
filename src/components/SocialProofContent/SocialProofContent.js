import { Box, Container, Typography } from "@mui/material";
import React from "react";

const SocialProofContent = () => {
  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column">
        <Box>
          <Typography
            variant="h3"
            component="h1"
            color="primary.main"
            fontWeight="bold">
            Home to the software teams
          </Typography>
          <Typography
            sx={{ pt: 2, pb: 3 }}
            variant="body1"
            component="p"
            color="primary.main">
            Meet your developers where they already are. GitHub is home to over
            40 million developers and the world’s largest open source community.
          </Typography>
        </Box>
        <Box
          sx={{ mt: 3, width: 1, display: { sm: "flex" } }}
          alignItems="center"
          justifyContent="space-between">
          <Box sx={{ my: { xs: 2, sm: 0 } }}>
            <Typography
              variant="h3"
              component="h1"
              color="primary.main"
              fontWeight="bold">
              73M+
            </Typography>
            <Typography variant="body1" component="p" color="primary.main">
              developers
            </Typography>
          </Box>
          <Box sx={{ mx: 5, my: { xs: 2, sm: 0 } }}>
            <Typography
              variant="h3"
              component="h1"
              color="primary.main"
              fontWeight="bold">
              1B+
            </Typography>
            <Typography variant="body1" component="p" color="primary.main">
              contributors
            </Typography>
          </Box>
          <Box sx={{ my: { xs: 2, sm: 0 } }}>
            <Typography
              variant="h3"
              component="h1"
              color="primary.main"
              fontWeight="bold">
              4M+
            </Typography>
            <Typography variant="body1" component="p" color="primary.main">
              organizations
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SocialProofContent;
