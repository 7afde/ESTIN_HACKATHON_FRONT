import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MButton } from "./Buttons";
const Registerform = () => {
  const [data, setData] = useState(null);
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone: "",
  });

  const handleRegInputChange = (e) => {
    setData(null);
    setRegisterData({
      ...registerData,
      [e.target.id]: e.target.value,
    });
  };

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
      <h1 className="text-4xl mb-5 text-center pt-10">Register</h1>
      <form action="" className="flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="First Name"
            onChange={handleRegInputChange}
            className="py-1 px-3 rounded-md font-extralight bg-slate-200"
            autoFocus
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={handleRegInputChange}
            className="py-1 px-3 rounded-md font-extralight bg-slate-200"
            required
          />
          <input
            type="email"
            placeholder="Email"
            onChange={handleRegInputChange}
            className="py-1 px-3 rounded-md font-extralight bg-slate-200"
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handleRegInputChange}
            className="py-1 px-3 rounded-md font-extralight bg-slate-200"
            required
          />
          <p className="text-xs inline-flex pl-1">
            Already have an account?&nbsp;
            <NavLink
              to="/"
              className="inline-flex items-center font-bold text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </NavLink>
          </p>
        </div>
        <MButton title="Submit" type="submit" />
      </form>
    </div>
  );
};

export default Registerform;
