import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';

import About from "./views/About";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Work from "./views/Work";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/projects"
            element={<Projects />}
          />
          <Route
            path="/work"
            element={<Work />}
          />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
