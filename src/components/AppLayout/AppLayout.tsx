import { Outlet, useLocation } from "react-router-dom";

import Header from "./Common/Header/Header";
import Mobile from "./Common/Header/Mobile/Mobile";
import Footer from "./Common/Footer/Footer";
import TermsHeader from "../TermsHeader/TermsHeader";
import { ToastContainer } from "react-toastify";

const AppLayout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname.slice(1) === "term-of-use" ? (
        <TermsHeader />
      ) : (
        <Header />
      )} 
      <Mobile />
            
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default AppLayout;
