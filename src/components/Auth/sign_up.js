import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../API/auth_api";
import { Link } from "react-router-dom";
import { useAppState } from "../../utils/appState";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
    const { setUser } = useAppState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signup(name, email, password);
      if (response.token) {
        if (response?.user) {
          setUser(response?.user);
        }
        alert("Signup successful. Please login to continue.");
        navigate("/login");
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center py-2">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 border p-8">
          <label>Name</label>
          <input
            className="border border-black"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            className="border border-black"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            className="border border-black"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="border border-black p-2 bg-custom-blue"
          >
            Signup
          </button>
        </div>
        <div>
          <p>
            Already registered? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
