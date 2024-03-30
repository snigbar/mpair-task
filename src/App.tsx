import bgWave from "./assets/bgWave.png";
import GlobeImageSection from "./components/GlobeImageSection";
function App() {
  return (
    <div className="h-screen flex justify-between items-center overflow-hidden">
      {/* left side */}
      <div className="h-full basis-[55%] bg-blue-200"></div>

      {/* right side */}
      <div className="h-full basis-[45%] relative">
        <img src={bgWave} className="h-full w-11/12 ml-auto" />
        <GlobeImageSection />
      </div>
    </div>
  );
}

export default App;
