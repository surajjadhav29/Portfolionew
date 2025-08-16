import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./components/sidebar/Navbar";
import { useSelector } from "react-redux";
import { mainStoreType } from "./store/storeStateType";
import OverlayComponent from "./components/common/OverlayComponent";
import ThemeHandler from "./components/common/ThemeHandler";
function App() {
  const sidebar = useSelector(
    (state: mainStoreType) => state.themeState.sidebar
  );

  return (
    <div className="font-urbanist tracking-wide text-primaryTextBlack flex justify-between">
      <ThemeHandler />
      <Sidebar sidebar={sidebar} />
      <div
        className={`flex-1 bg-primaryLightPink flex flex-col justify-between ${
          sidebar === 1 ? "overflow-hidden" : ""
        }`}
        style={{
          height: sidebar === 1 ? "100dvh" : "",
          minHeight: sidebar === 2 ? "100dvh" : "100dvh",
        }}
      >
        {sidebar === 1 && <OverlayComponent />}
        <Navbar />
        <div
          className={`flex-1 px-16 py-8 max-sm:px-12 max-sm:py-6 max-xs:px-8 max-xs:py-4`}
        >
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
