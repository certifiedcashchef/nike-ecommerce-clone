import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineCloseSquare, AiOutlineShop } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import { SiNike } from "react-icons/si";
import { Bebas_Neue } from "next/font/google";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";


const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",

});


const MobileNavModal = ({handleCloseModal}: any) => {
 
 
  const cart = useSelector((state: RootState) => state.cart)

 
 
  return (
    <div className="fixed  inset-0 z-50 md:hidden flex items-center justify-center">
      <div className="bg-white w-full h-full max-w-screen-lg mx-auto py-4 px-7  ">

        <div className="flex items-center justify-between">

        <Link className="active:scale-95 transition-transform" href="/"><SiNike className="hover:opacity-70 " size={50} fill="#1d1d1f" /></Link>


          <div className="flex items-center  ">
     
     
     
            <Link href="/cart">
          <div className="w-8 h-8 p-1 relative cursor-pointer rounded-full flex justify-center items-center active:scale-95 transition-transform hover:bg-[#1d1d1f]/10 ">
            <TiShoppingCart size={20} />
 

 

              {cart.length > 0 ? 
      <div className="bg-[#f63e54] w-3 h-3 animate-ping rounded-full absolute top-0 right-0 flex items-center justify-center"></div>
      : null
    }
</div>
    </Link> 




            <Link href="/shop">
          <div className="w-8 h-8 p-1 cursor-pointer rounded-full flex justify-center items-center active:scale-95 transition-transform hover:bg-[#1d1d1f]/10 ">
            <AiOutlineShop size={20} />

  
</div>
              </Link> 



          <div onClick={handleCloseModal} className="w-8 h-8 p-1 cursor-pointer rounded-full flex justify-center items-center active:scale-95 transition-transform hover:bg-[#1d1d1f]/10 ">
 <AiOutlineCloseSquare size={20} />
</div>



          </div>
        </div>

        <nav className={`${bebas.className} mt-16`}>
        <ul className="flex flex-col  gap-10 ">
          <li className="hover:opacity-70 text-2xl border-t-2 border-b-2 border-gray-200/70 py-3 cursor-pointer"><Link href="men">Men</Link></li>
          <li className="hover:opacity-70 text-2xl border-t-2 border-b-2 border-gray-200/70 py-3 cursor-pointer"><Link href="women">Women</Link></li>
          <li className="hover:opacity-70 text-2xl border-t-2 border-b-2 border-gray-200/70 py-3 cursor-pointer"><Link href="news">News</Link></li>
          <li className="hover:opacity-70 text-2xl border-t-2 border-b-2 border-gray-200/70 py-3 cursor-pointer"><Link href="sale">Discount & Sale</Link></li>
        </ul>
      </nav>

      </div>
    </div>
  );
};

export default MobileNavModal;
