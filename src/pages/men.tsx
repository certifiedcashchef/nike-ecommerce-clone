import Head from "next/head";

import { Titillium_Web, Roboto } from "next/font/google";
import { GiBasketballBasket } from "react-icons/gi";
import mensneaker from "../../public/images/men.png";
import Image from "next/image";

const titillium = Titillium_Web({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["200", "300", "400", "600", "700", "900"],
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export default function Men() {
  return (
    <>
      <Head>
        <title>Nike - Just Do It.</title>
        <meta name="description" content="Nike store clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-10 ">
        <section
          id="menSection"
          className="h-screen flex flex-col justify-center gap-3 lg:gap-0 lg:flex-row items-center"
        >
          <div id="text" className="flex flex-col ">
            <h2 className={`${titillium.className} font-black text-2xl`}>
              Just Do It.
            </h2>
            <p className={`${titillium.className} font-bold italic text-xl`}>
              {"//"} BASED ON OUR CUSTOMERS FEEDBACKS NIKE IS THE BEST CHOICE
              FOR NBA PLAYERS ---{" "}
              <GiBasketballBasket className="inline" size={25} fill="#f63e3e" />
            </p>
            <p
              className={`${roboto.className} font-bold  max-w-[30rem] text-sm opacity-50`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              eligendi expedita magni ipsa beatae sequi ullam porro natus,
              reiciendis totam corrupti! Sapiente quisquam esse architecto?
            </p>
          </div>

          <Image src={mensneaker} alt="" width={550} height={550} />
        </section>
      </main>
    </>
  );
}
