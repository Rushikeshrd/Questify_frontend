import React from "react";
import ProfileInfoCard from "../Cards/ProfileInfoCard";
import { Link } from "react-router-dom";
import Logo from "../../assets/QLogo.png";

const Navbar = () => {
  return (
    <div className="h-16 bg-white border border-b border-gray-200/50 backdrop-blue-[2px] py-2.5 px-4 md:px-0 sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between gap-5">
        <Link
          to="/"
          className="text-md md:text-xl font-medium text-black leading-5"
        >
          <img src={Logo} className="w-35 h-12 z-10" alt="" />
        </Link>
        <ProfileInfoCard />
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <div className="text-xl text-black font-bold">
              <img src={Logo} className="w-35 h-12 z-10" alt="" />
            </div> */
}
