import Home from './components/Home/Home';
import Layout from './components/Layout';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Course from './components/courseinfo/Course.info';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Auth/Login';
import Signup from './components/Auth/sign_up';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course/:id" element={<Course/>}/>
            <Route path="/student/:id" element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
          

        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
