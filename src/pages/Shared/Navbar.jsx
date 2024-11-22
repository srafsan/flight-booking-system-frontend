import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogoutClick = () => {
    logout();
    navigate("/");
  };

  const handleProfileClick = () => {
    navigate("/admin");
  };

  const handleFlightsClick = () => {
    navigate("/flights");
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          Excel Flights
        </Link>
      </div>
      <div className="flex-none gap-2">
        <button onClick={handleFlightsClick} className="btn btn-ghost">
          Flights
        </button>

        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-primary avatar uppercase"
            >
              Dashboard
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={handleProfileClick} className="justify-between">
                  Profile
                </a>
              </li>
              <li>
                <a onClick={handleLogoutClick}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <button onClick={handleLoginClick} className="btn btn-primary">
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
