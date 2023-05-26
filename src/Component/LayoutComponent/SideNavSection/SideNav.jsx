import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <div>
      <NavLink to={"./application"}> Application</NavLink>
      <NavLink to={"./teams"}> Teams</NavLink>
    </div>
  );
};

export default SideNav;
