import {  BASE_URL } from "./api_fn";

export async function login(email, password) {
  return await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error("Login failed");
      }
      const data = await response.json();
      localStorage.setItem("token", data?.token);
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export async function signup(name, email, password) {
  return await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error("Signup failed");
      }
      const data = await response.json();
      localStorage.setItem("token", data?.token);
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}
