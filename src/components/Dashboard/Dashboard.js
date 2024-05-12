import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useAppState } from "../../utils/appState";
// import courseModel from "../Data/courceModel";
import { getEnrolledCourses, updateCourseById } from "../../API/courses";

const Dashboard = () => {
  // const [enrolledCourses, setEnrolledCourses] = useState([]);
    const {user, enrolledCourses, setEnrolledCourses} = useAppState();
  
  // const enrollCourse = (courseId) => {
  //   const course = courseModel.find((course) => course.id === courseId);
  //   if (course && !enrolledCourses.includes(course)) {
  //     setEnrolledCourses([...enrolledCourses, course]);
  //   }
  // };

  // const markAsCompleted = (courseId) => {
  //   const updatedCourses = enrolledCourses.map((course) =>
  //     course.id === courseId ? { ...course, completed: true } : course
  //   );
  //   setEnrolledCourses(updatedCourses);
  // };

  useEffect(() => {
    const fetchCourses = async () => {
      if (!user) return;
      const courses = await getEnrolledCourses();
      if (setEnrolledCourses) setEnrolledCourses(courses);
    };
    fetchCourses();
  }, [user, setEnrolledCourses]);

  function markAsCompleted(courseId) {
    if (!user) return;
    const updatedCourses = enrolledCourses.map((course) =>
      course.id === courseId ? { ...course, status: "completed" } : course
    );
    updateCourseById(courseId, { status: "completed" }).then((response) => {
      if (response.status === 200) {
        console.log("Course marked as completed.");
        setEnrolledCourses(updatedCourses);
      } else {
        console.log("Error marking course as completed.");
      }
    });
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">My Courses</h1>
      {enrolledCourses?.length === 0 && <p>No enrolled courses.</p>}
      {enrolledCourses?.map((course_doc) => (
        <div key={course_doc?.course?._id} className="my-4 p-4 border rounded">
          <h2 className="text-xl font-bold">{course_doc?.course?.name}</h2>
          <p>Instructor: {course_doc?.course?.instructor}</p>
          <p>
            <strong>Enrollment Status:</strong>{" "}
            {course_doc?.status === "completed" ? "Completed" : "In Progress"}
          </p>
          {course_doc?.status !== "completed" && (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
              onClick={() => markAsCompleted(course_doc?.course?._id)}
            >
              Mark as Completed
            </button>
          )}
        </div>
      ))}
      <h2 className="text-2xl font-bold my-4">Available Courses</h2>
      {/* {courseModel.map((course) => (
        <div key={course.id} className="my-4 p-4 border rounded">
          <h2 className="text-xl font-bold">{course.name}</h2>
          <p>Instructor: {course.instructor}</p>
          <button
            // onClick={() => enrollCourse(course.id)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          >
            Enroll Now
          </button>
        </div>
      ))} */}
      <div className="my-4">
        <Link to="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
