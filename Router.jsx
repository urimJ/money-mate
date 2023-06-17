import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './src/Landing';
import Guide from './src/Guide';
import Accounts from './src/Accounts';
import Calendar from './src/components/Calendar/Calendar';
import Statistics from './src/Statistics';
import NotFound from './src/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/accounts/:username" element={<Accounts />} />
        {/* <Route path="/calendar" element={<Calendar />} />
        <Route path="/statisitcs" element={<Statistics />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
