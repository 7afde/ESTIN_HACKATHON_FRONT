import { NavLink } from "react-router-dom";
import { MButton } from "./Buttons";

const LoginForm = () => {
  return (
    <div>
      <h1 className="text-4xl mb-5 text-center py-10">Login</h1>
      <form className="flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-2">
          <input
            type="email"
            autoFocus
            placeholder="Email"
            className="py-1 px-3 rounded-md font-extralight bg-slate-200"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="py-1 px-3 rounded-md font-extralight bg-slate-200"
            required
          />
          <p className="text-xs inline-flex pl-1">
            Don't have an account?&nbsp;
            <NavLink
              to="/register"
              className="inline-flex items-center font-bold text-blue-600 dark:text-blue-500 hover:underline"
            >
              Register
            </NavLink>
          </p>
        </div>
        <MButton title="Submit" type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
