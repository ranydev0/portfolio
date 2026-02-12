import NavbarElement from "./NavbarElement.jsx";

function Navbar({links}) {
  return (
    <nav>
      <ul>
        {links.map((link) => {
            return (
                <NavbarElement key={link.name} link={link.href}>{link.name}</NavbarElement>
            );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
