export const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8000";

function getAuthToken() {
  return localStorage.getItem("token") || null;
}

export function updateHeaders(headers) {
  const authToken = getAuthToken();
  if (authToken) {
    return {
      ...headers,
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${authToken}`,
    };
  } else {
    return {
      ...headers,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }
}
