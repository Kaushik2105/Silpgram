"use client";

import Image from "next/image";
import React, { useState } from "react";
import {Link} from "react-router-dom"
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import StorefrontIcon from '@mui/icons-material/Storefront';
import Button from "@mui/material/Button";
import {yellow} from '@mui/material/colors';
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
  const ylow = yellow[50];

  return (
    <div className="mb-[100px]">
      <nav className="w-full bg-yellow-400 fixed top-0 left-0 right-0 z-10 ">
        <div className="items-center my-auto mx-auto md:items-center md:flex mt-3">
          <div>
            <div className="flex items-center justify-between ">
              <Link to="/" className="pl-16">
                <Image
                  src="/8-removebg-preview.png"
                  height={80}
                  width={170}
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
              <ul className="h-screen md:h-auto items-center justify-between md:flex ">
                <li className="pb-3 md:px-6 text-center border-b-2 md:border-b-0 md:hover:bg-transparent">
                  <div className="relative w-[630px] h-[40px]">
                    <input
                      placeholder=" Search for kitchen, paintings, decorware and more"
                      className="w-full h-full outline-none rounded-3xl text-black bg-lime-100 pl-5 pr-10"
                    />
                    <SearchIcon className="absolute cursor-pointer right-2 top-1/2 transform -translate-y-1/2 text-white bg-orange-500 rounded-full" />
                  </div>
                </li>
                <li className="pb-3 text-lg py-2 md:px-6 text-center border-b-2 md:border-b-0  md:hover:bg-transparent">
                  <Link
                    className="flex text-black"
                    to="#Wishlist"
                    onClick={() => setNavbar(!navbar)}
                  >
                    <FavoriteIcon className="text-amber-800" />
                    Wishlist
                  </Link>
                </li>
                <li className="pb-3 text-lg py-2 px-6 text-center  border-b-2 md:border-b-0  md:hover:bg-transparent">
                  <Link
                    className="flex text-black"
                    to="/cart"
                    onClick={() => setNavbar(!navbar)}
                  >
                    <ShoppingCartIcon className="text-amber-800" />
                    Cart
                  </Link>
                </li>
                <li className="pb-3 text-lg py-2 px-6 text-center  border-b-2 md:border-b-0   md:hover:bg-transparent">
                  <Link
                    className="flex text-black"
                    to="#Notifications"
                    onClick={() => setNavbar(!navbar)}
                  >
                    <NotificationsIcon className="text-amber-800" />
                    Notifications
                  </Link>
                </li>
                <li className="pb-3 text-base py-2 px-6 text-center  border-b-2 md:border-b-0   md:hover:bg-transparent">
                  {/* <Link
                    className="flex text-black outline-black"
                    to="#seller"
                    onClick={() => setNavbar(!navbar)}
                  >
                   <StorefrontIcon className="text-amber-800" />
                   Be a Seller 
                  </Link> */}
                </li>
                <li className="pb-3 text-lg py-2 px-6 text-center  border-b-2 md:border-b-0 md:hover:bg-transparent">
                  <div className="flex">
                    <Link to="#Sign-In" onClick={() => setNavbar(!navbar)}>
                        <button
                          className="flex-none bg-[#f8fafc] text-black w-[80px] py-2 rounded-xl hover:bg-slate-600"
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
                    </Link>
                  </div>
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
