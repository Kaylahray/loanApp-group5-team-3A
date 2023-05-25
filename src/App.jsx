/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
import { useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Container from "./Component/Container/Container
import { Context } from "./Context";
import UploadLogo from "./Onboarding/CompanyLogoUpload/UploadLogo";

import LoginPage from "./Onboarding/LoginPage/LoginPage";
//import Signup from "./Onboarding/SignUpPage/Signup";
import ResetPasswordSent from "./Onboarding/ResetPasswordSent/ResetPasswordSent";
import ResetPasswordForm from "./Onboarding/ResetPasswordForm/ResetPasswordForm";

import Signup from "./Onboarding/SignUpPage/Signup";

import { Context } from "./Context";
import PasswordResetSuccess from "./Onboarding/PasswordResetSuccesful/PasswordResetSuccess";
import VerificationSuccessful from "./Onboarding/VerificationSuccessful/VerificationSuccessful";
import VerifyEmail from "./Onboarding/VerifyEmail/VerifyEmail";


function App() {
  const [theme, setTheme] = useState("light");
  const [show, setShow] = useState(false);
  const visiblePassword = () => setShow(!show);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Context.Provider value={{ visiblePassword, show }}>
      <div className={`${theme} application`}>
        <Container>

          <button className="btn" onClick={changeTheme}>

          theme
          </button>

          {/* <Routes>
          <Route path="/" element={<UploadLogo />} />



   </Routes>  */}

          <UploadLogo />
          {/*<Signup /> */}
          <LoginPage /> 
   </Routes>

          {/* <AddTeamMember /> */}
          {/* <PersonalDetailForm /> */}
          {/*<ResetPasswordForm/> */}
          <ResetPasswor
        </Container>
      </div>
    </Context.Provider>
  );
}

export default App;
