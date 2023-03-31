import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Movie from "./pages/Movie";
import Home from "./pages/Home";
import Search from "./pages/Search";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/movie/:id",
        element: <Movie />
      },
      {
        path: "/search",
        element: <Search />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);



//router antigo

// {
//   /* <BrowserRouter>
// <Routes>
//   <Route element={<App />}>
//     <Route path="/" element={<Home />} />
//     <Route path="/movie/:id" element={<Movie />} />
//     <Route path="/search" element={<Search />} />
//   </Route>
// </Routes>
// </BrowserRouter> */
// }
