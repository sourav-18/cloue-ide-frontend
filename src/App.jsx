import React, { useEffect } from "react";
import './App.css';
import HomePage from "./components/pages/HomePage.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import CodeInit from "./components/CodeInit.jsx";
import DashboardPage from "./components/pages/DashboardPage.jsx";
import AuthPage from "./components/pages/AuthPage.jsx";
import Notification from "./components/Notification.jsx";
import { profileRequest } from "./services/user.service.js";
import { AllState } from './context/Context';
import constantData from "./utils/constant.utils.js";
import Popup from "./components/Popup.component.jsx";
import CreateProjectPage from "./components/pages/CreateProjectPage.jsx";

const App = () => {
  const { state: { token }, dispatch } = AllState();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      profileRequest().then((data) => {
        if (data.statusCode === 200)
          dispatch({ type: constantData.reducerActionType.userProfile, payload: { userProfile: data.data } });
        else
          localStorage.removeItem("token");
      }).catch((data) => {
        console.log(data)
      })
    } else {
      dispatch({ type: constantData.reducerActionType.userProfile, payload: { userProfile: null } });
    }
  }, [token])

  return <BrowserRouter>
    <Notification />
    {/* <Popup/> */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/code" element={<CodeInit />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/new-project" element={<CreateProjectPage />} />
    </Routes>
  </BrowserRouter>;
};

export default App;
