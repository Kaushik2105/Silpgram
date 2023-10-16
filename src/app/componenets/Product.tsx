"use client";
import React, { useState } from "react";
import Image from "next/image";
import Magnifier from "react-magnifier";
import RecentlyViewedSlider from "./RecentlyViewedSlider";

import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";
import ProductSlider from "./ProductSlider";

function Product(props: {
  category: string;
  name: string;
  price: number;
  width: number;
  height: number;
  availability: boolean;
  description: string;
  sku: string;
  storeName: string;
  vendor: string;
  address: string;
}) {
  const [quantity, setQuantity] = useState(1);

  function increase() {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity);
    }
  }

  function decrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(quantity);
    }
  }

  const source = "/1.jpeg";
  return (
    <div>
      <div className="flex flex-col pr-1000 mt-1000">
      <div className="flex p-3 px-3 bg-[#FFFEE1] h-full">
        <div className="p-11 flex">
          {/* <Image src='/h.png' height={551} width={736} alt={props.name}/> */}
          <Magnifier src="/h.jpeg" width={736} height={551} />
          <div className="flex flex-col">
            <TwitterShareButton url={window.location.href}>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <WhatsappShareButton url={window.location.href}>
              <WhatsappIcon size={32} round={true} className="mt-1" />
            </WhatsappShareButton>
            <FacebookShareButton url={window.location.href}>
              <FacebookIcon size={32} round={true} className="mt-1" />
            </FacebookShareButton>
          </div>
        </div>
        <div className="flex flex-col px-4">
          <h4 className="text-[#6F006A] font-bold">{props.category}</h4>
          <h2 className="text-[#272727] font-bold text-3xl">{props.name}</h2>
          <h2 className="text-[#EC8E01] text-2xl font-[600] py-1">
            ₹ {props.price}
          </h2>
          <h6 className="text-xs">*Free shipping over ₹400</h6>
          <h4 className="pt-4">
            <span className="font-semibold">Dimension:</span> {props.width} inch
            X {props.height} inch{" "}
          </h4>
          <h4 className="pb-3">
            <span className="font-semibold">Availability:</span>{" "}
            {props.availability ? "In Stock" : "No"}
          </h4>
          <h5 className="font-serif pb-3">{props.description}</h5>

          <div className="flex mb-3">
            <h4>
              {" "}
              <span className="font-semibold text-[#454545]">
                QUANTITY:
              </span>{" "}
              <button className="h-[25px] w-[30px] rounded-md bg-slate-100 text-center">
                {quantity}
              </button>
            </h4>
            <button className="h-[20px] w-[20px] text-lg" onClick={increase}>
              +
            </button>
            <button className="h-[20px] w-[20px] text-xl" onClick={decrease}>
              -
            </button>
          </div>
          <button className="bg-orange-400 text-[#FFFFFF] font-bold w-40 h-12 rounded-md">
            ADD TO CART
          </button>
        </div>
      </div>

      <div className="flex">
        <div></div>
        <div className="flex flex-col m-4 ">
          <h4 className="font-semibold text-[#454545]">About the seller:</h4>
          <ul>
            <li>
              <span className="text-[#454545]">Store Name: </span>
              {props.storeName}
            </li>
            <li>
              <span className="text-[#454545]">Vendor: </span>
              {props.vendor}
            </li>
            <li>
              <span className="text-[#454545]">Address: </span>
              {props.address}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <ProductSlider/>
    </div>
  );
}

export default Product;
