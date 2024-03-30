import "./App.css";

import SideBar from "@components/SideBar/SideBar";
import Map from "@components/Map/Map";

const App: React.FC = () => {
  return (
    <>
      <SideBar />
      <Map />
    </>
  );
};

export default App;
