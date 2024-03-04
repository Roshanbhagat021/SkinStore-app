import LoginHeader from "./LoginHeader";
import Styles from "./LoginPage.module.css";
import { FaceBook } from "../../Icons";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const { setUserInfo,setIsAuth } = useContext(AuthContext);

const navigat=useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handelFormChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handelFormSubmit(e) {
    e.preventDefault();
    if (
      formData.name.length > 0 &&
      formData.email.length > 0 &&
      formData.password.length > 0
    ) {
      setUserInfo(formData);
      setIsAuth(true)
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      navigat("/")
    } else {
      alert("Please fiil all the required Details");
    }
  }

  console.log("formData: ", formData);

  return (
    <>
      <LoginHeader />
      <div id={Styles.RegisterPage}>
        <div id={Styles.RegisterForm}>
          <div id={Styles.Through_facebook_google}>
            <h1>About You</h1>
            <h2>Sign Up With</h2>
            <div className={Styles.flex} id={Styles.authanticater}>
              <div className={Styles.flex} id={Styles.facebook}>
                {FaceBook} <span>Facebook</span>
              </div>
              <div className={Styles.flex} id={Styles.google}>
                <img
                  style={{ width: "25px" }}
                  src={"../Logos/Google.png"}
                  alt=""
                />
                Google
              </div>
            </div>
          </div>
          <div id={Styles.Through_email}>
            <h2>Or create an email account</h2>
            <form id={Styles.Email_form} onSubmit={(e) => handelFormSubmit(e)}>
              <label htmlFor="">
                <span className={Styles.labels}>* Full Name</span>
                <br />
                <input
                  className={Styles.InputBoxs}
                  name="name"
                  onChange={(e) => handelFormChange(e)}
                />
              </label>
              <label htmlFor="">
                <span className={Styles.labels}>* Email address</span>
                <br />
                <input
                  className={Styles.InputBoxs}
                  name="email"
                  onChange={(e) => handelFormChange(e)}
                />
              </label>
              <label htmlFor="">
                <span className={Styles.labels}>* Confirm Email address</span>
                <br />
                <input className={Styles.InputBoxs} />
              </label>
              <div className={Styles.extra_margin}>
                <label htmlFor="">
                  <span className={Styles.labels}>* Password</span>
                  <br />
                  <input
                    className={Styles.InputBoxs}
                    type="password"
                    name="password"
                    onChange={(e) => handelFormChange(e)}
                  />
                </label>
                <p className={Styles.very_small_text}>
                  Include a minimum of 6 characters, and contain at least 1
                  number
                </p>
              </div>
              <label htmlFor="">
                <span className={Styles.labels}>* Confirm Password</span>
                <br />
                <input type="password" className={Styles.InputBoxs} />
              </label>
              <div className={Styles.extra_margin}>
                <label htmlFor="">
                  <span className={Styles.labels}>
                    Cell Phone Number{" "}
                    <span className={Styles.Optional_text}>(Optional)</span>
                  </span>
                  <br />
                  <input className={Styles.InputBoxs} />
                </label>
                <p className={Styles.very_small_text}>
                  We will use this number to send occasional promotional
                  messages.
                </p>
              </div>
              <div className={Styles.Referral}>
                <label htmlFor="">
                  <span className={Styles.labels}>
                    Referral Code{" "}
                    <span className={Styles.Optional_text}>(Optional)</span>
                  </span>
                  <br />
                  <input className={Styles.InputBoxs} />
                </label>
                <p className={Styles.very_small_text}>
                  * Your referrals discount is automatically applied at cart
                </p>
              </div>

              <input
                className={Styles.Continue_btn}
                type="submit"
                value="Continue"
              />
            </form>
            <p className={Styles.Policy_and_TermCondition}>
              By proceeding, you are confirming that you agree to our{" "}
              <span className={Styles.link}>
                <a href="https://www.skinstore.com/info/terms-conditions.list">
                  Terms and Conditions
                </a>
              </span>{" "}
              and{" "}
              <span className={Styles.link}>
                <a href="https://www.skinstore.com/info/privacy-policy.list">
                  Privacy Policy
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
