import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [PrevData,setPrevData]=useState({
    name: "",
    email: "",
    password: "",
  })

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  function logOut() {
    setPrevData(userInfo)
    setUserInfo({ name: "", email: "", password: "" });
    setIsAuth(false);
  }

  return (
    <AuthContext.Provider
      value={{ userInfo, isAuth, setIsAuth,PrevData, setUserInfo, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
