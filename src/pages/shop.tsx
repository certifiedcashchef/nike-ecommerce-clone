

import { Titillium_Web, Roboto,Bebas_Neue } from "next/font/google";
import Head from "next/head";
import { TbCurrencyDollar } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import Image from "next/image";
import { RootState } from "../../redux/store";

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


  const bebas = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
      display: "swap",
  
  });




export default function Men() {

const products = useSelector((state: RootState) => state.products)
const dispatch = useDispatch()




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
        className="h-screen flex justify-center md:justify-around items-start mb-56 "
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 ">







{products.map((product) => (      
  
  <div 
  key={product.id}
  
  className={`${roboto.className} w-80 h-96  p-4  flex flex-col justify-around`}>
  <div className="w-full h-40 flex items-center justify-center bg-[#1d1d1f]/5">
  <Image src={product.img} alt="Product Image" width={200} height={200}/>

  </div>
          <div id="productText" className="">
          <div id="productDescription" className="mb-4">
            <h1 className={`${bebas.className} text-3xl font-bold  `} >{product.name}</h1>
            <p className={`font-medium text-sm opacity-50`}>{product.category}</p>
            <p className={`font-medium text-xs opacity-50`}>{product.color}</p>
            
          </div>
  
          <div id="productPrice" className="flex justify-between items-center">
            <h1 className={`flex items-center text-base font-medium`}>
              <TbCurrencyDollar />
              USD {product.price}
            </h1>
            <h1 className={`text-base font-medium underline cursor-pointer active:scale-95 transition-transform hover:opacity-70`} onClick={() => dispatch(addToCart(product))}>Add to cart</h1>
          </div>
          </div>
  
        </div>

) )}
 
        </div>
      </section>
    </main>





   
    </>
  )
}
