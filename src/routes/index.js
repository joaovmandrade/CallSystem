import { Routes, Route } from 'react-router-dom';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default RoutesApp;