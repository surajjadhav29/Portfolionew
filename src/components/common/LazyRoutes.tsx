import { ReactNode, Suspense } from "react";
import Loader from "./Loader";
type props = {
  element: ReactNode;
};
const LazyRoutes: React.FC<props> = ({ element }) => {
  return <Suspense fallback={<Loader />}>{element}</Suspense>;
};

export default LazyRoutes;
