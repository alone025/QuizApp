import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainP from "./components/mainPage/mainP";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainP />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
