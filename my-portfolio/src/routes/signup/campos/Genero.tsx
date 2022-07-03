import { useSignUp } from "../context/signupcontext";

export const Genero = () => {
  const { setUserInfo } = useSignUp();

  return (
    <div className="flex flex-col gap-5 h-max">
      <select
        id="generos"
        onChange={(e) => {
          setUserInfo({
            genero: e.target.value,
          });
        }}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Informe seu Genero</option>
        <option value="feminino">feminino</option>
        <option value="masculino">masculino</option>
        <option value="transgênero">transgênero</option>
        <option value="gênero neutro">gênero neutro</option>
        <option value="não-binário">não-binário</option>
        <option value="agênero">agênero</option>
        <option value="pangênero">pangênero</option>
        <option value="genderqueer">genderqueer</option>
        <option value="two-spirit">two-spirit</option>
        <option value="terceiro gênero">terceiro gênero</option>
        <option value="todos">todos</option>
        <option value="nenhum">nenhum</option>
        <option value="uma combinação destes">uma combinação destes</option>
      </select>
      <input
        type="text"
        className="h-11 px-2.5 rounded focus:outline-none focus:ring-offset-2 focus:ring-offset-amber-100 ring-2 ring-amber-500"
        placeholder="Pronomes"
        onChange={(e) => {
          setUserInfo({
            pronomes: e.target.value,
          });
        }}
      />
    </div>
  );
};
