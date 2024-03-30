import { Dispatch, SetStateAction } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
const Navbar = ({
  setShowMenu,
}: {
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <nav className="flex items-center p-8">
      {/* menu button*/}
      <div className="p-2">
        <button onClick={() => setShowMenu((prev) => !prev)}>
          <HiMenuAlt2 className="text-[#154B67] text-4xl" />
        </button>
      </div>
      {/* menu */}
      <div className="p-2 flex-1 flex justify-center">
        <div className="relative text-3xl text-center text-[#154B67]">
          <p className="font-semibold font-tenorSans">VILLA OF </p>
          <p className="font-lobster absolute top-4 text-4xl font-light tracking-[8px] left-1 -rotate-2">
            Summer
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
