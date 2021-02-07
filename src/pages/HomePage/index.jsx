import React from "react";
// import HomeCardSection from "./HomeCardSection";
import HomeHeroSection from "./HomeHeroSection";
import styled from "styled-components";

const HomePage = () => {
  return (
    <StyledHomepage>
      <HomeHeroSection />
    </StyledHomepage>
  );
};

const StyledHomepage = styled.main`
  overflow: hidden;
`;

export default HomePage;
