import { useSignUp } from "./context/signupcontext";

import { NomeEsobrenome } from "./campos/NomeEsobrenome";
import { NomeSocial } from "./campos/NomeSocial";
import { Genero } from "./campos/Genero";
import { Nascimento } from "./campos/Nascimento";
import { Foto } from "./campos/Foto";
import {Card} from "./Card";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

export const SignUp = () => {
  const { step, setStep } = useSignUp();

  function changePage() {
    switch (step) {
      case 0:
        return <NomeEsobrenome />;
      case 1:
        return <NomeSocial />;
      case 2:
        return <Genero />;
      case 3:
        return <Nascimento />;
      case 4:
        return <Foto />;
      case 5:
          return <Card />
      default:
        return <p> sexo</p>;
    }
  }

  return (
    <div className="flex bg-sky-200 justify-center align-center items-center m-0 p-0 h-screen">
      <div className="w-72 rounded-md bg-white rounded-b-none border-0 border-transparente gap-y-4">
        <div className="w-full bg-violet-600 p-4 rounded-md rounded-b-none">
          <p className="text-slate-50">SUPER CADASTRO</p>
        </div>
        <div className="border-r border-l py-4 border-indigo-700 px-2">
          {changePage()}
        </div>
        <div className="flex w-full justify-between align-center rounded-md rounded-t-none border bg-violet-600">
          <button onClick={() => setStep(step !== 0 ? step - 1 : 0)}>
            <ArrowBackRoundedIcon />
          </button>
          <button
            className=" border-0 border-transparente bg-white text-violet-700 p-2"
            onClick={() => setStep(step === 5 ? step : step + 1)}
          >
            PRÓXIMO
          </button>
        </div>
      </div>
    </div>
  );
};
