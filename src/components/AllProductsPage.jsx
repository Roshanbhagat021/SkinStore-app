import { Link } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar";
import Styles from "./AllProductsPage.module.css";
import Aside from "./Aside";
import CardList2 from "./ProductsCardForall";
import Bestsellingproduct from "../data/Bestsellingproducts";

function AllProductsPage() {
  return (
    <>
      <Navbar />

      <p className={`${Styles.fixWidth} ${Styles.text}`}>
        <Link to={"/"}>
          <span id={Styles.link}>Home</span>{" "}
        </Link>
        / Best Selling Beauty Products
      </p>
      <main className={Styles.fixWidth} id={Styles.Main_Container}>
        {/* Home Link */}

        <div id={Styles.Aside}>
          <Aside />
        </div>
        <div>
          <h1 id={Styles.Main_heading}>Best Selling Beauty Products</h1>
          <p className={`${Styles.text} ${Styles.Main_text}`}>46 results</p>
          <p className={` ${Styles.Main_text}`}>
            Stock up your skin care shelf, grab a makeup must-have or find a new
            hair hero with SkinStore’s best-selling beauty products. Starring
            brands like{" "}
            <a
              href="https://www.skinstore.com/brands/elemis.list"
              className={Styles.text_withLink}
            >
              Elemis
            </a>
            ,{" "}
            <a
              href="https://www.skinstore.com/brands/olaplex.list"
              className={Styles.text_withLink}
            >
              Olaplex
            </a>{" "}
            and{" "}
            <a
              href="https://www.skinstore.com/brands/chantecaille.list"
              className={Styles.text_withLink}
            >
              Chantecaille
            </a>
            , explore cult-classic and coveted formulas for all your beauty
            needs. Discover fan-favorite cosmetics, such as the{" "}
            <a
              href="https://www.skinstore.com/chantecaille-wild-meadows-lip-chic-2.5g-various-shades/14265474.html"
              className={Styles.text_withLink}
            >
              Chantecaille Wild Meadows Lip Chic
            </a>{" "}
            or browse for some skin care treats with curated sets like the{" "}
            <a
              href="https://www.skinstore.com/skinmedica-everyday-essentials-system/12701671.html"
              className={Styles.text_withLink}
            >
              SkinMedica Everyday Essentials System
            </a>
            . Treat your tresses to a trending tool, like the innovative{" "}
            <a
              href="https://www.skinstore.com/ghd-duet-style-2-in-1-hot-air-styler-black/14215556.html"
              className={Styles.text_withLink}
            >
              ghd Duet Style 2-in-1 Hot Air Styler
            </a>{" "}
            and protect with the{" "}
            <a
              href="https://www.skinstore.com/olaplex-no.9-bond-protector-nourishing-hair-serum-90ml/13660220.html"
              className={Styles.text_withLink}
            >
              Olaplex No.9 Bond Protector Nourishing Hair Serum
            </a>
            . Shop top beauty products for the skin and hair at SkinStore below.
          </p>

          <CardList2 cards={Bestsellingproduct} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AllProductsPage;
