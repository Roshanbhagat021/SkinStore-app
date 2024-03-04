import Footer from "../Footer/Footer";
import LoginHeader from "./LoginHeader";
import Styles from "./LoginPage.module.css";
import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { FaceBook } from "../../Icons";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

function LoginPage() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate =useNavigate()

  const [userInput,setUserInput]=useState({email:"",password:""})

  const { PrevData,setIsAuth,setUserInfo} = useContext(AuthContext);
  console.log("PrevData: ", PrevData);

function handelInputChange(e){
  const {name,value}=e.target;
  setUserInput({...userInput,[name]:value})
}

function handelSubmit(e){
  e.preventDefault();
  const {name}=PrevData;
  if(userInput.email===PrevData.email && userInput.password===PrevData.password){
    setUserInfo({...userInput,"name":name})
    setIsAuth(true)
    navigate("/")
  }else{
    alert("Please fill Right Credencials")
  }
}

  return (
    <>
      <main id={Styles.main}>
        <LoginHeader />
        <div id={Styles.from_container}>
          <div id={Styles.Login_Form}>
            <form id={Styles.Form} onSubmit={(e)=>handelSubmit(e)}>
              <h1 className={Styles.headings}>Existing Customers</h1>

              <label htmlFor="Email">
                * Email address
                <Input
                  focusBorderColor={"#D2D8D8"}
                  border={"1px solid black"}
                  className={Styles.Input}
                  type="email"
                  id="Email"
                  name="email"
                  onChange={(e)=>handelInputChange(e)}
                />
              </label>

              <label htmlFor="Password">
                * Password
                <InputGroup>
                  <Input
                    focusBorderColor={"#D2D8D8"}
                    border={"1px solid black"}
                    className={Styles.Input}
                    id="Password"
                    type={show ? "text" : "password"}
                    name="password"
                    onChange={(e)=>handelInputChange(e)}
                  />
                  <InputRightElement>
                    <Button
                      style={{ marginTop: "1.6rem", paddingRight: "0.5rem" }}
                      size="sm"
                      onClick={handleClick}
                      variant="ghost"
                      backgroundColor={"transparent"}
                    >
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </label>

              <p id={Styles.Forget_Password}>FORGOT YOUR PASSWORD?</p>
              <button className={Styles.btn}>SIGN IN</button>
            </form>

            <p id={Styles.otherWayforLogintext}>Or, Continue with</p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <div className={Styles.LoginMethod_container}>
                {FaceBook}
                <span style={{ fontSize: "0.9rem", marginLeft: "0.5rem" }}>
                  Facebook
                </span>
              </div>
              <div className={Styles.LoginMethod_container}>
                <img
                  style={{ width: "20px" }}
                  src={"../Logos/Google.png"}
                  alt=""
                />
                <span style={{ fontSize: "0.9rem", marginLeft: "0.5rem" }}>
                  Facebook
                </span>
              </div>
            </div>
          </div>
          <div id={Styles.Register_Form}>
            <h1 className={Styles.headings}>New Customers</h1>
            <button className={Styles.btn}>
              <Link to={"/register-page"}>REGISTER</Link>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default LoginPage;
