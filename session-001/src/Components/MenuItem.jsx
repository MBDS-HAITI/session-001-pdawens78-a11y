import React from "react";
import { NavLink } from "react-router-dom";

function MenuItem({ title, path }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? "menu-item active" : "menu-item"
      }
    >
      {title}
    </NavLink>
  );
}

export default MenuItem;
