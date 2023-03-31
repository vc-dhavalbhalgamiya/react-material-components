import React from "react";
import {
  Footer,
  FooterWithSitemapAndSocial,
  FooterWithSocial,
  Header,
} from "../../components";
import FooterWithSitemap from "../../components/FooterWithSitemap";

const Home = () => {
  return (
    <>
      <Header />
      <Footer />
      <FooterWithSocial />
      <FooterWithSitemap />
      <FooterWithSitemapAndSocial />
    </>
  );
};

export default Home;
