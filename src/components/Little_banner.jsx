import { Box, Link, Text } from "@chakra-ui/react";
import Styles from "./Navbar.module.css";
import banner_image1 from "../assets/banner_image1.webp";

function Little_banner() {
  return (
    <a  href="https://www.dermstore.com/">
      <div id={Styles.Little_banner}>
        Save on your spring routing with up to 20% off at Dermstore's Beauty
        Refrest Sale
      </div>
    </a>
  );
}

export default Little_banner;
