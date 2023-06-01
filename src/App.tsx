import React from 'react';
import './App.css';
import 'antd/dist/reset.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './Authen/Login';
import Sigup from './Authen/Sigup';
import FogotPassword from './Authen/FogotPassword';
import ChangePassword from './Authen/ChangePassword';
import Home from './Home/Home';
import ProfileUser from './Profile/ProfileUser';
import ListTask from './Home/ListTask';
function App() {
  return (
      <BrowserRouter>
          <Routes>
                <Route element={<Login></Login>} path='/'></Route>
                <Route element={<Sigup></Sigup>} path='/sigup'></Route>
                <Route element={<FogotPassword></FogotPassword>} path='/forgotpassword'></Route>
                <Route element={<ChangePassword></ChangePassword>} path='/changepassword'></Route>
          </Routes>
          <Routes>
              <Route element={<Home></Home>} path='/h/'>
                    <Route index element={<ListTask></ListTask>} path='all'></Route>
                    <Route element={<ProfileUser></ProfileUser>} path='profile'></Route>
                    <Route element={<ProfileUser></ProfileUser>} path='dashboard'></Route>
              </Route>
          </Routes>

      </BrowserRouter>
  );
}

export default App;
