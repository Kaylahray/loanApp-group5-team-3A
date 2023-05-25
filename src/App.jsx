import { useState } from "react";
import "./App.scss";
// import { Routes, Route } from "react-router-dom";

import Container from "./Component/Container/Container"
import { Context } from "./Context";
import AddTeamMember from "./Onboarding/AddTeamMember/AddTeamMember";
// import LoginPage from "./Onboarding/LoginPage/LoginPage";
//import Signup from "./Onboarding/SignUpPage/Signup";
// import ResetPasswordSent from "./Onboarding/ResetPasswordSent/ResetPasswordSent";
// import ResetPasswordForm from "./Onboarding/ResetPasswordForm/ResetPasswordForm";
// import { Context } from "./Context";
// import PasswordResetSuccess from "./Onboarding/PasswordResetSuccesful/PasswordResetSuccess";
// import VerificationSuccessful from "./Onboarding/VerificationSuccessful/VerificationSuccessful";
// import VerifyEmail from "./Onboarding/VerifyEmail/VerifyEmail";


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
          </button>

          {/* <Routes>
     <Route path="/" element ={}/>
     <Route path="/" element ={}/>
     <Route path="/" element ={}/>
     <Route path="/" element ={}/>
     <Route path="/" element ={}/>
     <Route path="/" element ={}/>
     <Route path="/" element ={}/>
     <Route path="/" element ={}/>
     <Route path="/" element ={}/>
     <Route path="/" element ={}/>
     <Route path="/" element ={}/>



   </Routes>  
          <AddTeamMember />
          {/*<Signup /> */}
          {/* <LoginPage />  */}
   
          <AddTeamMember /> 
          {/* <PersonalDetailForm />
          <ResetPasswordForm/>
          <ResetPasswordSent/> */}
        </Container>
      </div>
    </Context.Provider>
  );
}

export default App;
