import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Bag from "./components/routes/Bag.jsx";
import Home from "./components/routes/Home.jsx";
import { Provider } from "react-redux";
import Myntrastore from "./components/store/index.js";

import Wishlist from "./components/Wishlist.jsx";
import Profile from "./components/Profile.jsx";
import Mens from "./components/Mens.jsx";
import Women from "./components/Women.jsx";
import Kids from "./components/Kids.jsx";
import Decor from "./components/Decor.jsx";
import Beauty from "./components/Beauty.jsx";
import SearchResult from "./components/SearchResult.jsx";
import Details from "./components/Details.jsx";
import "./index.css";
const router = createBrowserRouter([
  {
   
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
      {path:"/wishlist", element: <Wishlist/>},
      {path:"/profile", element:<Profile/>},
      {path:"/Mens-item", element:<Mens/>},
      {path:"/Women-item", element:<Women/>},
      {path:"/kids-item", element:<Kids/>},
      {path:"/Decor-item", element:<Decor/>},
      {path:"/Beauty-item", element:<Beauty/>},
      {path:"/search/:query", element: <SearchResult />},
      {path:"/Detail/:Item", element: <Details/>}
    ],
  
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Myntrastore}>
    <RouterProvider router={router} />
    </Provider>
  
  </React.StrictMode>
);
