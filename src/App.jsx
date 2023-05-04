import "./App.css";
import { Bookpage } from "./Bookpage";
import { Homepage } from "./Homepage";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="main__container">
          <div className="movie_container">
            <Outlet />
          </div>
        </div>
      ),
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/bookmovie",
          element: <Bookpage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
