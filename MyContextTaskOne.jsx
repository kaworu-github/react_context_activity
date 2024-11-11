import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

const UserProvider = ({children}) => {
    let [uName] = useState("Donald");
    console.log(uName);
    // let value = {
    //   uName
    // };
    return(
        <UserContext.Provider value={{uName}}>{children}</UserContext.Provider>
    );
};

let useName = () => {
    let context = useContext(UserContext);
  
    if (!context)
      throw new Error(
        "useName должен использоваться внутри ThemeProvider."
      );
  
    return context;
};

export {useName, UserProvider};
// export {useName: userName, UserProvider:UserProvider};