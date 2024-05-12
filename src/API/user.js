import { updateHeaders, BASE_URL } from "./api_fn";


export function getProfile() {
  const header = updateHeaders({});
  const token = localStorage.getItem("token");

  try {
    if (!token) {
      return null;
    }
    return fetch(`${BASE_URL}/profile`, {
      headers: header,
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return null;
    });
  } catch (error) {
    console.error(error);
    return null
  }
}