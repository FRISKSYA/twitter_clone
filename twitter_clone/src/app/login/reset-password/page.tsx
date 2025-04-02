"use client";
import { createClient } from "@/utils/supabase/client";
import { AuthError } from "@supabase/supabase-js";
import { useState } from "react";

export default function ResetPassword() {
  const [password, setPassword] = useState<string>("");
  const [isSend, setIsSend] = useState<boolean>(false);
  const [error, setError] = useState<AuthError | null>(null);

  const supabase = createClient();

  const handleSubmitPassword = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      const { error } = await supabase.auth.updateUser({ password: password });
      if (error) {
        setError(error);
        throw error;
      }
      setIsSend(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSetPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  if (error) {
    return (
      <p className="text-red-500 text-center mt-4">
        エラーが発生しました。もう一度お試しください。
      </p>
    );
  }

  if (isSend) {
    return (
      <p className="text-green-500 text-center mt-4">
        パスワードが更新されました。
      </p>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-xs p-8 bg-white rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-4">
          新しいパスワードを入力してください
        </p>
        <form onSubmit={handleSubmitPassword} className="space-y-4">
          <input
            className="w-full p-2 text-gray-700 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type="password"
            value={password}
            onChange={handleSetPassword}
            placeholder="パスワード"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            送信
          </button>
        </form>
      </div>
    </div>
  );
}
