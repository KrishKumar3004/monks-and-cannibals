import Navbar from "./components/Navbar";
import Game from "./components/Game";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Game />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
