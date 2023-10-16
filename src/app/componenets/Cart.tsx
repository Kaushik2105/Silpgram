import React from "react";
import CartCard from "./Card";

function Cart() {
  return (
    <div className="bg-[#fcd34d] md:flex md:flex-row   sm:flex-col justify-between">
      <div className="md:w-3/5 sm:w-screen h-full">
        <h2 className="font-semibold text-5xl mt-10 mx-3">Shopping Cart</h2>

        <div className="h-full">
          <CartCard name="Items" quantity={10} price={100.0} />
          <CartCard name="Items" quantity={10} price={100.0} />
          <CartCard name="Items" quantity={10} price={100.0} />
          <CartCard name="Items" quantity={10} price={100.0} />
          <CartCard name="Items" quantity={10} price={100.0} />
          <CartCard name="Items" quantity={10} price={100.0} />
          <CartCard name="Items" quantity={10} price={100.0} />
        </div>
      </div>

      <div className="bg-orange-200 sm:w-screen flex flex-col md:rounded-tl-[100px] p-[100px] md:w-2/5 h-max md:sticky">
        <h2 className="text-center font-[650] text-[#4b5563] text-4xl pb-10 sm:text-2xl">
          Cart Summary
        </h2>

        <div className="flex flex-col p-10">
          <div className="flex justify-between">
            <h4 className="font-semibold text-[28px]">Username</h4>
            <h6 className="text-[#f97316] font-bold underline">edit</h6>
          </div>
          <h5 className="text-[#64748b]">Address line 1</h5>
          <h5 className="text-[#64748b]">Address line 2</h5>
          <h5 className="text-[#64748b]">Address line 3</h5>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col">
            <h5 className="font-semibold text-[22px]">
              Do you have any coupon code ?
            </h5>
            <h5 className="text-[#64748b] md:text-[11px] sm:text-[11px]">
              Only one coupon code is applicable{" "}
            </h5>
          </div>
          <div className="flex justify-between">
            <input
              type="text"
              className="w-[300px] rounded-sm bg-white outline-2 outline-gray-50 mt-1 "
            ></input>
            <button className="bg-[#f97316] text-[#FFFFFF] text-lg w-[80px] h-9 rounded-md ml-2">
              Apply
            </button>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <div className="flex flex-col">
            <h5 className="font-semibold text-[22px]">Subtotal(3 items):</h5>
            <h5 className="font-semibold text-[22px]">Discount:</h5>
            <h5 className="font-semibold text-[22px]">Delivery Charges:</h5>
          </div>

          <div className="flex flex-col">
            <h5 className="text-[22px] text-[#475569] font-semibold">XXX</h5>
            <h5 className="text-[22px] text-[#475569] font-semibold">-XXX</h5>
            <h5 className="text-[22px] text-[#475569] font-semibold">FREE!!</h5>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <h6 className="text-[#374151] text-3xl font-bold">XXX</h6>
          <button className="bg-[#f97316] text-[#FFFFFF] text-lg w-40 h-12 rounded-md">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
