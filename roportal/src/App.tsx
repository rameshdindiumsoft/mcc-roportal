import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';
import NotFound from './Page/Common/NotFound';
import Dashboard from './Page/Dashboard';
import Mainlayout from './Page/Layout/Mainlayout';

function App() {
  return (
      <Router>
          <Routes>
            <Route element={<Mainlayout><Outlet /></Mainlayout>}>
              <Route path="/" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
      </Router>
  );
}

export default App;
