import React from "react";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import BurgerMenuNew from "./BurgerMenuNew";
import { Login } from "./Login";

const HeaderNew = () => {
  return (
    /* navbar */
    <nav className="bg-white ">
      {/*margin: auto(centers the div withn the nav)   */}
      <div className="w-screen mx-auto h-[86px] px-4 ">
        <div className="flex justify-between h-[86px] items-center ">
          <div className="flex space-x-4">
            {/* logo */}
            <div className="group">
              <img src="Logo.svg"></img>
            </div>

            {/* primary nav */}
            <div className=" hidden md:flex items-center space-x-1"></div>
          </div>

          {/* secondary nav */}
          <div className=" hidden md:flex items-center space-x-1">
            <Link href="#">
              <div className="ml-auto mr-4 bg-soilGreen-10 font-bold hover:bg-soilGreen-20 rounded-full pl-4 pr-6 h-8 inline-flex items-center justify-center cursor-pointer ">
                <span> What is Soil?</span>
              </div>
            </Link>
            <div className="flex items-center">
              <p className="font-bold">Menu</p>
              <BurgerMenuNew />
              <Login/>
            </div>
          </div>

          {/* mobile button goes here */}
          <div className="md:hidden flex items-center text-white"></div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNew;
