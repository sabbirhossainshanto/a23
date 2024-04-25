import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer/Footer";
import Header from "../ui/Header/Header";

const MainLayout = () => {
  return (
    <div className="centered-div">
      <Header />
     <div style={{minHeight:'100vh'}}>
     <Outlet />
     </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
