import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import TimeDate from './Home/TimeDate';
import User from './Home/User';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timedate" element={<TimeDate />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;