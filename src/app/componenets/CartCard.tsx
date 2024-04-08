import React from "react";
import Image from "next/image";
import photo from "../../../public/h.jpeg"
import { XCircle } from "lucide-react";

function Card(props: { name: string; quantity: number; price: number }) {
  return (
    <div className="bg-white rounded-md md:w-11/12 h-1/4 md:flex md:flex-row md:justify-between sm:flex sm:flex-row m-5">
      <div className="md:flex md:flex-row sm:flex sm:flex-row">
        <img
          src="../../../public/h.jpeg"
          alt="logo"
          className="h-[200px] w-full md:w-[160px] md:h-[160px] sm:w-max items-center p-3 rounded-md"
        />
        <div className="md:flex md:flex-col md:w-5/6 sm:flex sm:flex-col p-5  sm:w-1/2">
          <h4 className="text-5xl text-left font-semibold font-sans ">
            {props.name}
          </h4>
          <h4 className="text-lg text-left ">Quantity: {props.quantity}</h4>
          <h4 className="text-4xl font-semibold font-sans text-[#f97316] text-left ">
            ₹{props.price}
          </h4>
        </div>
      </div>
      <div className="md:w-1/12 w-full flex flex-row justify-center sm:justify-end md:justify-end">
        <XCircle size={36} strokeWidth={1.5} className="mt-2" />
      </div>
    </div>
  );
}

export default Card;


