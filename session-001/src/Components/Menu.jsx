import React from "react";
import MenuItem from "./MenuItem";

const menus = [
  { title: "Matieres", path: "/courses" },
  { title: "Etudiants", path: "/students" },
  { title: "Notes", path: "/grades" },
  { title: "A Propos", path: "/about" },
];

function Menu() {
  return (
    <nav className="menu">
      {menus.map((menu) => (
        <MenuItem key={menu.title} title={menu.title} path={menu.path} />
      ))}
    </nav>
  );
}

export { Menu };
