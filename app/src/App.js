import './App.css'
import HomePage from "./containers/HomePage/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from './containers/SignUpPage/SignUpPage';
import LoginPage from './containers/LoginPage/LoginPage';
import NotFound from './components/NotFound/NotFound';
import Dashboard from './containers/Dashboard/Dashboard';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App

