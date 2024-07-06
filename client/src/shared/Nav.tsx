import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar bg-base-100 shadow-xl px-3 md:px-9 flex justify-between ">
      <div className="">
        <Link to="/">
          <p className="btn btn-ghost text-sm md:text-2xl ">
            Accident Detector
          </p>
        </Link>
      </div>
      <div className=" space-x-3 hidden md:flex">
        <Link to="accident">Accidents</Link>
        <Link to="driverlist" className="">
          Drivers
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 pr-8">
          <li className=" md:hidden">
            <details>
              <summary>Links</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <Link to="accident" className="">
                    Accidents
                  </Link>
                </li>
                <li>
                  <Link to="driverlist" className="">
                    Drivers
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <Link to={"/register"}>
        <button className="btn">Register a Driver</button>
      </Link>
    </div>
  );
};
export default Nav;
