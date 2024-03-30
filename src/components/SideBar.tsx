import { Dispatch, SetStateAction } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

type Props = {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
};

const SideBar = ({ showMenu, setShowMenu }: Props) => {
  return (
    <div
      className={`fixed h-full w-1/3 bg-slate-50 z-[100] shadow-lg ${
        showMenu ? `translate-x-0` : `translate-x-[-110%]`
      } transition-transform duration-200`}
    >
      <div className="w-full flex justify-end mt-8 mr-8">
        <button
          className="p-2 ml-auto"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <IoIosCloseCircleOutline className="text-4xl" />
        </button>
      </div>
      <ul className="p-4 flex flex-col justify-between w-full gap-4 text-xl font-medium">
        <hr />
        <li className="p-2 hover:border-b-2 border-indigo-950 cursor-pointer w-fit">
          Home
        </li>
        <li className="p-2 hover:border-b-2 border-indigo-950 cursor-pointer w-fit">
          About Us
        </li>
        <li className="p-2 hover:border-b-2 border-indigo-950 cursor-pointer w-fit">
          Our Services
        </li>
        <li className="p-2 hover:border-b-2 border-indigo-950 cursor-pointer w-fit">
          Contact Us
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
