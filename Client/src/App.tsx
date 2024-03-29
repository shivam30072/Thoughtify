import "./App.css";
import { privateRoutes, publicRoutes } from "./Route";
import { Route, Routes } from "react-router-dom";

function App() {
  const token = true;
  return (
    <div>
      <Routes>
        {token && (
          <>
            {privateRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </>
        )}

        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
