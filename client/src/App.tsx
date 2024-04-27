import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Admin from "./pages/Admin.jsx";
import NfcForm from "./components/custom/NfcForm.js";
import LoginForm from "./components/custom/LoginForm.tsx";
import Ranking from "./pages/Ranking.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/nfcform" element={<NfcForm />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
