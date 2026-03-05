import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="md:navbar bg-base-100 shadow-sm md:px-30 py-3">
        <div className="md:navbar-start md:grid flex justify-between flex-row-reverse">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm right-0 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-25 p-2 shadow"
            >
              {["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"].map(
                (items , i) => (
                  <li key={i} className="font-semibold mt-1">{items}</li>
                ),
              )}
            </ul>
          </div>
          <a className=" md:text-2xl text-xl font-bold">CS - Ticket System</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex md:gap-8 md:me-8 gap-4 me-4">
            {["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"].map(
              (items) => (
                <li className="font-semibold">{items}</li>
              ),
            )}
          </ul>
          <div className="">
            <button className="text-white btn bg-gradient-to-r from-[#422AD5] to-[#9f62f2]">
              <i className="fa-solid fa-plus"></i> New Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
