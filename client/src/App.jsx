import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/auth/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
