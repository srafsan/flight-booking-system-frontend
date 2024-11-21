function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Excel</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal">
            <li>
              <button className="btn btn-primary">Login</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
