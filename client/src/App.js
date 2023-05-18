import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AddUser from "./component/Adduser/AddUser";
import Users from "./component/UserList/Users";
import DetailPage from "./pages/DtailPage";
import ProtectedRoute from "./component/ProtectedRouting.js/ProtectedRoute";
import Public from "./component/ProtectedRouting.js/Public";



function App() {
  return (
    <Routes>
      <Route path='/' element={<ProtectedRoute> <Home /></ProtectedRoute>} />
      <Route path='/login' element={<Public><Login /> </Public>} />
      <Route path='/register' element={<ProtectedRoute> <Register /> </ProtectedRoute>} />
      <Route path='/add-user' element={<ProtectedRoute><AddUser /></ProtectedRoute>} />
      <Route path='/all-users' element={<ProtectedRoute><Users /> </ProtectedRoute>} />
      <Route path="/detailed-page" element={<ProtectedRoute> <DetailPage /></ProtectedRoute>} />
    </Routes>
  );
}

export default App;
