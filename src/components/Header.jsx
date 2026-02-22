function Header() {
  return (
    <header className="topbar">
      <a href="#home" className="logo">
        Malerbetrieb Malstein
      </a>
      <nav className="menu">
        <a href="#leistungen">Services</a>
        <a href="#ueber-uns">Über uns</a>
        <a href="#kontakt">Kontakt</a>
        <a href="#kontakt" className="book-btn">
          Jetzt buchen
        </a>
      </nav>
    </header>
  )
}

export default Header
