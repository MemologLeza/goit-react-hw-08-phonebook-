import { NavLink } from 'react-router-dom';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { useAuth } from 'store/auth/selectors/utils';
const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <nav className="navbar navbar-expand-md bg-dark d-flex justify-content-between ">
        <div className="container-lg ">
          <div className="navbar-nav ">
            <NavLink
              className="nav-link text-white me-3"
              to="/goit-react-hw-08-phonebook-"
            >
              Home
            </NavLink>
            {isLoggedIn && (
              <NavLink className="nav-link text-white" to="contacts">
                Contacts
              </NavLink>
            )}
          </div>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
        {/* </div> */}
      </nav>
    </header>
  );
};

export default Header;
