
import { useLocation } from 'react-router-dom';
export default function Course(){

    const location = useLocation();
  const currentPath = location.pathname;

  const courseId = currentPath.split('/').at(2);

   
    return(
        <div>Inside Course {courseId}</div>
    )
}