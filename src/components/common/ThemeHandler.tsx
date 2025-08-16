import { useEffect } from "react";
import { useSelector } from "react-redux";
import { mainStoreType } from "../../store/storeStateType";

const ThemeHandler = () => {
  const theme = useSelector((state: mainStoreType) => state.themeState.theme);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "day") {
      root.style.setProperty("--white-primary", "#f8f9fa");
      root.style.setProperty("--pink-primary", "#535e73");
      root.style.setProperty("--light-pink-primary", "#fff4f5");
      root.style.setProperty("--gray-primary", "#4d6385");
      root.style.setProperty("--black-primary", "#282424");
    } else if (theme === "night") {
      root.style.setProperty("--white-primary", "#1b1b1d");
      root.style.setProperty("--pink-primary", "#ff6481");
      root.style.setProperty("--light-pink-primary", "#332a2e");
      root.style.setProperty("--gray-primary", "#a2b1c3");
      root.style.setProperty("--black-primary", "#f8f9fa");
    }
  }, [theme]);

  return null;
};

export default ThemeHandler;
