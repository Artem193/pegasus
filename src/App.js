import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

import { StartTopPage } from './components/startTopPage/StartTopPage';
import { Home } from './components/pages/home/Home';
import { AboutUs } from './components/pages/aboutUs/AboutUs';
import { CreditUnion } from './components/pages/creditUnion/CreditUnion';
import { ReverseMortgage } from './components/pages/reverseMortgage/ReverseMortgage';
import { TableReverseMortgage } from './components/pages/tableReverseMortgage/TableReverseMortgage';
import { CalculateReverseMortgage } from './components/pages/calculateReverseMortgage/CalculateReverseMortgage';
import { MortgageComparison } from './components/pages/mortgageComparison/MortgageComparison';
import { BankRefusal } from './components/pages/bankRefusal/BankRefusal';
import { MortgageForRefuseniks } from './components/pages/mortgageForRefuseniks/MortgageForRefuseniks';
import { RefuseniksInIsrael } from './components/pages/refuseniksInIsrael/RefuseniksInIsrael';
import { CalculateMortgage } from './components/pages/calculateMortgage/CalculateMortgage';
import { ExpertsInfo } from './components/pages/expertsInfo/ExpertsInfo';
import { Contacts } from './components/pages/contacts/Contacts';
import { UsingCalculator } from './components/pages/usingCalculator/UsingCalculator';
import { ContentFromUsCalc } from './components/pages/usingCalculator/contentFromUsCalc/ContentFromUsCalc';
import { ExtraCredit } from './components/pages/extraCredit/ExtraCredit';
import { Articles } from './components/pages/home/blocks/articles/Articles.jsx';
import { BombShelterCredit } from './components/pages/bombShelterCredit/BombShelterCredit.jsx';
import { ReasonsForRefusal } from './components/pages/reasonsForRefusal/ReasonsForRefusal.jsx';
import { MortgagesNegativeBDI } from './components/pages/mortgagesNegativeBDI/MortgagesNegativeBDI.jsx';
import { PropertyForCredit } from './components/pages/propertyForCredit/PropertyForCredit.jsx';

import { articlesUsCalc } from './components/pages/usingCalculator/articlesUsCalc.js';
import { articlesExtraCredit } from './components/pages/extraCredit/articlesExtraCredit.js';
import { navUsCalcTitle } from './components/pages/usingCalculator/navUsCalcTitle.js';
import { extraCreditTitle } from './components/pages/extraCredit/extraCreditTitle.js';
import { articlesBombShelterCredit } from './components/pages/bombShelterCredit/articlesBombShelterCredit.js';
import { bombShelterCreditTitle } from './components/pages/bombShelterCredit/bombShelterCreditTitle.js';
import { articlesReasonsForRefusal } from './components/pages/reasonsForRefusal/articlesReasonsForRefusal.js';
import { reasonsForRefusalTitle } from './components/pages/reasonsForRefusal/reasonsForRefusalTitle.js';
import { mortgagesNegativeBDITitle } from './components/pages/mortgagesNegativeBDI/mortgagesNegativeBDITitle.js';
import { articlesMortgagesNegativeBDI } from './components/pages/mortgagesNegativeBDI/articlesMortgagesNegativeBDI.js';
import { propertyForCreditTitle } from './components/pages/propertyForCredit/propertyForCreditTitle.js';
import { articlesPropertyForCredit } from './components/pages/propertyForCredit/articlesPropertyForCredit.js';

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
        <Route path='/bankRefusal' element={<BankRefusal />} />
        <Route path='/mortgageForRefuseniks' element={<MortgageForRefuseniks />} />
        <Route path='/refuseniksInIsrael' element={<RefuseniksInIsrael />} />
        <Route path='/calculateMortgage' element={<CalculateMortgage />} />
        <Route path='/expertsInfo' element={<ExpertsInfo />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route
          path='/usingCalculator'
          element={
            <UsingCalculator
              content={<ContentFromUsCalc />}
              fixedArticles={<Articles articles={articlesUsCalc} articleClass='articleMod'/>}
              titles={navUsCalcTitle}
            />
          }
        />
        <Route
          path='/extraCredit'
          element={
            <UsingCalculator
              content={<ExtraCredit />}
              fixedArticles={<Articles articles={articlesExtraCredit} articleClass='articleMod'/>}
              titles={extraCreditTitle}
            />
          }
        />
        <Route
          path='/bombShelterCredit'
          element={
            <UsingCalculator
              content={<BombShelterCredit />}
              fixedArticles={<Articles articles={articlesBombShelterCredit} articleClass='articleMod'/>}
              titles={bombShelterCreditTitle}
            />
          }
        />
        <Route
          path='/reasonsForRefusal'
          element={
            <UsingCalculator
              content={<ReasonsForRefusal />}
              fixedArticles={<Articles articles={articlesReasonsForRefusal} articleClass='articleMod'/>}
              titles={reasonsForRefusalTitle}
            />
          }
        />
        <Route
          path='/mortgagesNegativeBDI'
          element={
            <UsingCalculator
              content={<MortgagesNegativeBDI />}
              fixedArticles={<Articles articles={articlesMortgagesNegativeBDI} articleClass='articleMod'/>}
              titles={mortgagesNegativeBDITitle}
            />
          }
        />
        <Route
          path='/propertyForCredit'
          element={
            <UsingCalculator
              content={<PropertyForCredit />}
              fixedArticles={<Articles articles={articlesPropertyForCredit} articleClass='articleMod'/>}
              titles={propertyForCreditTitle}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
