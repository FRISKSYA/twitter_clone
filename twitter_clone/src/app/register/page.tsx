import { signup } from "./actions";

export default function RegisterUser() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="p-8 bg-white rounded-lg shadow-md max-w-sm w-full">
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="名前"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="メールアドレス"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            name="password"
            placeholder="パスワード"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          formAction={signup}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          登録
        </button>
      </form>
    </div>
  );
}
