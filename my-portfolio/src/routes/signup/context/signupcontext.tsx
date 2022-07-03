import React, { useState, useReducer } from "react";

interface iSignUp {
  userInfo: userInfoProps;
  setUserInfo: React.Dispatch<Partial<userInfoProps>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
interface userInfoProps {
  nome: string;
  sobrenome: string;
  nomeSocial?: string;
  temNomeSocial: boolean;
  genero: string;
  pronomes: string;
  nascimento?: Date;
  foto?: string;
}

export const AuthContext = React.createContext<iSignUp>({
  userInfo: {} as iSignUp["userInfo"],
  setUserInfo: () => void {},
  step: 0,
  setStep: () => void {},
} as iSignUp);

export const SignUpProvider = (props: any) => {


  const [userInfo, setUserInfo] = useReducer(
    (userInfo: userInfoProps, newState: Partial<userInfoProps>) => ({
      ...userInfo,
      ...newState
    }),
    {
      nome: "",
      sobrenome: "",
      nomeSocial: "",
      temNomeSocial: false,
      pronomes: "",
      genero: "",
      foto: "",
    }
  );
  const [step, setStep] = useState(0);

  return (
    <AuthContext.Provider
      value={{
        setUserInfo,
        userInfo,
        step,
        setStep,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useSignUp = () => React.useContext(AuthContext);
