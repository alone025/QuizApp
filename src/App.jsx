import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainP from "./components/mainPage/mainP";
import OffQuiz from "./components/PageQuiz/OffQuiz";
import Result from "./components/total/total";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainP />} />
          <Route path="/quiztest1" element={<OffQuiz />} />
          <Route path="/results=10" element={<Result />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
