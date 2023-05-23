import * as React from "react";
// import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import PersonalDetailForm from "./Onboarding/PersonalDetailForm/PersonalDetailForm.jsx";
import Signup from "./Onboarding/SignUpPage/Signup.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <PersonalDetailForm />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
