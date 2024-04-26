import { Space } from "antd";
import '../App.css'
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import PageContent from "../components/PageContent";
import SideMenu from "../components/SideMenu";
import { BrowserRouter as Router } from "react-router-dom";

const Admin = () => {
  return (
    <Router>
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      <AppFooter />
    </Router>
  )
}
export default Admin