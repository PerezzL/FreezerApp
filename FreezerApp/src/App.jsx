import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Data from './views/Data';
import HomePage from './views/HomePage';
import Login from './views/Login';
import ManageEmp from './views/ManageEmp';
import NewEmp from './views/NewEmp';
import './global.css';
import { Toaster } from "shadcn-ui/toaster"


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/data" element={<Data />} />
          <Route path="/login" element={<Login />} />
          <Route path="/manage-employees" element={<ManageEmp />} />
          <Route path="/new-employee" element={<NewEmp />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  )
}

export default App
