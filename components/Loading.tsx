import { SiNike } from "react-icons/si"
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
});

const Loading = () => {
  return (

      <div className={`${urbanist.className} font-bold fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[#cacaca] z-50`}>
        <SiNike  size={75} fill="#1d1d1f" />
        Loading...
        </div>
  )
}

export default Loading