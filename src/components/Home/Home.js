import courseModel from "../Data/courceModel";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="grid grid-flow-row grid-cols-4  gap-4 items-center justify-center">
        {courseModel.map((course) => (
          
          <Link to={`/course/${course.id}`}
            key={course.id}
            className=" h-full px-5 bg-black bg-opacity-10 hover:bg-opacity-20 py-2 border border-black hover:border-custom-blue hover:shadow-lg"
          >
            <h1 className="font-bold">{course.name}</h1>
            <div className="flex items-center justify-center">
              <img
                src={course.thumbnail}
                alt="thumbnail"
                className="w-[200px]"
              />
            </div>
            <div className="flex flex-col gap-1 items-start justify-start text-start">
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

              {/* <p>
              <strong>Prerequisites:</strong> {course.prerequisites.join(", ")}
            </p>
            <h2>Syllabus</h2>
            <ul>
              {course.syllabus.map((item) => (
                <li key={item.week}>
                  <strong>Week {item.week}:</strong> {item.topic} -{" "}
                  {item.content}
                </li>
              ))}
            </ul> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
