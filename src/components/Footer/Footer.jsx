import Divider from "../Divider";
import FooterSection1 from "./FooterSection1";
import FooterSection2 from "./FooterSection2";
import FooterSection3 from "./FooterSection3";

function Footer() {
  return (
    <>
      <Divider color={"#333311"} height={2} />
      <FooterSection1 />
      <FooterSection2 />
      <Divider color={"#333311"} height={2} />
      <FooterSection3 />
    </>
  );
}

export default Footer;
