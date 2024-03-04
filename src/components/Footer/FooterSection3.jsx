import Styles from "./Footer.module.css";
import {
  VisaIcon,
  MasterCardIcon,
  Amex,
  DinnerClubIcon,
  DicoverIcon,
  MestroIcon,
  PayPalIcon,
  AliPayIcon,
  WeChatPayIcon,
  AfterPayIcon,
  ZipIcon,
} from "../../Icons";

function FooterSection3() {
  return (
    <>
      <div id={Styles.Section3_container}>
        <div id={Styles.LastSection_part1}>
          <h1 id={Styles.LastSection_part1_heading}>THG</h1>
          <h2 id={Styles.LastSection_part1_text}>2024 © The Hut.com Ltd.</h2>
        </div>

        <div id={Styles.LastSection_part2}>
          <h2 id={Styles.LastSection_part2_text}>Pay securely with</h2>
          <div id={Styles.LastSection_part2}>
            {VisaIcon}
            {MasterCardIcon}
            {Amex}
            {DinnerClubIcon}
            {DicoverIcon}
            {MestroIcon}
            {PayPalIcon}
            {AliPayIcon}
            {WeChatPayIcon}
            {AfterPayIcon}
            {ZipIcon}
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterSection3;
