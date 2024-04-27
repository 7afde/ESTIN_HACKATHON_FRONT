import { Space } from "antd";
import "../App.css";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import PageContent from "../components/PageContent";
import SideMenu from "../components/SideMenu";

const Admin = () => {
  return (
    <>
      <AppHeader />
      <div className="SideMenuAndPageContent flex justify-between h-screen">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      <AppFooter />
    </>
  );
};
export default Admin;
