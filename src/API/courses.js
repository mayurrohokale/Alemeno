import { updateHeaders, BASE_URL } from './api_fn'

export function getCourse(){
    const header = updateHeaders({})
    try {
        return fetch(`${BASE_URL}/courses`, {
            headers: header
        })
        .then((response) => response.json())
    } catch (error) {
        console.error(error)
    }
}



export function getEnrolledCourses() {
  const header = updateHeaders({});
  try {
    return fetch(`${BASE_URL}/courses/enrolled`, {
      headers: header,
    }).then((response) => response.json());
  } catch (error) {
    console.error(error);
  }
}

export function getCourseById(id){
    const header = updateHeaders({})
    try {
        return fetch(`${BASE_URL}/courses/${id}`, 
        {
            headers: header
        }
        )
        .then((response) => response.json())
    } catch (error) {
        console.error(error)
    }
}


export function updateCourseById(id, status){
    const header = updateHeaders({})
    console.log(status)
    try {
        return fetch(`${BASE_URL}/courses/${id}/update-status`, 
        {
            method:"POST",
            headers: header,
            body: JSON.stringify(status)
        }
        )
        .then((response) => response.json())
    } catch (error) {
        console.error(error)
    }
}



export function checkIfEnrolled(id) {
  const header = updateHeaders({});
  try {
    return fetch(`${BASE_URL}/courses/${id}/status`, {
      headers: header,
    }).then((response) => {
        if (response.status !==200) {
            return false;
        }
        return response.json();
        
    });
  } catch (error) {
    console.error(error);
  }
}