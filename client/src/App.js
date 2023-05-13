import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AddUser from "./component/Adduser/AddUser";
import Users from "./component/UserList/Users";
import DetailPage from "./pages/DtailPage";



function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/add-user' element={<AddUser />} />
      <Route path='/all-users' element={<Users />} />
      <Route path="/detailed-page" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
