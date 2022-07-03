import { useSignUp } from "../context/signupcontext";
import { Switch } from "@headlessui/react";

export const NomeSocial = () => {
  const { userInfo, setUserInfo } = useSignUp();
  return (
    <div className="flex flex-col gap-5 h-max">
      <div className="flex w-max gap-4">
        <Switch
          checked={userInfo.temNomeSocial}
          color="purple"
          onChange={() => {
            setUserInfo({ temNomeSocial: !userInfo.temNomeSocial });
          }}
          className={`${
            userInfo.temNomeSocial ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Tem nome social?</span>
          <span
            className={`${
              userInfo.temNomeSocial ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white`}
          />
        </Switch>
        <label className="mr-4 text-fuchsia-700	">Tem nome social?</label>
      </div>
      <input
        type="text"
        className="h-11 px-2.5 rounded focus:outline-none focus:ring-offset-2 focus:ring-offset-amber-100 ring-2 ring-amber-500"
        placeholder="Como prefere ser chamado"
        disabled={!userInfo.temNomeSocial}
        onChange={(e) => {
          setUserInfo({
            nomeSocial: e.target.value,
          });
        }}
      />
    </div>
  );
};
