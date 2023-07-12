import Head from "next/head";
import { Urbanist } from "next/font/google";
import Link from "next/link";





const urbanist = Urbanist({
    subsets: ["latin"],
    display: "swap",
  });

export default function succeeded() {
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
          className="flex justify-center items-center flex-col"
        >

   <div className={`${urbanist.className} mt-10 font-extrabold border-2  border-[#1d1d1f] py-5 px-10`}>
    <p>Thank you for shopping!</p>
    <p>Your order has been placed successfully</p>
    <p className="font-medium mt-3">For any issues please contact us via email</p>
    <p className="font-medium mb-3">00000@00000.000</p>
<Link href="shop">
    <p className="font-black underline">Continue shopping</p>

</Link>


   </div>



        </section>
      </main>
    </>
  );
}
