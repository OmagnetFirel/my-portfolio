import { useSignUp } from "../context/signupcontext";

export const Foto = () => {
  const { setUserInfo } = useSignUp();

  const handleImage = (e:any) => {
    const [file] = e.target.files;
    const url = URL.createObjectURL(file);
    setUserInfo({
        foto:url
    })
  }
  return (
    <div className="flex flex-col gap-2 h-max">
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        htmlFor="file_input"
      >
        Upload file
      </label>
      <input
        className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
        onChange={(e) => {
            handleImage(e)
        }}
      />
    </div>
  );
};
