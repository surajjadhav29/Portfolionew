import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import DownloadResumeBtn from "./DownloadResumeBtn";
import ImageNameContainer from "./ImageNameContainer";
import NavList from "./NavList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../store/themeSlice";
import useResponsiveSidebar from "../../utils/hooks/useResponsiveSidebar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
type props = {
  sidebar: 0 | 1 | 2;
};
const Sidebar: React.FC<props> = ({ sidebar }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;
  useResponsiveSidebar(sidebar);
  useEffect(() => {
    if (sidebar === 1) dispatch(toggleSidebar(1));
  }, [pathname, dispatch]);

  return (
    <div
      className={`bg-primaryWhite no-scrollbar ${
        sidebar
          ? `w-[250px] max-sm1:w-[200px] 2xl:w-[370px] translate-x-0 ${
              sidebar === 1 ? "fixed" : "sticky"
            } top-0 left-0`
          : "-translate-x-full fixed"
      } h-[100dvh] z-20 flex flex-col justify-between overflow-y-auto transition-[transform] duration-500 ease-in-out `}
      style={{
        boxShadow: sidebar ? "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" : "none",
      }}
    >
      <button
        className="bg-primaryPink p-2 absolute top-10 right-0 z-10 rounded-s-xl md:hidden"
        onClick={() => dispatch(toggleSidebar(sidebar))}
      >
        <FontAwesomeIcon
          icon={faCaretLeft}
          size="xl"
          className="text-primaryWhite"
        />
      </button>

      <ImageNameContainer />
      <NavList />
      <DownloadResumeBtn />
    </div>
  );
};

export default Sidebar;
