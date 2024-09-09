import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';

import { Home } from './components/pages/home/Home';
import { AboutUs } from './components/pages/aboutUs/AboutUs';

const basename = '/pegasus';

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
