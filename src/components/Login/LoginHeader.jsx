import { Link } from "react-router-dom";
import headerStyles from "./LoginPage.module.css";
import { useState, useEffect } from "react";

function LoginHeader() {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={hasShadow ? headerStyles.shadow : headerStyles.noShodow}
      id={headerStyles.head}
    >
      <div id={headerStyles.container}>
        <Link to={"/"}>
          <img id={headerStyles.Logo} src={"/Logos/loginPageLogo.svg"} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default LoginHeader;
