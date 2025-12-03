function MenuItem({ title, onClick }) {
  function handleClick() {
    alert(`${title} clicked`);
    if (onClick) onClick();
  }

  return <button onClick={handleClick}>{title}</button>;
}

export { MenuItem };
