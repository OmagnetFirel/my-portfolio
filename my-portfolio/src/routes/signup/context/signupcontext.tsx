import React, { useState } from "react";

interface iSignUp {
  userInfo: userInfoProps;
  setUserInfo: React.Dispatch<React.SetStateAction<userInfoProps>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
interface userInfoProps {
  nome: string;
  sobrenome: string;
  nascimento?: Date;
  genero: string;
}

export const AuthContext = React.createContext<iSignUp>({
  userInfo: {} as iSignUp["userInfo"],
  setUserInfo: () => void {},
  step: 0,
  setStep: () => void {},
} as iSignUp);

export const SignUpProvider = (props: any) => {
  const [userInfo, setUserInfo] = useState<userInfoProps>({
    nome: "",
    sobrenome: "",
    genero: "",
  });
  const [step, setStep] = useState(0);

  return (
    <AuthContext.Provider
      value={{
        setUserInfo,
        userInfo,
        step,
        setStep
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useSignUp = () => React.useContext(AuthContext);