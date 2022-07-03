import { useSignUp } from "../context/signupcontext";


export const Nascimento = () => {
  const { setUserInfo } = useSignUp();

  return (
    <div className="flex flex-col gap-2 h-max">
      <label htmlFor="Nascimento">Data de Nascimento</label>
      <input
        type="date"
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Select a date"
        name="Nascimento"
        onChange={(e) => {
          setUserInfo({
            nascimento: new Date(e.target.value),
          });
        }}
      />
    </div>
  );
};
