import { NavLink } from "react-router-dom";
import "./Menu.scss";

function Menu({ isHeader, isOpen }) {
  let menuClassName = "menu";
  if (isOpen && isHeader) {
    menuClassName = "menu menu-header menu-show";
  } else if (isHeader) {
    menuClassName = "menu menu-header menu-hide";
  }

  return (
    <nav className={menuClassName}>
      <ul className={isHeader ? "menu__list  menu__list--header" : "menu__list"}>
        <li className={isHeader ? "menu__item menu__item--header" : "menu__item"}>
          <NavLink to="/home" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li className={isHeader ? "menu__item menu__item--header" : "menu__item"}>
          <NavLink to="/about" activeClassName="active-link">
            About Me
          </NavLink>
        </li>
        <li className={isHeader ? "menu__item menu__item--header" : "menu__item"}>
          <NavLink to="/portfolio" activeClassName="active-link">
            Portfolio
          </NavLink>
        </li>
        <li className={isHeader ? "menu__item menu__item--header" : "menu__item"}>
          <NavLink to="/contact" activeClassName="active-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
