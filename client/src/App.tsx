import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/custom/Navbar";
import Admin from "./pages/Admin.jsx";

// export const appContext = createContext({
//   isLogged: false,
//   setIsLogged: (isLogged: boolean) => {},
//   isLoading: false,
//   setIsLoading: (isLoading: boolean) => {},
//   err: null,
//   setError: (err: any) => {},
//   user: {},
//   setUser: (user: object) => {},
// });

function App() {
  // const [isLoagged, setIsLogged] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [err, setError] = useState(null);
  // const [user, setUser] = useState({
  //   first_name: "",
  //   last_name: "",
  //   admin: false,
  //   email: "",
  //   id: "",
  //   avatar: "",
  //   phoone: "",
  // });

  return (
    <>
      <Admin />
    </>
  );
}

export default App;
