import React from "react";
import {
  ContentSectionWithImages,
  Footer,
  FooterWithSitemapAndSocial,
  FooterWithSocial,
  Header,
  SocialProofContent,
} from "../../components";
import FooterWithNewsLetter from "../../components/FooterWithNewsLetter";
import FooterWithSitemap from "../../components/FooterWithSitemap";
import ContentSection from "../../components/ContentSection/ContentSection";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <>
      <Header />
      <Footer />
      <FooterWithSocial />
      <FooterWithSitemap />
      <FooterWithSitemapAndSocial />
      <FooterWithNewsLetter />
      <Box sx={{ borderBottom: "1px solid ", borderTop: "1px solid " }}>
        <ContentSection />
      </Box>
      <Box sx={{ py: 5 }}>
        <ContentSectionWithImages />
      </Box>
      <Box sx={{ py: 5, borderTop: "1px solid" }}>
        <SocialProofContent />
      </Box>
    </>
  );
};

export default Home;
