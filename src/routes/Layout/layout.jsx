import { Outlet } from "react-router-dom";
import NavBar from "../../component/navBar/navBar";
import "./layout.scss";
function Layout() {
  return (
    <div className="layout">
     
      <div className="content">

        <Outlet />
      </div>
    </div>
  );
}



export { Layout };