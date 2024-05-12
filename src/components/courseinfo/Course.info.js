// import courseModel from "../Data/courceModel";
import { useLocation } from "react-router-dom";
import { getCourseById , checkIfEnrolled} from "../../API/courses";
import { useEffect, useState } from "react";
import {updateCourseById} from "../../API/courses";
import { useAppState } from "../../utils/appState";
export default function Course() {
  const location = useLocation();
  const currentPath = location.pathname;
  const courseId = currentPath.split("/").at(2); // Parse courseId to integer
  const [course, setCourse] = useState(null);
  const [status, setStatus] = useState("");
  const {user} = useAppState();

  useEffect(()=> {
    if (!courseId) {
      return;
    }
    getCourseById(courseId)
    .then((course) => setCourse(course))
    .catch((error) => console.error(error));

    if (!user) {
      return;
    }
    checkIfEnrolled(courseId)
    .then((enrolled) => {
      console.log("enroll info",enrolled)
      setStatus(enrolled?.status)
    })
    .catch((error) => console.error(error));
  
  }, [courseId, user]);





  async function handleEnroll(status = "enrolled") {
    try {
      const updatedCourse = await updateCourseById(courseId, {
        status: status,
      });
      if (!updatedCourse) {
        throw new Error("Failed to enroll in course");
      }
      setStatus(updatedCourse?.status);
    } catch (error) {
      console.error(error);
    }
  }

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="h-screen flex items-center justify-center">
      {course && (
        <div className="bg-gray-200 p-8 rounded-lg shadow-lg max-w-md w-full text-start">
          <h1 className="font-bold text-2xl">{course.name}</h1>
          <div className="flex items-center justify-center mt-4">
            <img src={course.thumbnail} alt="thumbnail" className="w-[200px]" />
          </div>
          <div className="mt-4">
            <p>
              <strong>Instructor:</strong> {course.instructor}
            </p>
            <p>
              <strong>Description:</strong> {course.description}
            </p>
            <p>
              <strong>Enrollment Status:</strong> {course.enrollmentStatus}
            </p>
            <p>
              <strong>Duration:</strong> {course.duration}
            </p>
            <p>
              <strong>Schedule:</strong> {course.schedule}
            </p>
            <p>
              <strong>Location:</strong> {course.location}
            </p>
            <p>
              <strong>Prerequisites:</strong>{" "}
              {course?.prerequisites?.join(", ")}
            </p>
            <h2 className="mt-2">Syllabus</h2>
            <ul>
              {course?.syllabus?.map((item) => (
                <li key={item.week}>
                  <strong>Week {item.week}:</strong> {item.topic} -{" "}
                  {item.content}
                </li>
              ))}
            </ul>
          </div>
          {user && (<div>
          {status === "unenrolled" || !status ? (
            <button
              className="rounded text-white font-bold bg-custom-blue p-2 items-end justify-end cursor-pointer"
              onClick={async () => await handleEnroll("enrolled")}
              disabled={status === "enrolled"}
            >
              Enroll Now
            </button>
          ) :
          status === "enrolled" ? (
            <div>
              <p className="text-green-500">
                You are already enrolled in this course
              </p>
              <button
                className="rounded text-white font-bold bg-custom-blue p-2 items-end justify-end cursor-pointer"
                disabled={!status === "enrolled"}
                onClick={async () => await handleEnroll("unenrolled")}
              >
                Unenroll course
              </button>
            </div>
          ): status === "completed" ? <p className="text-green-500">You have completed this course</p>:null}
          </div>)}
        </div>
      )}
    </div>
  );
}
