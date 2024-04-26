import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
import { useState, useContext } from "react";
import { appContext } from "@/App";
import RiseLoader from "react-spinners/RiseLoader";
import { register } from "@/lib/fetchUtils";

const Registerform = () => {
  // const { isLoading, setIsLoading, err, setError } = useContext(appContext);
  // const [data, setData] = useState(null);
  // const [registerData, setRegisterData] = useState({
  //   email: "",
  //   password: "",
  //   first_name: "",
  //   last_name: "",
  //   phone: "",
  // });

  // const handleRegInputChange = (e) => {
  //   setError(null);
  //   setData(null);
  //   setRegisterData({
  //     ...registerData,
  //     [e.target.id]: e.target.value,
  //   });
  // };

  // const handleRegisterSubmit = async (e) => {
  //   setError(null);
  //   setData(null);
  //   e.preventDefault();
  //   setIsLoading(true);
  //   try {
  //     const response = await register(registerData);
  //     setIsLoading(false);
  //     setData(response.message);
  //     setRegisterData({
  //       email: "",
  //       password: "",
  //       first_name: "",
  //       last_name: "",
  //       phone: "",
  //     });
  //   } catch (error) {
  //     setIsLoading(false);
  //     setError(error.response.data.message);
  //   }
  // };
  return (
		<div>
			<h1 className="text-4xl mb-5">Register</h1>
			<form action="" onSubmit={handleOnSubmit} className="flex flex-col gap-6 items-center">
				<div className="flex flex-col gap-2">
					<input ref={firstNameInput} type="text" placeholder="First Name" onChange={handleFirstNameOnChange} className="py-1 px-3 rounded-md font-extralight bg-slate-200" autoFocus required />
					<input ref={lastNameInput} type="text" placeholder="Last Name" onChange={handleLastNameOnChange} className="py-1 px-3 rounded-md font-extralight bg-slate-200" required />
					<input ref={emailInput} type="email" placeholder="Email" onChange={handleEmailOnChange} className="py-1 px-3 rounded-md font-extralight bg-slate-200" required />
					<input ref={passwordInput} type="password" placeholder="Password" onChange={handlePasswordOnChange} className="py-1 px-3 rounded-md font-extralight bg-slate-200" required />
					<p className="text-xs inline-flex pl-1">
						Already have an account?&nbsp;
						<NavLink to="/login" className="inline-flex items-center font-bold text-blue-600 dark:text-blue-500 hover:underline">
							Login
						</NavLink>
					</p>
				</div>
				<MButton title="Submit" type="submit" />
			</form>
		</div>
	);
}

export default Registerform;
