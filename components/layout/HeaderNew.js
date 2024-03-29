import React from "react";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import BurgerMenuNew from "./BurgerMenuNew";
import { Login } from "./Login";

const HeaderNew = () => {
  return (
    /* navbar */
    <>
      <nav className="fixed w-full bg-white left-0 top-0 z-50">
        {/*margin: auto(centers the div withn the nav)   */}
        <div className="w-full mx-auto h-[86px] px-20 ">
          <div className="flex justify-between h-[86px] items-center ">
            <div className="flex space-x-4">
              {/* logo */}
              <div className="group">
                <img src="/Logo.svg"></img>
              </div>

              {/* primary nav */}
              <div className=" hidden md:flex items-center space-x-1"></div>
            </div>

            {/* secondary nav */}
            <div className=" hidden md:flex items-center ">
              {/* <Link href="#">
              <div className="ml-auto mr-4 rounded-full pl-4 pr-6 h-8 inline-flex items-center justify-center cursor-pointer ">
                <span className="text-[24px] font-Inter"> What is Eden?</span>
              </div>
            </Link> */}
              <div className="flex items-center space-x-8">
                {/* <div className="flex items-center">
                <p className=" font-Inter text-[24px]">Menu</p>
                <BurgerMenuNew className="ml-10" />
              </div> */}
                <Login />
              </div>
            </div>

            {/* mobile button goes here */}
            <div className="md:hidden flex items-center text-white"></div>
          </div>
        </div>
      </nav>
      <div className="w-full pt-[100px]"></div>
    </>
  );
};

export default HeaderNew;
