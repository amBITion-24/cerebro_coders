import { Outlet } from "react-router-dom";
import Nav from "../shared/Nav";
import Footer from "../shared/Footer";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
