import "./App.css";

import routes from "@constants/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "@components/SideBar/SideBar";
import Map from "@components/Map/Map";
import SearchInfoBar from "@components/SearchInfoBar/SearchInfoBar";
import FavouriteInfoBar from "@components/FavouriteInfoBar/FavouriteInfoBar";
import PlaceCard from "@components/PlaceCard/PlaceCard";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SideBar />
      <Map />
      <Routes>
        <Route path={routes.search} element={<SearchInfoBar />} />
        <Route path={routes.favourites} element={<FavouriteInfoBar />} />
        <Route path={routes.place} element={<PlaceCard />} />
        <Route path={routes.home} element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
