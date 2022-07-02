import React from "react";
import { NomeEsobrenome } from "./NomeEsobrenome";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useSignUp } from "./context/signupcontext";

export const SignUp = () => {
    const { step, setStep } = useSignUp();
  
    function changePage() {
      switch (step) {
        case 0:
          return <NomeEsobrenome />;
          case 1:
              return <p> oi</p>;
          default:
              return <p>default</p>
      }
    }
  
    return (
      <div className="flex bg-sky-200 justify-center align-center items-center m-0 p-0 h-screen">
        <div className="w-72 rounded-md bg-white rounded-b-none border-0 border-transparente gap-y-4">
          <div className="w-full bg-violet-600 p-4 rounded-md rounded-b-none">
            <p className="text-slate-50">SUPER CADASTRO</p>
          </div>
          <div className="border-r border-l py-4 border-indigo-700 px-2">{changePage()}</div>
          <div className="flex w-full justify-between align-center rounded-md rounded-t-none border bg-violet-600">
            <button  onClick={() => setStep( step !== 0 ? step - 1 : 0)}>
                <ArrowBackRoundedIcon />
            </button>
            <button className=" border-0 border-transparente bg-white text-violet-700 p-2" onClick={() => setStep(step + 1)}>PRÓXIMO</button>
          </div>
        </div>
      </div>
    );
  };
  