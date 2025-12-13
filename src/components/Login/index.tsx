import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../providers/authProvider";

export default function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("admin");
  const [password, setPassword] = useState("password");

  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("I am out of Auth Contenxt. . . w..w.w w.w");
  }

  const handleLogin = async () => {
    console.log(1, "Logging in using ", userName, password);

    const isSuccess = await ctx.login(userName, password);
    console.log(isSuccess);

    if (isSuccess) {
      navigate("/landing");
    } else {
      console.log("Somethiong went wromng.. ");
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-black h-screen">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-100"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  required
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  onChange={(event) => setUserName(event.target.value)}
                  defaultValue={userName}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-100"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  onChange={(event) => setPassword(event.target.value)}
                  defaultValue={password}
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onClick={handleLogin}
              >
                Sign in
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
