import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faLocationDot,
  faStar,
  faMap,
  faGear,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import cloud from "../assets/cloud.png";

function Sidebar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-blue-700 px-3 py-2 rounded-lg"
      >
        <FontAwesomeIcon icon={toggleMenu ? faXmark : faBars} />
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed md:static top-0 left-0 z-40
          w-64 min-h-screen bg-[#0e1421] text-white
          transition-transform duration-500 border-r-2
          ${toggleMenu ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="p-4 flex flex-col items-center">
          <img
            src={cloud}
            className="w-28 h-28 object-cover"
            alt="cloud"
          />

          <h2 className="text-3xl font-bold mt-2">
            Weatherly
          </h2>
        </div>

        <ul className="p-4 space-y-4 text-lg">
          <li className="flex items-center gap-3 p-3 bg-blue-700 rounded-xl">
            <FontAwesomeIcon icon={faHouse} />
            Dashboard
          </li>

          <li className="flex items-center gap-3 p-3 hover:bg-blue-700 rounded-xl">
            <FontAwesomeIcon icon={faLocationDot} />
            Location
          </li>

          <li className="flex items-center gap-3 p-3 hover:bg-blue-700 rounded-xl">
            <FontAwesomeIcon icon={faStar} />
            Favorite
          </li>

          <li className="flex items-center gap-3 p-3 hover:bg-blue-700 rounded-xl">
            <FontAwesomeIcon icon={faMap} />
            Maps
          </li>

          <li className="flex items-center gap-3 p-3 hover:bg-blue-700 rounded-xl">
            <FontAwesomeIcon icon={faGear} />
            Settings
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;