import { themeStateType } from "./storeStateType";

const initialState: themeStateType = {
  theme: "day",
  sidebar: window.innerWidth > 768 ? 2 : 0,
};

const nightTheme = "NightTheme";
const dayTheme = "DayTheme";
const sidebarOpen = "OpenSidebar";
const sidebarClose = "ClosedSidebar";
const sidebarResponsive = "ResponsiveSidebar";

export const themeReducer = (
  state = initialState,
  action: { type: string; payload?: number | string }
) => {
  switch (action.type) {
    case nightTheme:
      return { ...state, theme: "night" };
    case dayTheme:
      return { ...state, theme: "day" };
    case sidebarOpen:
      return { ...state, sidebar: 1 };
    case sidebarClose:
      return { ...state, sidebar: 0 };
    case sidebarResponsive:
      return { ...state, sidebar: action.payload };
    default:
      return state;
  }
};
export const toggleTheme = (currentTheme: "day" | "night") => {
  return {
    type: currentTheme === "day" ? nightTheme : dayTheme,
  };
};
export const toggleSidebar = (currentCondn: 1 | 0 | 2) => {
  return {
    type: currentCondn ? sidebarClose : sidebarOpen,
  };
};
export const responsiveSidebar = (futureState: 0 | 2) => {
  return {
    type: sidebarResponsive,
    payload: futureState,
  };
};
