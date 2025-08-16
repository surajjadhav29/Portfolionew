import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import "./animation.css";
import App from "./App.tsx";
import store from "./store/store.ts";
import routes from "./pages/routes.ts";
import LazyRoutes from "./components/common/LazyRoutes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route element={<App />}>
            {routes.map(({ path, component: Component }) => (
              <Route
                key={path}
                path={path}
                element={<LazyRoutes element={<Component />} />}
              />
            ))}
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  </StrictMode>
);
