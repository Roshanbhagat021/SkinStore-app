import Styles from "./Footer.module.css";

function FooterSection1() {
  return (
    <>
      <div id={Styles.Section1_container}>
        <div id={Styles.Signup_section}>
          <p id={Styles.text}>
            <b>Sign up to our email list and receive 20% off your next order</b>
          </p>
          <button id={Styles.signUp_btn}>SIGN UP</button>
        </div>

        <div id={Styles.ContactUs_section}>
          <p id={Styles.text}>
            <b>Connect with us</b>
          </p>
          <div id={Styles.Social_mediaLinks}>
            <a href="https://www.instagram.com/skinstore/">
              <img src={"../Logos/insta.png"} alt="" />
            </a>
            <a href="https://www.tiktok.com/@skinstore?_t=8dZnJgTmujO&_r=1">
              <img src={"../Logos/tictok.png"} alt="" />
            </a>
            <a href="https://www.facebook.com/SkinStore">
              <img src={"../Logos/facebook.png"} alt="" />
            </a>
            <a href="https://twitter.com/skinstore_cs">
              <img src={"../Logos/twitter.png"} alt="" />
            </a>
            <a href="https://www.pinterest.com/skinstore/">
              <img src={"../Logos/pinterest.png"} alt="" />
            </a>
            <a href="https://www.snapchat.com/add/skinstoreus">
              <img src={"../Logos/snapchat.webp"} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterSection1;
