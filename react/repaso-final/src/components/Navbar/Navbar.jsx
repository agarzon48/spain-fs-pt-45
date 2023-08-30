import Dropdown from "./components/Dropdown";

const Navbar = () => {
    return (
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Star Wars
                </a>
                <Dropdown />
        </div>
      </nav>
    );
}

export default Navbar;