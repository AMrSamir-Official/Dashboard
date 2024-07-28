import { AiOutlineMenu } from "react-icons/ai";
import unKnown from "../assets/imgs/unknown.png";
function Navbar({ open, drawerWidth, handleDrawer }) {
  return (
    <nav className=" m-auto  w-[90%] my-1 top-1 flex justify-between px-3">
      <AiOutlineMenu onClick={handleDrawer} size={30} />
      <div className="profile">
        <img
          src={unKnown}
          alt="profile"
          className="cursor-pointer size-[40px] rounded-xl "
        />
      </div>
    </nav>
  );
}

export default Navbar;
