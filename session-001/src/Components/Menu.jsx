import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { useNavigate } from "react-router-dom";

const menus = [
  { title: "Matieres", path: "/courses" },
  { title: "Etudiants", path: "/students" },
  { title: "Notes", path: "/grades" },
  { title: "A Propos", path: "/about" },
];

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(menus[0].title);
  const navigate = useNavigate();

  function handleClick(menu) {
    setSelectedMenu(menu.title);
    navigate(menu.path);
  }

  return (
    <nav className="menu">
      {menus.map((menu, index) => (
        <MenuItem
          key={index}
          title={menu.title}
          active={selectedMenu === menu.title}
          onClick={() => handleClick(menu)}
        />
      ))}
    </nav>
  );
}

export { Menu };
