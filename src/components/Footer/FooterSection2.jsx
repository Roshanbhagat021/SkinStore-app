import Styles from "./Footer.module.css";
import {
  Phoneicon,
  TruckIcon,
  QuestionMarkIcon,
  CookieIcon,
  TrackIcon,
  ReturnIcon,
} from "../../Icons";


function FooterSection2() {
  return (
    <>
      <div id={Styles.Section2_container}>
        <div id={Styles.Left_section}>
          <p id={Styles.text}>
            <b>Help & Information</b>
          </p>
          <div>
            <a
              className={Styles.footer_list}
              href="https://www.skinstore.com/help-centre.list"
            >
              {Phoneicon}
              <span className={Styles.small_text}>Custumer Service</span>
            </a>
          </div>
          <div>
            <a
              className={Styles.footer_list}
              href="https://www.skinstore.com/info/delivery-information.list"
            >
              {TruckIcon}
              <span className={Styles.small_text}>Delivery Information</span>
            </a>
          </div>
          <div>
            <a
              className={Styles.footer_list}
              href="https://www.skinstore.com/info/refunds-returns.list"
            >
              {ReturnIcon}
              <span className={Styles.small_text}>Returns & Refunds</span>
            </a>
          </div>
          <div>
            <a
              className={Styles.footer_list}
              href="https://www.skinstore.com/help-centre.list"
            >
              {QuestionMarkIcon}
              <span className={Styles.small_text}>Help Center</span>
            </a>
          </div>
          <div>
            <a
              className={Styles.footer_list}
              href="https://www.skinstore.com/track-your-order.list?affil=thgppc&kwds=39700017997406161&thg_ppc_campaign=71700000020666642&adtype=&product_id="
            >
              {TrackIcon}
              <span className={Styles.small_text}>Track my order</span>
            </a>
          </div>
          <div>
            <a
              className={Styles.footer_list}
              href="https://www.skinstore.com/statement.accessibility"
            >
              <span className={Styles.small_text}>Accessiblity</span>
            </a>
          </div>
          <div>
            <a className={Styles.footer_list} href="">
              {CookieIcon}
              <span className={Styles.small_text}>Cookie Setting</span>
            </a>
          </div>
        </div>

        <div id={Styles.Right_section}>
          <div
            className={Styles.Right_section_Parts}
            // id={Right_section_part1}
          >
            <p id={Styles.text}>
              <b>About SkinStore</b>
            </p>
            <a
              className={Styles.footer_list2}
              href="https://www.skinstore.com/help-centre.list"
            >
              <span className={Styles.small_text}>Key Workers Discount</span>
            </a>
            <a
              className={Styles.footer_list2}
              href="https://www.skinstore.com/help-centre.list"
            >
              <span className={Styles.small_text}>About Us</span>
            </a>
            <a
              className={Styles.footer_list2}
              href="https://www.skinstore.com/help-centre.list"
            >
              <span className={Styles.small_text}>Affiliate Program</span>
            </a>
            <a
              className={Styles.footer_list2}
              href="https://www.skinstore.com/help-centre.list"
            >
              <span className={Styles.small_text}>Brand Directory</span>
            </a>
            <a
              className={Styles.footer_list2}
              href="https://www.skinstore.com/help-centre.list"
            >
              <span className={Styles.small_text}>Coupon Codes</span>
            </a>
            <a
              className={Styles.footer_list2}
              href="https://www.skinstore.com/help-centre.list"
            >
              <span className={Styles.small_text}>Refer A Friend</span>
            </a>
            <a
              className={Styles.footer_list2}
              href="https://www.skinstore.com/help-centre.list"
            >
              <span className={Styles.small_text}>Students Discoutn</span>
            </a>
            <a
              className={Styles.footer_list2}
              href="https://www.skinstore.com/help-centre.list"
            >
              <span className={Styles.small_text}>Join SkinStore Experts</span>
            </a>
          </div>
          <div
            className={Styles.Right_section_Parts}
            // id={Right_section_part2}
          >
            <p id={Styles.text}>
              <b>Legal</b>
            </p>
            <a
              className={Styles.footer_list2}
              href="https://www.skinstore.com/help-centre.list"
            >
              <span className={Styles.small_text}>Cookie Information </span>
            </a>
            <a
              className={Styles.footer_list2}
              href="https://www.skinstore.com/help-centre.list"
            >
              <span className={Styles.small_text}>Privicy Policy </span>
            </a>
            <a
              className={Styles.footer_list2}
              href="https://www.skinstore.com/help-centre.list"
            >
              <span className={Styles.small_text}>Terms & Conditions </span>
            </a>
            <a
              className={Styles.footer_list2}
              href="https://www.skinstore.com/help-centre.list"
            >
              <span className={Styles.small_text}>
                Mordern Slavery Statement
              </span>
            </a>
          </div>
          <div
            className={Styles.Right_section_Parts}
            // id={Right_section_part3}
          >
            <p id={Styles.text}>
              <b>How to Contact us</b>
            </p>
            <a
              className={Styles.footer_list2}
              href="https://www.skinstore.com/help-centre.list"
            >
              <span className={Styles.small_text}>Messages Us </span>
            </a>
            <a
              className={Styles.footer_list2}
              href="https://www.skinstore.com/help-centre.list"
            >
              <span className={Styles.small_text}>
                Free Beauty Consultations
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterSection2;
