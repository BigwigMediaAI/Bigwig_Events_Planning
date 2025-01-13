import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import BigFolio from './components/BigFolio';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the landing page */}
        <Route path="/" element={<Landing />} />

        {/* Route for the full-page image */}
        <Route path="/folio" element={<BigFolio />} />
      </Routes>
    </Router>
  );
}

export default App;
