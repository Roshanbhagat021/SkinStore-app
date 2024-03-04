// Components
import Navbar from "./Navbar";
import Highlights from "./Highlights";
import ProductsCarousel from "./ProductsCarousel";
import BigBanner from "./BigBanner";
import SpecialProducts from "./SpecialProducts";

// Data
import data from "../data/HighLightsData";
import productDetails1 from "../data/productDetails1";
import productDetails2 from "../data/productDetails2";
import banner1 from "../assets/banner_image1.webp";
import banner2 from "../assets/banner_image2.webp";

// Styling
import "../App.css";
import HomePageBestSeller from "./HomePageBestSeller";
import Footer from "./Footer/Footer";

import Carousel from "./Carousel";

function Home() {
  const bannerImages = [banner1, banner2];

  return (
    <>
      <main>
        <Navbar />
        
        <div style={{ width: "100%", maxWidth: "1400px", margin: "0 auto" }}>
          <Carousel>
            {bannerImages.map((s, ind) => (
              <img key={ind} src={s} />
            ))}
          </Carousel>
        </div>

        <Highlights>{data}</Highlights>

        <ProductsCarousel productDetails={productDetails1}>
          Dermstore's Beauty Refresh Sale: Save on Your Most-Loved Brands
        </ProductsCarousel>

        <BigBanner
          image={"/Banners/bigBanner1.webp"}
          link={"https://www.dermstore.com/download-app.list"}
        />

        <SpecialProducts
          Heading={
            "Save on top SkinStore brands at Dermstore's Beauty Refresh Sale"
          }
        />

        <BigBanner image={"/Banners/bigBanner2.webp"} link={"login"} />

        <ProductsCarousel productDetails={productDetails2}>
          Dermstore's Beauty Refresh Sale: Rewards Members Earn 2x Points
        </ProductsCarousel>

        <BigBanner
          image={"/Banners/bigBanner3.webp"}
          link={
            "https://www.dermstore.com/skinceuticals-cell-cycle-catalyst-30ml/15058249.html"
          }
        />

        <HomePageBestSeller />
        <Footer />
      </main>
    </>
  );
}

export default Home;
