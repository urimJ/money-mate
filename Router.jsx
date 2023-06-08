import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './src/Landing';
import Guide from './src/Guide';
import Accounts from './src/Accounts';
import Calendar from './src/Calendar';
import Statistics from './src/Statistics';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/accounts/:username" element={<Accounts />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
