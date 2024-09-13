import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';

import { StartTopPage } from './components/startTopPage/StartTopPage';
import { Home } from './components/pages/home/Home';
import { AboutUs } from './components/pages/aboutUs/AboutUs';
import { CreditUnion } from './components/pages/creditUnion/CreditUnion';
import { ReverseMortgage } from './components/pages/reverseMortgage/ReverseMortgage';
import { TableReverseMortgage } from './components/pages/tableReverseMortgage/TableReverseMortgage';
import { CalculateReverseMortgage } from './components/pages/calculateReverseMortgage/CalculateReverseMortgage';
import { MortgageComparison } from './components/pages/mortgageComparison/MortgageComparison';

const basename = '/pegasus';

function App() {
  return (
    <Router basename={basename}>
      <StartTopPage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/creditUnion" element={<CreditUnion />} />
        <Route path="/reverseMortgage" element={<ReverseMortgage />} />
        <Route path='/tableReverseMortgage' element={<TableReverseMortgage />} />
        <Route path='/calculateReverseMortgage' element={<CalculateReverseMortgage />} />
        <Route path='/mortgageComparison' element={<MortgageComparison />} />
      </Routes>
    </Router>
  );
}

export default App;
