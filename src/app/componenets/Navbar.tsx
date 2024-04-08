"use client";

import Image from "next/image";
import React, { useState } from "react";
import {Link} from "react-router-dom"
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import Login from "./Login";

const modalstyle = {
  width: "70%",
  height: "90%",
  top: "10%",
  left: "1%",
};

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="mb-[100px]">
      <nav className="w-full bg-yellow-400 fixed top-0 left-0 right-0 z-10 ">
        <div className="items-center justify-between my-auto mx-auto lg:max-w-7xl md:items-center md:flex mt-5">
          <div>
            <div className="flex items-center justify-between md:py-5 md:block">
              <Link to="/">
                <Image
                  src="/8-removebg-preview.png"
                  height={150}
                  width={370}
                  alt="logo"
                />
              </Link>

              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <MenuIcon width={30} height={30} alt="logo" />
                  ) : (
                    <MenuIcon
                      alt="logo"
                      className="focus:border-none active:border-none"
                      width={30}
                      height={30}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  md:hover:bg-transparent">
                  <Link
                    className="flex justify-center align-middle"
                    to="/about"
                    onClick={() => setNavbar(!navbar)}
                  >
                    <input
                      placeholder=" Search for kitchen, paintings, decorware and more"
                      className="w-[560px] h-[40px] outline-none rounded-lg text-black"
                    ></input>
                    <SearchIcon className="mt-2 ml-2 text-black" />
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  md:hover:bg-transparent">
                  <Link
                    className="flex text-black"
                    to="#Wishlist"
                    onClick={() => setNavbar(!navbar)}
                  >
                    <FavoriteIcon />
                    Wishlist
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  md:hover:bg-transparent">
                  <Link
                    className="flex text-black"
                    to="/cart"
                    onClick={() => setNavbar(!navbar)}
                  >
                    <ShoppingCartIcon />
                    Cart
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0   md:hover:bg-transparent">
                  <Link
                    className="flex text-black"
                    to="#Notifications"
                    onClick={() => setNavbar(!navbar)}
                  >
                    <NotificationsIcon />
                    Notifications
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0 md:hover:bg-transparent">
                  <Link to="#Sign-In" onClick={() => setNavbar(!navbar)}>
                    <div>
                      <button
                        className="bg-[#f8fafc] text-black w-[100px] py-2 rounded-full hover:bg-slate-600"
                        onClick={handleOpen}
                      >
                        Sign In
                      </button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        sx={modalstyle}
                      >
                        <Login />
                      </Modal>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
