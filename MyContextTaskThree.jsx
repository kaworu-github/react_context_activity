import { createContext, useContext, useState } from "react";

const LanguageContext = createContext(null);

let LanguageProvider = ({children}) => {

    /* let languages = {
      ua:{title:"заголовок"},
      en:{title:"heading"}
    }; */

    
    let [isUa, setIsUa] = useState(false);
    console.log(isUa);
    
    let [language, setLanguage] = useState('ua');

    const selectLanguage = (lang) => {
      setLanguage(lang);
      console.log('current lang', lang);
    }

    const toggleModal = () => setIsUa((prevLangState) => !prevLangState);
    
    let value={
      isUa, 
      toggleModal,
      language,
      selectLanguage
    };

    return(
        <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
    );
}
const useLanguage = () => {
    let context = useContext(LanguageContext);
  
    if (!context)
      throw new Error(
        "useLanguage должен использоваться внутри LanguageProvider."
      );
  
    return context;
  };
export {useLanguage, LanguageProvider};
