import Head from "next/head";

import { SiNike } from "react-icons/si";
import { FaOpencart } from "react-icons/fa";
import { IoStorefrontOutline } from "react-icons/io5";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import { Titillium_Web, Roboto, Bebas_Neue, Urbanist } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";

import {
  clear,
  increaseCart,
  deleteFromCart,
  decreaseCart,
} from "../../redux/slices/cartSlice";
import { AiOutlineDelete } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { TbCurrencyDollar } from "react-icons/tb";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { RootState } from "../../redux/store";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],

  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Checkout() {
  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart);

  const totalPrice = cart.reduce((acc:number, item) => {
    acc += item.price * item.quantity;
    return acc;
  }, 0);

  return (
    <>
      <Head>
        <title>Nike - Just Do It.</title>
        <meta name="description" content="Nike store clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-10  ">
        {cart.length > 0 ? (
          <section
            id="checkout"
            className={`${urbanist.className} min-h-screen flex flex-col justify-start  lg:px-20  items-center gap-8`}
          >
            <div className="flex flex-col items-center justify-center">
              <SiNike className="" size={75} fill="#1d1d1f" />
              <h1 className={`font-black tracking-[1rem]`}>CHECKOUT</h1>
            </div>

            <div
              id="cartAndSummary"
              className=" w-full grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div
                id="cart"
                className="flex flex-col col-span-2"
              >
                <h1 className="font-bold mb-4">Cart items</h1>

                {cart.map((item) => (
                  <div
                    key={item.id}
                    id="item"
                    className="flex items-center mb-4 border-b-4 border-gray-200/20 "
                  >
                    <div
                      id="imgContainer"
                      className="shrink-0 aspect-square  flex items-center justify-center w-[75px] md:w-[120px] bg-[#1d1d1f]/5"
                    >
                      <Image
                        src={item.img}
                        alt="Product Image"
                        width={100}
                        height={100}
                      />
                    </div>

                    <div id="details" className="w-full px-6">
                      <div
                        id="namePrice"
                        className="flex items-center justify-between  "
                      >
                        <h1 className={` text-xl md:text-2xl  font-semibold`}>
                          {item.name}
                        </h1>
                        <span
                          className={`${roboto.className} text-xs font-bold opacity-50`}
                        >
                          USD: <TbCurrencyDollar className="inline" />
                          {item.price}
                        </span>
                      </div>

                      <p id="description" className={` text-xs opacity-50`}>
                        {item.category}
                      </p>

                      <div
                        id="quantityDelete"
                        className="flex items-center justify-between mt-4"
                      >
                        <div id="quantity" className="flex items-center gap-4">
                          <p className={`text-xs opacity-50 font-black`}>
                            Quantity:
                          </p>
                          <div className="w-16 px-2 border-[#1d1d1f]/10 border-[3px] rounded-full flex items-center justify-between">
                            <BsFillCaretLeftFill
                              size={11}
                              className="hover:cursor-pointer "
                              fill="#959595"
                              onClick={() => dispatch(decreaseCart(item))}
                            />
                            <span
                              className={`${titillium.className} font-black text-xs`}
                            >
                              {item.quantity}
                            </span>
                            <BsFillCaretRightFill
                              size={11}
                              className="hover:cursor-pointer  "
                              fill="#959595"
                              onClick={() => dispatch(increaseCart(item))}
                            />
                          </div>
                        </div>

                        <AiOutlineDelete
                          size={15}
                          className="hover:cursor-pointer "
                          fill="#f63e3e"
                          onClick={() => dispatch(deleteFromCart(item))}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="">
                <h1 className="font-bold mb-4">Summary</h1>

                <div className="p-4 px-6 bg-green-100/20 rounded-xl">
                  <div className="flex items-center justify-between mb-5">
                    <h1 className="font-black">SUBTOTAL</h1>
                    <span className="flex items-center font-black gap-1">
                      <RiMoneyDollarBoxLine />
                      {totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <p className="font-medium text-xs mb-8">
                    The subtotal reflects the total price of your order.
                    including duties and taxes. before any applicable discounts.
                    It does not include delivery costs and international
                    transaction fees
                  </p>
                </div>
                <div id="btns" className={`${bebas.className} flex w-full gap-4 mt-3`}> 

<h3
              className={` py-2 px-6 w-[50%] active:scale-95 transition-transform rounded-full hover:opacity-75 hover:cursor-pointer bg-[#f5f5f7] flex items-center  justify-center text-[#f63e3e] `}
              onClick={() => dispatch(clear())}
            >
              CLEAR
            </h3>

            <Link href="succeeded" className="bg-[#1d1d1f] active:scale-95 transition-transform rounded-full py-2 px-6 hover:opacity-75 w-[50%] text-[#f5f5f7] flex items-center  justify-center">

<h3>
  CHECKOUT
  </h3> 
            </Link>



</div>
              </div>
            </div>




          </section>
        ) : (
          <section
            id="emptyCart"
            className={`${urbanist.className} h-screen flex flex-col justify-start  items-center gap-8`}
          >
            <div className="flex flex-col items-center justify-center">
              <IoStorefrontOutline className="" size={150} fill="#1d1d1f" />
              <h1 className="font-bold text-xl">
                Your cart is empty
              </h1>
              <p className="text-center font-medium mt-3">
                Looks like you have not added anything in your cart.
                <br/>
                Go ahead and explore products.
              </p>
            </div>
            <Link href="/shop">
            <h1 className="bg-[#1d1d1f] active:scale-95 transition-transform rounded-full py-3 px-8 hover:opacity-75  hover:cursor-pointer text-[#f5f5f7] text-sm flex items-center  justify-center">
  Continue Shopping
  </h1> 
            </Link>
          </section>
        )}
      </main>
    </>
  );
}
