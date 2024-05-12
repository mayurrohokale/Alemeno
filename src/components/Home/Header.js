import React from "react";
import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoIosLogOut, IoMdMenu } from "react-icons/io";
import {useAppState} from "../../utils/appState"

const MENU_ITEMS = [
  { title: "Home", path: "/" },
 
  {
    title:"Dashboard",
    path: "/dashboard",
  }
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const {user, setUser, setCourses, courses, allCourses, setEnrolledCourses} = useAppState()



  function handleSearch(e) {
    e.preventDefault();
    const search = e.target.value?.toLowerCase().trim();
    const filteredCourses = allCourses.filter((course) =>
      course?.name?.toLowerCase().includes(search)
    );
    setCourses(!search?allCourses:filteredCourses);
  }


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  function handleLogout(){
    localStorage.removeItem("token")
    setUser(null)
    setEnrolledCourses([])
  }

  return (
    <div className="pb-2">
      <div className=" relative ">
        <header
          className=" border-b border-black  text-black md:text-black px-2 lg:px-10 xl:px-5 z-10  py-4"
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

            <nav className="md:flex hidden gap-10">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="border border-black rounded-lg p-1 px-2"
                  onChange={handleSearch}
                />
                {/* <button className="bg-custom-blue text-white hover:text-black border border-custom-blue hover:border-black hover:bg-transparent  rounded-lg p-1 px-2">
                  Search
                </button> */}
              </div>

              <ul className="flex gap-10 text-lg items-start font-inter cursor-pointer">
                {MENU_ITEMS.map(({ path, title }) => (
                  <li
                    className=" transform hover:scale-110 hover:underline hover:text-custom-blue"
                    key={title}
                  >
                    <Link to={!user && path === "/dashboard" ? "/login" : path}>
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className=" flex flex-row gap-2 items-center">
              <div className="flex text-[35px] shadow-xl rounded-[20px]">
                <div className="flex flex-row gap-2">
                  {!user && (
                    <Link to="/login">
                      <CiUser className="w-10" />
                    </Link>
                  )}
                  {user && <IoIosLogOut onClick={handleLogout} />}
                </div>
              </div>

              <div
                className="md:hidden cursor-pointer text-[35px]"
                onClick={toggleMenu}
              >
                <IoMdMenu className="w-10" />
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className=" absolute top-17 right-3 sm:right-5 z-30">
        {menuOpen && (
          <nav className="lg:hidden flex flex-col items-start  bg-white border shadow-lg p-3 w-32 ">
            <ul className="flex flex-col gap-3 items-start text-sm font-semibold ">
              {MENU_ITEMS?.map(({ path, title }) => (
                <li
                  className=" hover:underline hover:text-custom-blue"
                  key={title}
                >
                  <Link to={!user && path === "/dashboard" ? "/login" : path}>
                    {title}
                  </Link>
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
