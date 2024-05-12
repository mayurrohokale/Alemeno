import Header from "./Home/Header";
import { getProfile } from "../API/user";
import {useEffect, useState} from "react"
import AppStateContext from "../utils/appState";
import {useLocation} from "react-router-dom"
export default function Layout({ children }) {
   const [user, setUser] = useState(null);
   const [courses, setCourses] = useState([]);
   const [allCourses, setAllCourses] = useState([])
   const [enrolledCourses, setEnrolledCourses] = useState([])

   const router = useLocation()

   const pathname = router.pathname


   useEffect(() => {
      const fetchProfile = async () => {
        const userInfo = await getProfile();
        setUser(userInfo);
      };
      fetchProfile();
    }, [])

    useEffect(() => {
      if (user && (pathname === "/login" || pathname === "/signup")) {
        window.location.href = "/"
      }
      if (!user && pathname === "/dashboard" ) {
        window.location.href = "/login"
      }
    }, [user, pathname])

    const appValues = {
      user,
      courses,
      allCourses,
      enrolledCourses,
      setUser,
      setCourses,
      setAllCourses,
      setEnrolledCourses
    }

  
    return (
      <AppStateContext.Provider value={appValues}>
      <div className=" max-w-[1536px] flex justify-center flex-col px-5 md:px-10 ">
          <Header />
          <div>{children}</div>
      </div>
      </AppStateContext.Provider>
    );
  }