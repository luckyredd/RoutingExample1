// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="left-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="image"
        alt="wave"
      />
      <h1 className="heading">Incedo</h1>
    </div>
    <div>
      <ul className="list">
        <li className="link-items">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="link-items">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="link-items">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)
export default Header
