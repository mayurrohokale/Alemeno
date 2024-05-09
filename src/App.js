import Home from './components/Home/Home';
import Layout from './components/Layout';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Course from './components/courceinfo/Course.info';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course/:id" element={<Course/>}/>
          </Routes>
          

        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
