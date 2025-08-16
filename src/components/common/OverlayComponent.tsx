import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../store/themeSlice";

const OverlayComponent = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="w-full h-full fixed top-0 left-0 bg-[rgba(0,0,0,0.7)] z-[10]"
      onClick={() => dispatch(toggleSidebar(1))}
    ></div>
  );
};

export default OverlayComponent;
