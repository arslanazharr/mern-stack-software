/* eslint-disable no-unused-vars */
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
// import { FaRegSmile } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const navigation = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("JWT");
  const userName = localStorage.getItem("username");

  const logout = () => {
    localStorage.clear("JWT");
    localStorage.clear("userId");
    localStorage.clear("username");

    navigate("/signin");
  };

  return (
    <>
      <div className="px-2 sm:px-6 lg:px-8 bg-gray-700">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <div
              onClick={() => setOpen(!open)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="absolute -inset-0.5" />

              <div className="flex items-center justify-center text-2xl h-6 w-6">
                {open ? <IoCloseSharp /> : <FaBars />}
              </div>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {isAuthenticated ? (
                  navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.link}
                      exact
                      className={({ isActive }) =>
                        isActive
                          ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium text-center"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium text-center"
                      }
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </NavLink>
                  ))
                ) : (
                  <>
                    <NavLink
                      to="/signin"
                      exact
                      className={({ isActive }) =>
                        isActive
                          ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium text-center"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium text-center"
                      }
                    >
                      Sign In
                    </NavLink>
                    <NavLink
                      to="/signup"
                      exact
                      className={({ isActive }) =>
                        isActive
                          ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium text-center"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium text-center"
                      }
                    >
                      Sign Up
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-shrink-0 items-center gap-4">
            <span className="text-[17px] text-gray-400 capitalize">
              {userName}
            </span>

            {isAuthenticated && (
              <span
                className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium text-center hover:opacity-50 transition-all cursor-pointer"
                onClick={logout}
              >
                Logout
              </span>
            )}
          </div>
        </div>
      </div>
      {open && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 bg-gray-700">
            {isAuthenticated ? (
              navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.link}
                  exact
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium w-full text-center"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium w-full text-center"
                  }
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              ))
            ) : (
              <>
                <NavLink
                  to="/signin"
                  exact
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium w-full text-center"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium w-full text-center"
                  }
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/signup"
                  exact
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium w-full text-center"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium w-full text-center"
                  }
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
