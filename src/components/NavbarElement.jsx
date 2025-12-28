function NavbarElement({children, link}) {
  function handleClick() {
    console.log(`${children} link clicked`);
  }

  return (
    <li>
      <a onClick={handleClick} href={link}>
        {children}
      </a>
    </li>
  );
}

export default NavbarElement;
