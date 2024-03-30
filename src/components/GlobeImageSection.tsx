import globe from "../assets/globePng.png";
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud2.png";

export default function GlobeImageSection() {
  return (
    <div>
      <img
        src={cloud1}
        className="absolute top-2 right-0 z-50 w-1/2 animate-rToL"
      />
      <img
        src={cloud2}
        className="absolute top-0 left-10 z-50 w-1/2 animate-ltoR"
      />

      <div className="absolute top-1/2 left-[10%] -translate-y-[50%]">
        {/* clouds */}

        {/* globe image */}
        <div
          className="lg:w-11/12 2xl:w-full h-full rounded-full border border-cyan-700 bg-transparent animate-spin"
          style={{ animationDuration: "50s" }}
        >
          <div className="w-full h-full rounded-full border border-cyan-700 scale-[0.97] ">
            <img src={globe} className="z-40 scale-[0.99]" />
          </div>
        </div>

        {/* discover the world */}
        <div className="text-sm absolute bg-white shadow-md rounded-md px-8 py-2 z-50 top-1/4 animate-onePulse flex flex-col items-center justify-between">
          <p className="text-sm">Discover the</p>
          <p className="text-indigo-500">world</p>
        </div>
        <div className="text-sm absolute bg-white shadow-md rounded-md px-8 py-2 z-50 bottom-1/4 right-10 animate-onePulse flex flex-col items-center justify-between">
          <p>Time for</p>
          <p className="text-indigo-500">vacation</p>
        </div>
      </div>
    </div>
  );
}
