import Link from "next/link";

export default function Login() {
  return (
    <div className="bg-white rounded-lg p-8 max-w-md mx-auto my-12 shadow-lg border border-gray-300 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue mt-4">Welcome to TAYOG</h1>
      <div className="text-blue mt-4 text-sm">You are just one step away!</div>
      <div className="w-full mt-12">
        <button className="w-full text-slate-600 py-2 border border-gray-500 rounded-lg">
          Login with Google
        </button>
      </div>
      <div className="flex items-center my-4 w-full">
        <hr className="flex-grow border-t border-gray-500" />
        <span className="mx-4 text-gray-500">Or</span>
        <hr className="flex-grow border-t border-gray-500" />
      </div>
      <div className="w-full flex flex-col space-y-4 text-slate-700">
        <input
          placeholder="Email address"
          type="email"
          className="w-full border border-gray-500 px-4 py-2 rounded-lg"
        />
        <input
          placeholder="Password"
          type="password"
          className="w-full border border-gray-500 px-4 py-2 rounded-lg"
        />
      </div>
      <button className="w-full bg-orange-500 text-white py-3 mt-6 rounded-md shadow-md font-semibold">
        Login
      </button>
      <div className="flex items-center justify-between mt-4 w-full">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="remember-me"
            id="remember-me"
            className="w-4 h-4 bg-blue text-blue"
          />
          <label className="ml-2 text-sm text-blue" htmlFor="remember-me">
            Remember me
          </label>
        </div>
        <Link className="text-sm text-blue underline italic" href="#">
          Forgot your Password?
        </Link>
      </div>
      <div className="text-center text-sm text-gray-500 mt-12 flex space-x-2">
        <div className="font-semibold">New to TAYOG?</div>
        <Link className="text-blue underline" href="#">
          Register
        </Link>
      </div>
    </div>
  );
}
