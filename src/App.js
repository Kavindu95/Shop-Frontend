import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import POSPage from './pages/POSPage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import InsertProduct from './pages/InsertProduct';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/pos" element={<POSPage/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<SignIn/>} />
      <Route path="/product" element={<InsertProduct/>} />

    </Routes>
  </Router>
  );
}

export default App;
