import { Route, Routes } from "react-router-dom";
import Customers from "../../pages/Customers";
import Dashboard from "../../pages/Dashboard";
import Inventory from "../../pages/Inventory";
import Orders from "../../pages/Orders";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>

    </Routes>
  );
}
export default AppRoutes;
