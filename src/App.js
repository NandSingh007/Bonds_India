import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageFrist from "./Pages/PageFrist";
import PageSecond from "./Pages/PageSecond";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PageFrist />} />
          <Route path="/singin" element={<PageSecond />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
