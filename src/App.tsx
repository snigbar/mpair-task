import { useState } from "react";
import bgWave from "./assets/bgWave.png";
import GlobeImageSection from "./components/GlobeImageSection";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="h-screen flex justify-between items-center overflow-hidden">
      {/* menu */}
      <SideBar setShowMenu={setShowMenu} showMenu={showMenu}></SideBar>
      {/* left side */}
      <div className="h-full w-full">
        <Navbar setShowMenu={setShowMenu}></Navbar>
      </div>

      {/* right side */}
      <div className="h-full w-full relative">
        <img src={bgWave} className="h-full w-11/12 ml-auto" />
        <GlobeImageSection />
      </div>
    </div>
  );
}

export default App;
