// import {}

import { Route, Routes } from "react-router-dom";
import AllProductsPage from "./components/AllProductsPage";
import Home from "./components/Home";
import LoginPage from "./components/Login/LoginPage";
import RegisterPage from "./components/Login/RegisterPage";

function AllRoutes() {
  return (
    <>
      <div>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/best-sellers.list"} element={<AllProductsPage/>} />
          <Route path={"/login-page"} element={<LoginPage/>}/>
          <Route path={"/register-page"} element={<RegisterPage/>}/>
        </Routes>
      </div>
    </>
  );
}

export default AllRoutes;
