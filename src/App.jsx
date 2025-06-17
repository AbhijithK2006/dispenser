import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import TimeDate from './Home/TimeDate';
import User from './Home/User';
import Medtime from './Medicine.jsx/Medtime';
import Medinfo from './Medicine.jsx/Medinfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timedate" element={<TimeDate />} />
        <Route path="/user" element={<User />} />
        <Route path="/medtime" element={<Medtime />} />
        <Route path="/medinfo" element={<Medinfo />} />
      </Routes>
    </Router>
  );
}

export default App;