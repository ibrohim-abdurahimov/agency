import Header from "@/components/Header";
import Image from "next/image";
import im from "@/assets/home.png"
import lo from '@/assets/logo (10).svg'

export default function Home() {
  return (
    <div className="bg-[#232536] text-white  border border-[#FFFFFF0D] pb-8">
      <div className="container m-auto flex justify-between pt-24 gap-24">
        <div className="pt-[56px]">
          <h1 className="text-[56px] font-semibold leading-[4.3rem] font-sans w-[600px]">
            Transform Your Idea Into Reality with Finsweet
          </h1>
          <p className="mt-6 text-base opacity-65 w-[525px]">
            The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.
          </p>
          <button className="py-5 pl-8 pr-12 bg-[#444CFC] mt-8">Request Quote</button>
        </div>
        <div>
          <Image src={im} alt="foto"/>
        </div>
      </div>
      <div className="container m-auto mt-8 flex items-center p-6 gap-8">
        <div className="flex-1">
          <p className="text-sm opacity-75">Our Clients</p>
          <p className="mt-1 text-lg">We've Worked with</p>
        </div>
        <div className="flex gap-8">
          <div className="py-10 px-6">
            <Image src={lo} alt="logo"/>
          </div>
          <div className="py-10 px-6">
            <Image src={lo} alt="logo"/>
          </div>
          <div className="py-10 px-6">
            <Image src={lo} alt="logo"/>
          </div>
          <div className="py-10 px-6">
            <Image src={lo} alt="logo"/>
          </div>
          <div className="py-10 px-6">
            <Image src={lo} alt="logo"/>
          </div>
        </div>
      </div>
    </div>
  );
}
