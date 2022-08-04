import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import Shows from "../pages/TV-Shows/Shows";
import IMDB from "../pages/top IMDB/IMDB";
import Android from "../pages/AndroidApp/Android";
export const NavbarData = [
  { id: 1, title: "home", path: "/home", element: <Home />, visible: true },
  { id: 2, title: "genre", path: "", visible: false },
  { id: 3, title: "country", path: "", visible: false },
  {
    id: 4,
    title: "movies",
    path: "/movies",
    element: <Movies />,
    visible: true,
  },
  {
    id: 5,
    title: "TV shows",
    path: "/tv-shows",
    element: <Shows />,
    visible: true,
  },
  {
    id: 6,
    title: "top IMDB",
    path: "/top-imdb",
    element: <IMDB />,
    visible: true,
  },
  {
    id: 7,
    title: "android app",
    path: "/android-app",
    element: <Android />,
    visible: true,
  },
];
