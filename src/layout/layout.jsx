import Header from "./header";
import Footer from "./footer";

import "../style/layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
