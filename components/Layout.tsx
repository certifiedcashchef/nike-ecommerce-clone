
import { ReactNode, useEffect, useState } from "react"
import Header from "./Header"
import MobileNavModal from "./MobileNavModal"
import { Router, useRouter } from "next/router"
import { Bebas_Neue } from "next/font/google"
import Loading from "./Loading"


interface IProps {
    children: ReactNode
}

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",

});


export default function Layout({ children }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
const router = useRouter();


  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  



  
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      if (!isMobile) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  useEffect(() => {
    setIsOpen(false);
  }, [router.asPath]);


  const [loading, setLoading] = useState(false)
Router.events.on("routeChangeStart", ()=> {
  setLoading(true)
})
Router.events.on("routeChangeComplete", ()=> {
  setLoading(false)
})


  return (
      <>
{loading ? <Loading /> : null}

      <Header handleOpenModal={handleOpenModal} />
      {/* <div className="h-fit w-full text-center bg-[#f6c23e]"><h1 className={`${bebas.className} text-2xl`}>THIS WEBSITE IN UNDER CONSTRUCTION, AND NOT COMPLETED YET.</h1></div> */}
{isOpen && (

          <MobileNavModal handleCloseModal={handleCloseModal} />
)}
        <main>{children}</main>
      </>
    )
  }