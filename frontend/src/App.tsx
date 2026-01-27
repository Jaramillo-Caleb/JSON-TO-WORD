import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { DonationPage } from './pages/DonationPage'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donar" element={<DonationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;