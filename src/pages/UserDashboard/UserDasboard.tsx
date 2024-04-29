import { Outlet } from "react-router-dom";
import Siderbar from "../../components/Sidebar/Siderbar";
import "../../styles/main.scss";
function UserDasboard() {
  return (
    <div>
      <Siderbar />
      <Outlet />
    </div>
  );
}

export default UserDasboard;
