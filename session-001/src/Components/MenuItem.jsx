import React from "react";

function MenuItem({ title, active, onClick }) {
  return (
    <button
      type="button"
      className={active ? "menu-item active" : "menu-item"}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default MenuItem;
