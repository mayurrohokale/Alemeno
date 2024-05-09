import React from "react";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const MENU_ITEMS = [
  { title: "Home", path: "/" },
  {
    title: "Cources",
    path: "course",
  },
  {
    title:"Dashboard",
    path: "dashboard",
  }
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="pb-2">
      <div className=" relative ">
        <header
          className=" border-b border-black  text-black md:text-black px-2 md:px-10 xl:px-5 z-10  py-4"
          id="home"
        >
          <div className="flex flex-row justify-between w-full items-center">
            <div className="logo text-lg md:text-2xl font-bold">
              {/* <Link to="/" className="cursor-pointer">
                <img
                  src="./images/logo.png"
                  alt="logo"
                  className=" w-28 md:w-32 p-2"
                />
              </Link> */}
              <Link to="/">Alemeno</Link>
            </div>
{/* 
            <nav className="lg:flex hidden">
              <ul className="flex gap-10 text-lg items-start font-inter">
                {MENU_ITEMS.map(({ path, title }) => (
                  <li
                    className=" transform hover:scale-110 hover:underline hover:text-custom-blue"
                    key={title}
                  >
                    {title}
                  </li>
                ))}
              </ul>
            </nav> */}

            <div className="hidden  md:flex text-[35px] shadow-xl rounded-[20px]">
              <div>
                <CiUser />
              </div>
            </div>

            <div
              className="lg:hidden cursor-pointer text-lg text-custom-blue flex items-center"
              onClick={toggleMenu}
            >
              <MdMenu className="mr-1 " /> MENU
            </div>
          </div>
        </header>
      </div>
      <div className=" absolute top-17 right-3 sm:right-5 z-30">
        {menuOpen && (
          <nav className="lg:hidden flex flex-col items-start  bg-white border shadow-lg p-3 w-32 ">
            <ul className="flex flex-col gap-3 items-start text-sm font-semibold ">
              {MENU_ITEMS.map(({ path, title }) => (
                <li
                  className=" hover:underline hover:text-custom-blue"
                  key={title}
                >
                  {title}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
      <hr className="mt-1" />
    </div>
  );
}
