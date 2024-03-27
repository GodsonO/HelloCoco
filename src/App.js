import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import './style.scss'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
   

        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Route>

      </Routes>
    </Router>
  </div>
  );
}

export default App;
