import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-info p-3">
        <div className="container-fluid gap-3">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <NavLink className="navbar-brand" to="/">
              <h3 className="text-white">Quotes Central</h3>
            </NavLink>
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/">Quotes</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/add-quote">Add New Quotes</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;