import "./App.css";

import Map from "@components/Map/Map";
import SideBar from "@components/SideBar/SideBar";

const App: React.FC = () => {
  return (
    <>
      <SideBar />
      <Map />
    </>
  );
};

export default App;
