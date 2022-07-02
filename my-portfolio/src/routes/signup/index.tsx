import React from "react";
import {SignUp} from "./signup";
import {  SignUpProvider } from "./context/signupcontext";


export const SignUpWrapper = () => {
  return (
    <SignUpProvider>
      <SignUp />
    </SignUpProvider>
  );
};
