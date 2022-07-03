import { useSignUp } from "./context/signupcontext";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import "./styles.scss";

export const Card = () => {
  const { userInfo } = useSignUp();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Gerar Cartão de Cria
      </button>
      {isOpen ? (
        <>
          <div className="modal-wrapper flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="closeIcon">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <CloseIcon />
                  </button>
                </div>
                <h3 className="bg-sky-blue my-2 text-black text-center text-lg">
                  Tira print ai
                </h3>
                <p className="bg-sky-blue mb-4 text-black text-center text-sm">
                  Cartãozinho de Cria
                </p>
                <div className="flex flex-col gap-3 bg-gradient-to-r from-purple-500 to-pink-500 w-96 h-60 rounded-md items-center p-4">
                  <img
                    className="w-20 h-20 rounded"
                    src={userInfo.foto}
                    alt="sexy pic"
                  />
                  <div className="w-full flex items-start justify-around">
                    <div>
                      <p className="text-white">Nome:</p>
                      {userInfo.temNomeSocial ? (
                        <p className="text-white">{userInfo.nomeSocial}</p>
                      ) : (
                        <p className="text-white">{`${userInfo.nome} ${userInfo.sobrenome}`}</p>
                      )}
                    </div>
                    <div>
                      <p className="text-white">Nascimento:</p>
                      <p className="text-white">
                        {userInfo.nascimento?.toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex items-start justify-around">
                    <div>
                      <p className="text-white">Pronomes:</p>
                      <p className="text-white">{userInfo.pronomes}</p>
                    </div>
                    <div>
                      <p className="text-white">Genero:</p>
                      <p className="text-white">{userInfo.genero}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
