import { useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Container from "./Component/Container/Container";
import { Context } from "./Context";
// import PersonalDetailForm from "./Onboarding/PersonalDetailForm/PersonalDetailForm";
// import LandingPage from "./Onboarding/LandingPage/LandingPage";
// import ForgotPassword from "./Onboarding/ForgotPassword/ForgotPassword";
// import AddTeamMember from "./Onboarding/AddTeamMember/AddTeamMember";
// import UploadLogo from "./Onboarding/CompanyLogoUpload/UploadLogo";
// import LoginPage from "./Onboarding/LoginPage/LoginPage";
// import { Routes } from "react-router-dom";
import Layout from "./Component/LayoutComponent/Layout";
import Application from "./Pages/ApplicationPage/Application";
import Teams from "./Pages/Teams/Teams";
// import Signup from "./Onboarding/SignUpPage/Signup";
// import ResetPasswordSent from "./Onboarding/ResetPasswordSent/ResetPasswordSent";
// import ResetPasswordForm from "./Onboarding/ResetPasswordForm/ResetPasswordForm";
// import PasswordResetSuccess from "./Onboarding/PasswordResetSuccesful/PasswordResetSuccess";
// import VerificationSuccessful from "./Onboarding/VerificationSuccessful/VerificationSuccessful";
// import VerifyEmail from "./Onboarding/VerifyEmail/VerifyEmail";

function App() {
  const [theme, setTheme] = useState("light");
  const [show, setShow] = useState(false);
  const visiblePassword = () => setShow(!show);

  // const changeTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };

  return (
    <Context.Provider value={{ visiblePassword, show }}>
      <div className={`${theme} application`}>
        <Container>
          {/* <button className="btn" onClick={changeTheme}>
            theme
          </button> */}
          {/* <Route path="/" element= {}/> */}
          {/* <Route path="/singup" element= {}/> */}
          {/* <Route path="/login" element= {}/> */}
          {/* <Route path="/addteam" element= {}/> */}
          {/* <Route path="/pdetails" element= {}/> */}
          {/* <Route path="/upload" element= {}/> */}
          {/* <Route path="/pdetails" element= {}/> */}
          {/* <Route path="/forgotpassword" element= {}/> */}
          {/* <Route path="/resetpassword" element= {}/> */}
          {/* <Route path="/pResetSuccessful" element= {}/> */}
          {/* <Route path="/verificationSuccessful" element= {}/> */}
          {/* <Route path="/verifyEmail" element= {}/> */}

          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/application" element={<Application />} />
              <Route path="/teams" element={<Teams />} />
            </Route>
          </Routes>
          {/* <Layout /> */}
          {/* <UploadLogo /> */}

          {/* <Signup /> */}
          {/* <LoginPage /> */}
          {/* <AddTeamMember /> */}
          {/* <PersonalDetailForm /> */}
          {/* <PasswordResetSuccess /> */}
          {/* <ResetPasswordForm /> */}
        </Container>
      </div>
    </Context.Provider>
  );
}

export default App;
