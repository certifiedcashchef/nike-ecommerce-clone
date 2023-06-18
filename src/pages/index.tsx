import Head from 'next/head'


import { SiJordan } from "react-icons/si";
import { GiBurningMeteor } from "react-icons/gi";
import { Titillium_Web, Roboto } from "next/font/google";





const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  display: "swap",

});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",

});







export default function Home() {
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
      id="hero"
      className="h-screen flex justify-center md:justify-around items-center"
    >
      <div id="heroText" className=' min-w-fit'>
        <h2 className={`${roboto.className} text-xl `}>
          THE NEW COLLECTION
        </h2>
        <h2
          className={`${titillium.className} flex items-center whitespace-nowrap text-4xl font-black gap-1 `}
        >
          IS FINALLY HERE <GiBurningMeteor className='inline' size={30} />
        </h2>
      </div>
      <SiJordan size={600} className="hidden md:block " />
    </section>
  </main>






   
    </>
  )
}
