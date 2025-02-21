import { Link } from "react-router-dom";
function Navigation() {
    return (
      <nav>
        <ul>
          <li>
            <Link to='/LogIn'>LogIn</Link>
          </li>
          <li>
            <Link to='/HighScore'>HighScore</Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navigation;