import Link from 'next/link';

const Navbar = () => (
  <nav className="navbar navbar-expand navbar-light navbar-glass font-weight-semi-bold sticky-top fs--1">
    <div className="container">
      <Link href="/"><a className="navbar-brand">Bitcoin</a></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/about"><a className="nav-link">About</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;