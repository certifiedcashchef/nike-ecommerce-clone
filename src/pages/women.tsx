import Head from 'next/head'



import { Titillium_Web, Roboto } from "next/font/google";
import { FaRegGem } from 'react-icons/fa';
import womensneaker from "../../public/images/women.png"
import Image from 'next/image';



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







export default function Women() {
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
      id="womenSection"
      className="h-screen flex flex-col justify-center gap-3 lg:gap-0 lg:flex-row items-center"
    >

<div id="text" className='flex flex-col '>
<h1 className={`${titillium.className} font-black text-2xl`}>Just Do It.</h1>

<p className={`${titillium.className} font-bold italic text-xl`}>
{"//"} GEAR UP FOR TRAINING, SPORT & LIFESTYLE --- <FaRegGem className='inline' size={25} fill='#f63ebc'/>
</p>
<p className={`${roboto.className} font-bold max-w-[30rem] text-sm  opacity-50`}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolores fuga voluptatum eius facilis maiores libero et mollitia neque doloremque necessitatibus, consectetur assumenda modi consequatur!
</p>
</div>



<Image src={womensneaker} alt='' width={500} height={500}/>
    </section>
  </main>






   
    </>
  )
}
