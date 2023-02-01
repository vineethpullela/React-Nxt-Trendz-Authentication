import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <navbar className="nav-header">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="website-logo"
    />
    <ul className="header-menu-container">
      <li>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/">
          Products
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/">
          Cart
        </Link>
      </li>
      <li>
        <button className="logout-button" type="button">
          Logout
        </button>
      </li>
    </ul>
  </navbar>
)

export default Header
