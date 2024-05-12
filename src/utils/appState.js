import React from "react";

const defaultValue = {
    user: null,
    courses: [], // search results
    allCourses: [],
    enrolledCourses: [],
    setUser: () => {},
    setCourses: () => {},
    setAllCourses: () => {},
    setEnrolledCourses: () => {},
};

const AppStateContext = React.createContext(defaultValue);

export const useAppState = () => React.useContext(AppStateContext);

export default AppStateContext;
