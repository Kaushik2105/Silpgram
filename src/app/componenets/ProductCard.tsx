"use client";

import Image from "next/image";
import { formatNumber } from "../utils/format";

//change it using card.tsx
import CoffeeImage from "@/app/image/1.jpeg";

import { useTransition } from "react";
import { addItem } from "../addtocart/action";
import { startTransition } from "react";

type ProductCartProps = {
  id: number;
  name: string;
  price: number;
};
export default function ProductCard({ id, name, price }: ProductCartProps) {
  let [isPending, startTransaction] = useTransition();
  return (
    <div className="border p-3 rounded-xl border-slate-700">
      <div className="bg-gray-300 rounded-md mb-2">
        <Image
          src={CoffeeImage}
          alt="coffee"
          className="w-[180px] h-[180px] rounded object-cover"
        />
      </div>
      <h2 className="text-slate-400">{name}</h2>
      <h2 className="font-semibold text-green-400">$ {formatNumber(price)}</h2>
      <button
        onClick={() => startTransition(() => addItem(id))}
        className="mt-4 font-semibold text-sm bg-slate-100 text-slate-800 rounded-md px-2 py-1 text-center w-full"
      >
        Add To Cart
      </button>
    </div>
  );
}
