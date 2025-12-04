import React, { useState } from "react";
import MenuItem from "./MenuItem";

const menus = ["Matieres", "Etudiants", "Notes", "A Propos"];

function Menu({ onSelect }) {
  const [selectedMenu, setSelectedMenu] = useState(menus[0]);

  function handleClick(menu) {
    setSelectedMenu(menu);
    if (onSelect) onSelect(menu);
  }

  return (
    <nav className="menu">
      {menus.map((menu, index) => (
        <MenuItem
          key={index}
          title={menu}
          active={selectedMenu === menu}
          onClick={() => handleClick(menu)}
        />
      ))}
    </nav>
  );
}

export { Menu };
