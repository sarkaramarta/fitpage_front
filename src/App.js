import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './page/Home';
import More from './components/More';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/moreInfo/:id" element={<More/>} />
      </Routes>
    </Router>
  );
}

export default App;
