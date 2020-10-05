import React from "react"
import HeroBannerContainer from "../containers/HeroBannerContainer";
import ServicesContainer from "../containers/ServicesContainer";
import GalleryContainer from "../containers/GalleryContainer";
import LayoutContainer from "../containers/LayoutContainer";
import BrandsContainer from "../containers/BrandsContainer";
import ReviewsContainer from "../containers/ReviewsContainer";
import AboutContainer from "../containers/AboutContainer";

export default function Home() {
  return <div>
    <LayoutContainer>
      <HeroBannerContainer />
      <ServicesContainer />
      <BrandsContainer />
      <ReviewsContainer />
      <AboutContainer />
      <GalleryContainer />
    </LayoutContainer>

  </div>
}
