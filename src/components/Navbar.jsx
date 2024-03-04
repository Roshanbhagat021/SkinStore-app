import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Circle,
  Center,
  Button,
  VStack,
  ButtonGroup,
  Divider as ChakraDivider,
} from "@chakra-ui/react";

import Styles from "./Navbar.module.css";
import Divider from "./Divider";
import Little_banner from "./Little_banner";

import { searchIcon, cartIcon, accoutnIcon } from "../Icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const LoginAndRegisterElement = (
  <>
    <VStack h={"40%"} p={4}>
      <ButtonGroup
        display={"flex"}
        flexDirection={"column"}
        w={"100%"}
        bg={"#eeeeee"}
      >
        <Link to={"/login-page"}>
          <Button
            className={Styles.Login_Btn}
            mb={4}
            bg={"black"}
            color={"white"}
          >
            LOGIN
          </Button>
        </Link>

        <Link to={"/register-page"}>
          <Button
            className={Styles.Register_Btn}
            colorScheme="black"
            bg={"beige"}
            variant="outline"
            mb={4}
          >
            REGISTER
          </Button>
        </Link>
      </ButtonGroup>
    </VStack>
  </>
);

function Navbar() {
  const { isAuth, userInfo, logOut } = useContext(AuthContext);

  return (
    <>
      <div id={Styles.Nav_container}>
        <Flex
          w={"90vw"}
          maxW={"1400px"}
          justifyContent={"space-between"}
          m={"28px auto"}
          padding={"0 20px"}
        >
          <Link to={"/"}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h1 id={Styles.Logo}>SkinStore</h1>
              <p id={Styles.sub_Logo}>
                part of the{" "}
                <span style={{ fontWeight: "500" }}>LOOKFANTASTIC</span> group
              </p>
            </div>
          </Link>

          <div>
            <InputGroup>
              <Input
                borderRadius="none"
                outline={"none"}
                id={Styles.search_box}
                type="text"
                placeholder="Search for a product or a brand..."
              />
              <InputRightElement>{searchIcon}</InputRightElement>
            </InputGroup>
          </div>

          <div id={Styles.Last_navbar_section}>
            <Center className="account" id={Styles.Account}>
              {accoutnIcon}Account
              <div id={Styles.Account_popup}>
               
                {!isAuth ? LoginAndRegisterElement : null}
                <VStack h={"60%"} bg={"white"}>
                  {isAuth ? (
                    <Text
                      p={4}
                      id={Styles.Logout_box}
                      className={Styles.Account_popup_text}
                    >
                      Hello,{userInfo.name}{" "}
                      <span onClick={logOut} className={Styles.Logout_text}>
                        LOG OUT
                      </span>
                    </Text>
                  ) : null}

                  <Text p={4} className={Styles.Account_popup_text}>
                    Wishlist
                  </Text>
                  <Text p={4} className={Styles.Account_popup_text}>
                    Your Orders
                  </Text>
                  <Text p={4} className={Styles.Account_popup_text}>
                    Your Referals
                  </Text>
                </VStack>
              </div>
            </Center>

            <Center id={Styles.Cart}>
              {cartIcon}Cart
              <Circle
                size="20px"
                bg="black"
                color="white"
                fontSize={"12px"}
                className={Styles.Cart_value}
              >
                0
              </Circle>
              <div id={Styles.Cart_popup}>
                <div>
                  <p>There are currently no items in your cart.</p>
                </div>
              </div>
            </Center>
          </div>
        </Flex>

        <Divider color={"black"} height={2} />
        <div className={Styles.navLinks}>
          <Center className={Styles.Brands}>
            Brands <div className={Styles.Brands_popup}></div>
          </Center>
          <Center className={Styles.SkinCare}>
            Skin Care
            <div className={Styles.SkinCare_popup}></div>
          </Center>
          <Center className={Styles.New}>
            New
            <div className={Styles.New_popup}></div>
          </Center>
          <Center className={Styles.Makeup}>
            Makeup
            <div className={Styles.Makeup_popup}></div>
          </Center>
          <Center>Hair</Center>
          <Center>Tools</Center>
          <Center>Bath & Body</Center>
          <Center>Fragrance</Center>
          <Center>Sun Care</Center>
          <Center>Self Care</Center>
          <Center>Sale</Center>
          <Center>Blog</Center>
          <Center>Discover Dermstore</Center>
        </div>
        <ChakraDivider orientation="horizontal" />
      </div>
      <Little_banner />
    </>
  );
}

export default Navbar;
