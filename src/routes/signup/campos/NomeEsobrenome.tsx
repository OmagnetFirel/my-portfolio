import { useSignUp } from "../context/signupcontext";

export const NomeEsobrenome = () => {
  const { setUserInfo } = useSignUp();

  return (
    <div className="flex flex-col gap-5 h-max">
      <input
        type="text"
        className="h-11 px-2.5 rounded focus:outline-none focus:ring-offset-2 focus:ring-offset-amber-100 ring-2 ring-amber-500"
        placeholder="Digite seu nome"
        onChange={(e) => {
          setUserInfo({
            nome: e.target.value,
          });
        }}
      />
      <input
        onChange={(e) => {
          setUserInfo({
            sobrenome: e.target.value,
          });
        }}
        type="text"
        className="h-11 px-2.5 rounded focus:outline-none focus:ring-offset-2 focus:ring-offset-amber-100 ring-2 ring-amber-500"
        name="sobrenome"
        placeholder="Digite seu sobrenome"
      />
    </div>
  );
};
