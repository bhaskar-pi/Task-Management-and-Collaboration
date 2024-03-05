import './App.css'
import HomePage from "./containers/HomePage/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from './containers/SignUpPage/SignUpPage';
import LoginPage from './containers/LoginPage/LoginPage';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App

