import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';

import { Home } from './components/pages/home/Home';
import { About } from './components/pages/about/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
