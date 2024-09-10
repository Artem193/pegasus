import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';

import { StartTopPage } from './components/startTopPage/StartTopPage';
import { Home } from './components/pages/home/Home';
import { AboutUs } from './components/pages/aboutUs/AboutUs';
import { CreditUnion } from './components/pages/creditUnion/CreditUnion';

const basename = '/pegasus';

function App() {
  return (
    <Router basename={basename}>
      <StartTopPage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/creditUnion" element={<CreditUnion />} />
      </Routes>
    </Router>
  );
}

export default App;
