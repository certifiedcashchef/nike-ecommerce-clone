import { SiNike } from "react-icons/si";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Bebas_Neue, Titillium_Web } from "next/font/google";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  display: "swap",
});

const Header = ({ handleOpenModal }: { handleOpenModal: () => void }) => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <header
      className={`${bebas.className} w-full h-[100px] mb-28 flex justify-between items-center p-10 text-xl`}
    >
      <div id="logo" className="flex items-center gap-4">
        <Link className="active:scale-95 transition-transform" href="/">
          <SiNike className="hover:opacity-70 " size={75} fill="#1d1d1f" />
        </Link>
        <div id="line" className="w-1 h-8 bg-[#1d1d1f] hidden md:block"></div>
        <h2 className={`${titillium.className} font-black hidden md:block `}>
          Just Do It.
        </h2>
      </div>
      <nav className="hidden md:flex">
        <ul className="flex items-center gap-12">
          <li className="hover:opacity-70">
            <Link href="men">Men</Link>
          </li>
          <li className="hover:opacity-70">
            <Link href="women">Women</Link>
          </li>
          <li className="hover:opacity-70">
            <Link href="news">News</Link>
          </li>
          <li className="hover:opacity-70">
            <Link href="sale">Discount & Sale</Link>
          </li>
        </ul>
      </nav>

      <div id="btns" className="hidden md:flex  items-center gap-10">
        <Link href="/cart">
          <div className="border-[#1d1d1f] border-[1px] active:scale-95 transition-transform rounded-full relative py-1 px-3 flex items-center justify-center gap-1 cursor-pointer hover:text-[#f5f5f7] hover:bg-[#1d1d1f]">
            {cart.length > 0 ? (
              <div className="bg-[#f63e54] w-6 h-4  rounded-full absolute -top-2 -right-1 flex items-center justify-center">
                <span className="text-white text-[0.8rem]">{cart.length}</span>
              </div>
            ) : null}

            <h2 className="">Cart</h2>
            <AiOutlineShoppingCart size={18} />
          </div>
        </Link>

        <Link href="/shop">
          <div className="bg-[#1d1d1f] active:scale-95 transition-transform rounded-full py-2 px-4 flex items-center justify-center hover:opacity-70 cursor-pointer">
            <h2 className="text-[#f5f5f7]">Shopping</h2>
          </div>
        </Link>
      </div>

      <div className="block md:hidden cursor-pointer relative">
        {cart.length > 0 ? (
          <div className="bg-[#f63e54] w-4 h-4 rounded-full absolute -top-2 -right-2 flex items-center justify-center">
            <span className="text-white text-[0.7rem]">{cart.length}</span>
          </div>
        ) : null}
        <div
          onClick={handleOpenModal}
          className="w-10 h-10 p-2 rounded-full flex justify-center items-center active:scale-95 transition-transform hover:bg-[#1d1d1f]/10 "
        >
          <BiMenuAltRight className="" size={25} />
        </div>
      </div>
    </header>
  );
};

export default Header;
