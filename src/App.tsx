import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Signin from "./pages/signin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
