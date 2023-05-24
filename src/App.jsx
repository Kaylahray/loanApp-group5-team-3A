/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
import { useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Container from "./Component/Container/Container";
import { Context } from "./Context";
import UploadLogo from "./Onboarding/CompanyLogoUpload/UploadLogo";

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
          <Route path="/" element={<UploadLogo />} />


   </Routes>  */}
          <UploadLogo />
        </Container>
      </div>
    </Context.Provider>
  );
}

export default App;
