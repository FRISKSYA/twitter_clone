"use client";
import Link from "next/link";
import { login } from "./actions";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="p-8 bg-white rounded-lg shadow-md">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex items-center justify-between mb-6">
          <button
            type="submit"
            formAction={login}
            className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Log in
          </button>
        </div>
        <div className="flex items-center justify-between mb-6">
          <button
            type="button"
            className="w-full text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={() => router.push("/register")}
          >
            Sign up
          </button>
        </div>
        <div className="text-center">
          <Link href="/login/forget-password">
            <button className="text-sm text-blue-600 hover:underline">
              Forget password?
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
