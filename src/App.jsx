import { useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Container from "./Component/Container/Container";
import { Context } from "./Context";
import Layout from "./Component/LayoutComponent/Layout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Application from "./Pages/Applications/UserApplications/Application";
import Teams from "./Pages/Teams/Teams";
import Chats from "./Pages/Chats/Chats";
import Settings from "./Pages/Settings/Settings";
import Faq from "./Pages/Faq/Faq";
import Models from "./Pages/Models/Models";
import Logout from "./Pages/Logout/Logout";

import CustomerPro from "./Pages/CustomerProfile/CustomerPro";

import SignUp from "./OnboardingPages/SignUp";
import PersonalDetails from "./OnboardingPages/PersonalDetails";
import LandingPage from "./OnboardingPages/LandingPage";
import AddTeam from "./OnboardingPages/AddTeam";
import UploadLogo from "./OnboardingPages/UploadLogo";
import LoginForm from "./OnboardingPages/LoginForm";
import LoginFormTwo from "./OnboardingPages/LoginFormTwo";
import ForgotPassword from "./OnboardingPages/ForgotPassword";
import ResetPassword from "./OnboardingPages/ResetPassword";
import ResetPasswordSent from "./OnboardingPages/ResetPasswordSent";
import PasswordResetSuccess from "./OnboardingPages/PasswordResetSuccess";
import VerifyEmail from "./OnboardingPages/VerifyEmail";
import VerificationSuccess from "./OnboardingPages/VerificationSuccess";
import ModelTop from "./Pages/Models/ModelTop";

function App() {
  const [theme, setTheme] = useState("light");
  const [show, setShow] = useState(false);
  const visiblePassword = () => setShow(!show);

  // const changeTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };

  return (
    <Context.Provider value={{ visiblePassword, show, setTheme }}>
      <div className={`${theme} application`}>
        <Container>
          {/* <button className="btn" onClick={changeTheme}>
            theme
          </button> */}

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/pdetails" element={<PersonalDetails />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/logTwo" element={<LoginFormTwo />} />
            <Route path="/add" element={<AddTeam />} />
            <Route path="/up" element={<UploadLogo />} />
            <Route path="/resetPasswordSent" element={<ResetPasswordSent />} />
            <Route
              path="/passwordResetSuccess"
              element={<PasswordResetSuccess />}
            />
            <Route path="/verify" element={<VerifyEmail />} />
            <Route path="/model" element={<Models />} />

            <Route path="/verifySuccess" element={<VerificationSuccess />} />
            <Route path="/models" element={<Models />} />

            <Route path="/layout" element={<Layout />}>
              <Route path="/layout/" element={<Dashboard />} />
              <Route path="/layout/dashboard" element={<Dashboard />} />

              <Route path="/layout/application" element={<Application />} />

              <Route
                path="/layout/application/customerprofile"
                element={<CustomerPro />}
              />

              <Route path="/layout/teams" element={<Teams />} />
              <Route path="/models" element={<ModelTop />} /> 

              <Route path="/layout/settings" element={<Settings />} />
              <Route path="/layout/chats" element={<Chats />} />
              <Route path="/layout/faq" element={<Faq />} />
              <Route path="/layout/logout" element={<Logout />} />

            </Route>
          </Routes>
        </Container>
      </div>
    </Context.Provider>
  );
}

export default App;
