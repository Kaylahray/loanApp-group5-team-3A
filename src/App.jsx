import { useState } from "react";
import "./App.scss";
// import { Routes, Route } from "react-router-dom";

import Container from "./Component/Container/Container";

import Signup from "./Onboarding/SignUpPage/Signup";
import { Context } from "./Context";
import PasswordResetSuccess from "./Onboarding/PasswordResetSuccesful/PasswordResetSuccess";

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


   </Routes>  */}
          <PasswordResetSuccess/>
          {/* <AddTeamMember /> */}
          {/* <PersonalDetailForm /> */}
        </Container>
      </div>
    </Context.Provider>
  );
}

export default App;
