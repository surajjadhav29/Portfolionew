import PrimaryBtn from "../common/PrimaryBtn";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, toggleTheme } from "../../store/themeSlice";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import menuIcon from "../../assets/icons/menu-navigation-grid-1529-svgrepo-com.svg";
import { Switch } from "@headlessui/react";
const Navbar = () => {
  const dispatch = useDispatch();
  const themeState = useSelector(
    (store: { themeState: { theme: "day" | "night" } }) =>
      store.themeState.theme
  );
  return (
    <div
      className="sticky top-0 h-20 bg-primaryWhite p-6 mb-16 flex justify-between z-10"
      style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}
    >
      <div className="flex items-center justify-center gap-6">
        <button
          type="button"
          className="md:hidden flex flex-col items-center justify-center"
          onClick={() => dispatch(toggleSidebar(0))}
        >
          <img
            src={menuIcon}
            width={60}
            about="menu icon"
            className="w-[4.2rem]"
          />
        </button>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center  justify-between gap-3 bg-[#F3F3F3] rounded-lg h-12 px-4">
          <label className="text-sm text-[#577C8E]">Mode</label>
          <Switch
            // checked={themeState}
            onClick={() => dispatch(toggleTheme(themeState))}
            className={`${
              themeState === "day" ? "bg-[#535e73]" : "bg-[#ff6481]"
            } relative inline-flex items-center h-8 w-14 rounded-full transition-colors duration-200 ease-in-out`}
          >
            <span
              className={`${
                themeState === "day" ? "translate-x-6" : "translate-x-1"
              } inline-block w-5 h-5 bg-white  rounded-full transition-transform duration-200 ease-in-out`}
            />
          </Switch>
        </div>
        <a href="mailto:surajjadhav8307@gmail.com" target="_blank">
          <PrimaryBtn title="Hire Me" icon={faUserTie} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
