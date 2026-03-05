import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-base-100 shadow-md">
      <div className="w-11/12 mx-auto flex items-center justify-between py-3">
        <div className="flex items-center">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-black rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="text-white hover:text-blue-600">Home</a>
              </li>
              <li>
                <a className="text-white hover:text-blue-600">FAQ</a>
              </li>
              <li>
                <a className="text-white hover:text-blue-600">Changelog</a>
              </li>
              <li>
                <a className="text-white hover:text-blue-600">Blog</a>
              </li>
              <li>
                <a className="text-white hover:text-blue-600">Download</a>
              </li>
              <li>
                <a className="text-white hover:text-blue-600">Contact</a>
              </li>
              <li>
                <a className="text-white hover:text-blue-600">New Ticket</a>
              </li>
            </ul>
          </div>

          <a className="text-lg font-bold text-gray-900 ml-3">
            CS — <span className="text-[#8432f8]">Ticket System</span>
          </a>
        </div>

        <div className="hidden lg:flex space-x-6">
          <a className="text-gray-900 hover:text-blue-600 transition">Home</a>
          <a className="text-gray-900 hover:text-blue-600 transition">FAQ</a>
          <a className="text-gray-900 hover:text-blue-600 transition">
            Changelog
          </a>
          <a className="text-gray-900 hover:text-blue-600 transition">Blog</a>
          <a className="text-gray-900 hover:text-blue-600 transition">
            Download
          </a>
          <a className="text-gray-900 hover:text-blue-600 transition">
            Contact
          </a>
          <a className="text-gray-900 hover:text-blue-600 transition">
            New Ticket
          </a>
        </div>

        <div>
          <button className="bg-gradient-to-r from-[#9F62F2] via-[#7C49EB] to-[#632EE3] text-white px-4 py-2 rounded-md shadow-md hover:scale-105 transition cursor-pointer">
            + New Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
