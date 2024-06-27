import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post A Job" },
  ];

  return (
    <header className="max-w-screen-2x1 container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between item-center py-6">
        <a href="/" className="flex items-center gap-2 text-2x1 text-blue">
          <img src="/images/slack.png" alt="logo" className="imgLogo" />
          <span className="logoHeading">JobPortal</span>
        </a>

        {/* nav items for large devices */}
        <ul className="hidden md:flex gap-12 ">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Sign Up & LogIn Btn */}
        {/* <ul className="">{isAuthenticated && <p> {user.name} </p>}</ul> */}
        <div className="text-base text-primary font-medium hidden lg:block">
          {isAuthenticated ? (
            // <NavLink className="py-2 px-5 border rounded bg-blue text-white">
            <button
              className="py-2 px-5 border rounded bg-blue text-white"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          ) : (
            // </NavLink>
            // <NavLink className="py-2 px-5 border rounded">
            <button
              className="py-2 px-5 border rounded text-blue bg-white"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
            // </NavLink>
          )}
        </div>
        <ul className="flex items-center justify-center">
          {isAuthenticated && <p>{user.name}</p>}
        </ul>
        {/* <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          <NavLink to="/login" className="py-2 px-5 border rounded">
            Log In
          </NavLink>
          <NavLink
            to="/sign-up"
            className="py-2 px-5 border rounded bg-blue text-white"
          >
            Sign Up
          </NavLink>
        </div> */}

        {/* mobile menu */}
        <div className="md:hidden block">
          <button onClick={handleMenuToggle}>
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 text-primary" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/* nevItems for mobile */}
      <div
        className={`px-4 bg-black py-5 rounded-sm ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul>
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-base text-white first:text-white py-1"
            >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
          <li className="text-white py-1">
            <NavLink to="/login">Log In</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
