import React, { useEffect, useState } from "react";

import { Grid, Button, Typography } from "@material-ui/core";
import CreateRoomIcon from "@material-ui/icons/RoomOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { loadCategoryPro, loadAllProducts } from "../../action/Products";

import logo from "./logo.jpg";
import { SearchIcon } from "@heroicons/react/outline";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [query, setQuery] = useState("");

  const handleLogin = () => {
    navigate("/signIn");
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    NotificationManager.error("logging Out");
    navigate("/");
    // history.go(0);
  };

  const hanldeOpenAllStreams = () => {
    navigate("/streams");
  };

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    console.log(query);
    navigate(`/search/${query}`);
  };

  const handleCategory = (category) => {
    dispatch(loadCategoryPro(category));
    navigate("/category");
  };

  const handleLoadAll = () => {
    dispatch(loadAllProducts());
  };

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav
        className={
          (props.transparent
            ? "top-0 absolute z-50 w-full"
            : "relative shadow-lg bg-white") +
          " flex flex-wrap items-center justify-between px-2 py-1 "
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static   lg:justify-start">
            <img src={logo} className="w-10 h-10 mr-2" />

            <Link
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                "text-lg font-bold leading-relaxed inline-block mr-4  py-1 whitespace-nowrap uppercase"
              }
              to="/"
              onClick={handleLoadAll}
            >
              ShopMart
            </Link>
            <button
              className="cursor-pointer text-black text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i
                className={
                  (props.transparent ? "text-red-600" : "text-black") +
                  " fas fa-bars"
                }
              ></i>
            </button>
          </div>
          <div className="w-2/5">
            <input
              onChange={handleSearchChange}
              className="border-2 w-3/4 border-gray-200"
            />{" "}
            <SearchIcon
              onClick={handleSearchSubmit}
              className="h-6 w-6 inline"
            />
          </div>

          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto mr-8 text-lg">
              <li className="flex items-center">
                <button
                  className="px-2 py-1 mr-2 bg-blue-300 text-indigo-800 hover:bg-blue-500 hover:text-white rounded"
                  onClick={() => window.open(" ")}
                >
                  Orders
                </button>
                {user ? (
                  <button
                    className="px-2 py-1 mr-2 bg-green-300 text-indigo-800 hover:bg-green-500 hover:text-white rounded"
                    onClick={() => navigate("/user/dashboard")}
                  >
                    Dashboard
                  </button>
                ) : (
                  <span></span>
                )}
                {user && (
                  <button
                    className="px-2 py-1 mr-2 bg-yellow-300 text-indigo-800 hover:bg-yellow-500 hover:text-white rounded"
                    onClick={hanldeOpenAllStreams}
                  >
                    Stores
                  </button>
                )}
                <Grid item xs={12} md={4}>
                  {user ? (
                    <span>
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleLogout}
                      >
                        Logout
                      </Button>
                    </span>
                  ) : (
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={handleLogin}
                    >
                      Login
                    </Button>
                  )}
                </Grid>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="h-6 bg-black text-white">
        <div class="dropdown relative z-40 inline-block mx-2">
          <button class=" text-gray-700 font-normal inline-flex items-center">
            <span class="mr-1 text-white">Electronics</span>
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                color="white"
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />{" "}
            </svg>
          </button>
          <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
            <li class="">
              <a
                class="rounded-t text-white bg-gray-700 hover:bg-gray-900 py-2 px-4 block whitespace-no-wrap"
                href="#"
                onClick={() => {
                  handleCategory("Mobiles");
                }}
              >
                Mobiles
              </a>
            </li>
            <li class="">
              <a
                class="text-white bg-gray-700 hover:bg-gray-900 py-2 px-4 block whitespace-no-wrap"
                href="#"
                onClick={() => {
                  handleCategory("Computers");
                }}
              >
                Computers
              </a>
            </li>
            <li class="">
              <a
                class="rounded-b text-white bg-gray-700 hover:bg-gray-900 py-2 px-4 block whitespace-no-wrap"
                href="#"
                onClick={() => {
                  handleCategory("TV");
                }}
              >
                TV
              </a>
            </li>
          </ul>
        </div>

        <div class="dropdown relative z-40 inline-block mx-2">
          <button class="text-gray-700 font-normal inline-flex items-center">
            <span class="mr-1 text-white">Fashion</span>
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                color="white"
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />{" "}
            </svg>
          </button>
          <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
            <li class="">
              <a
                class="rounded-t text-white bg-gray-700 hover:bg-gray-900 py-2 px-4 block whitespace-no-wrap"
                href="#"
                onClick={() => {
                  handleCategory("Men's Fashion");
                }}
              >
                Men's Fashion
              </a>
            </li>
            <li class="">
              <a
                class="rounded-b text-white bg-gray-700 hover:bg-gray-900 py-2 px-4 block whitespace-no-wrap"
                href="#"
                onClick={() => {
                  handleCategory("Kid's Fashion");
                }}
              >
                Kid's Fashion
              </a>
            </li>
            <li class="">
              <a
                class="rounded-b text-white bg-gray-700 hover:bg-gray-900 py-2 px-4 block whitespace-no-wrap"
                href="#"
                onClick={() => {
                  handleCategory("Women's Fashion");
                }}
              >
                Women's Fashion
              </a>
            </li>
          </ul>
        </div>

        <div class="dropdown relative z-40 inline-block mx-2">
          <button class=" text-gray-700 font-normal inline-flex items-center">
            <span class="mr-1 text-white">Appliances</span>
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                color="white"
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />{" "}
            </svg>
          </button>
          <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
            <li class="">
              <a
                class="rounded-t text-white bg-gray-700 hover:bg-gray-900 py-2 px-4 block whitespace-no-wrap"
                href="#"
                onClick={() => {
                  handleCategory("Home");
                }}
              >
                Home
              </a>
            </li>
            <li class="">
              <a
                class="rounded-b text-white bg-gray-700 hover:bg-gray-900 py-2 px-4 block whitespace-no-wrap"
                href="#"
                onClick={() => {
                  handleCategory("Kitchen");
                }}
              >
                Kitchen
              </a>
            </li>
          </ul>
        </div>

        <div class="dropdown relative z-40 inline-block mx-2">
          <button class=" text-gray-700 font-normal inline-flex items-center">
            <span class="text-white mr-1">Health</span>
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                color="white"
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />{" "}
            </svg>
          </button>
          <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
            <li class="">
              <a
                class="rounded-t text-white bg-gray-700 hover:bg-gray-900 py-2 px-4 block whitespace-no-wrap"
                href="#"
                onClick={() => {
                  handleCategory("Grocery");
                }}
              >
                Grocery
              </a>
            </li>
            <li class="">
              <a
                class=" text-white bg-gray-700 hover:bg-gray-900 py-2 px-4 block whitespace-no-wrap"
                href="#"
                onClick={() => {
                  handleCategory("Sports");
                }}
              >
                Sports
              </a>
            </li>
            <li class="">
              <a
                class="rounded-b text-white bg-gray-700 hover:bg-gray-900 py-2 px-4 block whitespace-no-wrap"
                href="#"
                onClick={() => {
                  handleCategory("Fitness");
                }}
              >
                Fitness
              </a>
            </li>
          </ul>
        </div>

        <div class="dropdown relative z-40 inline-block mx-2">
          <button class=" text-gray-700 font-normal inline-flex items-center">
            <span class="text-white mr-1">Luggage</span>
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                color="white"
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />{" "}
            </svg>
          </button>
          <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
            <li class="">
              <a
                class="rounded-t text-white bg-gray-700 hover:bg-gray-900 py-2 px-4 block whitespace-no-wrap"
                href="#"
                onClick={() => {
                  handleCategory("Luggage");
                }}
              >
                Luggage
              </a>
            </li>
            <li class="">
              <a
                class="rounded-b text-white bg-gray-700 hover:bg-gray-900 py-2 px-4 block whitespace-no-wrap"
                href="#"
                onClick={() => {
                  handleCategory("Bags");
                }}
              >
                Bags
              </a>
            </li>
          </ul>
        </div>

        <div class="dropdown relative z-40 inline-block mx-2">
          <button class=" text-gray-700 font-normal inline-flex items-center">
            <span class="text-white mr-1">Misc</span>
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                color="white"
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />{" "}
            </svg>
          </button>
          <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
            <li class="">
              <a
                class="rounded-t text-white bg-gray-700 hover:bg-gray-900 py-2 px-4 block whitespace-no-wrap"
                href="#"
                onClick={() => {
                  handleCategory("Toys");
                }}
              >
                Toys
              </a>
            </li>
            <li class="">
              <a
                class=" text-white bg-gray-700 hover:bg-gray-900 py-2 px-4 block whitespace-no-wrap"
                href="#"
                onClick={() => {
                  handleCategory("Baby Products");
                }}
              >
                Baby Products
              </a>
            </li>
            <li class="">
              <a
                class=" text-white bg-gray-700 hover:bg-gray-900 py-2 px-4 block whitespace-no-wrap"
                href="#"
                onClick={() => {
                  handleCategory("Books");
                }}
              >
                Books
              </a>
            </li>
            <li class="">
              <a
                class="rounded-b text-white bg-gray-700 hover:bg-gray-900 py-2 px-4 block whitespace-no-wrap"
                href="#"
                onClick={() => {
                  handleCategory("Video Games");
                }}
              >
                Video Games
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
    //  <Grid container align="center">
    //      <Grid>
    //           <Typography variant="h6">Demo-Interview</Typography>
    //      </Grid>

    //  </Grid>
  );
};

export default Navbar;
