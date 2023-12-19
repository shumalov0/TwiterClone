import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Rightbar from "./Rightbar";

const MainLayout = () => {
  return (
    <div className="w-[1265px] mx-auto flex"  >
      <Sidebar/>
      <div className="flex flex-1 gap-[30px]">

      <main className="flex-1 border-x border-[#2f3336]">
      <Outlet />
      </main>
      <Rightbar/>
      </div>
    </div>
  );
};

export default MainLayout;
