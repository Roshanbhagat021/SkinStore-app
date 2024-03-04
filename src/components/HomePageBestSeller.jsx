import CardList from "./ProductsCard";
import HomePageBestSellerProductDetails from "../data/HPBestSellerPDetails";
import Styles from "./ProductsCard.module.css";
import { Link } from "react-router-dom";

function HomePageBestSeller() {
  return (
    <>
      <CardList
        cards={HomePageBestSellerProductDetails}
        heading={"BestSeller"}
      />
      <div id={Styles.Btn_div}>
      <Link to={"/best-sellers.list"}> <button id={Styles.ViewAll_btn}>VIEW ALL</button></Link>
      </div>
    </>
  );
}

export default HomePageBestSeller;
