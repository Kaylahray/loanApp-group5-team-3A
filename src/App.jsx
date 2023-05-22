import { useState } from "react";
import "./App.scss";
// import { Routes, Route } from "react-router-dom";
import LandingPage from "./Onboarding/LandingPage/LandingPage";

import Container from "./Component/Container/Container";

function App() {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`${theme} application`}>
      <Container>
        <button className="btn" onClick={changeTheme}>
          Theme
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
        <LandingPage />
      </Container>
    </div>
  );
}

export default App;
