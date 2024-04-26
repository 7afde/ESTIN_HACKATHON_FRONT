import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
import { useState, useContext } from "react";
// import { appContext } from "@/App";
import RiseLoader from "react-spinners/RiseLoader";
import { login } from "@/lib/fetchUtils";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  // const navigate = useNavigate();
  // const { isLoading, setIsLoading, error, setError, setUser, setIsLogged } =
  //   useContext(appContext);
  // const [loginData, setLoginData] = useState({ email: "", password: "" });

  // const handleInputChange = (e) => {
  //   setError(null);
  //   setLoginData({
  //     ...loginData,
  //     [e.target.id]: e.target.value,
  //   });
  // };

  // const handleLoginSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   try {
  //     const response = await login(loginData);
  //     const { first_name, last_name, email, admin, avatar, id, phone } =
  //       response;
  //     setUser({ first_name, last_name, email, admin, avatar, id, phone });
  //     setIsLogged(true);
  //     setIsLoading(false);
  //     setError(null);
  //     navigate("/");
  //   } catch (err: any) {
  //     setIsLoading(false);
  //     setError(err.response.data);
  //   }
  };
  return (
		<div>
			<h1 className="text-4xl mb-5">Login</h1>
			<form onSubmit={handleOnSubmit} className="flex flex-col gap-6 items-center">
				<div className="flex flex-col gap-2">
					<input ref={emailInput} type="email" autoFocus placeholder="Email" onChange={handleEmailOnChange} className="py-1 px-3 rounded-md font-extralight bg-slate-200" required />
					<input ref={passwordInput} type="password" placeholder="Password" onChange={handlePasswordOnChange} className="py-1 px-3 rounded-md font-extralight bg-slate-200" required />
					<p className="text-xs inline-flex pl-1">
						Don't have an account?&nbsp;
						<NavLink to="/register" className="inline-flex items-center font-bold text-blue-600 dark:text-blue-500 hover:underline">
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

//export default Loginform;
