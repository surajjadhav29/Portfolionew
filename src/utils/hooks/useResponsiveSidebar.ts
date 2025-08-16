import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { responsiveSidebar } from "../../store/themeSlice";

const useResponsiveSidebar = (sidebar: 0 | 1 | 2) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if ((sidebar === 2 && width < 768) || (sidebar === 0 && width >= 768)) {
        dispatch(responsiveSidebar(width < 768 ? 0 : 2));
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch, sidebar]);
};

export default useResponsiveSidebar;
