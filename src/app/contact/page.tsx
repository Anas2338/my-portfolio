import linkedin  from "../../../image/linkedin.png";
import email from "../../../image/email.png";
import whatsapp  from "../../../image/whatsapp.png";
import  twitter from "../../../image/twitter.png";
import facebook  from "../../../image/facebook.png";
import call from "../../../image/call.png";
import Image from "next/image"
export default function Contact (){
    return(
        <div className="w-auto flex flex-col gap-[100px] mx-[20px]  py-[40px] ">
            <div className="text-center">
                <h1 className="font-serif font-bold text-4xl sm:text-5xl leading-[40px] tracking-wide text-[#252B42]">Contact Me</h1>
            </div>
            <div className="text-white flex flex-col gap-10 sm:grid sm:grid-cols-2 sm:gap-14 sm:px-[20px] lg:px-[40px]">
                <button>
                    <div className="flex w-auto h-[80px] border-2 border-white bg-blue-900 rounded-3xl items-center gap-3 pl-4">
                        <div><Image className="w-[50px] h-[50px] rounded-2xl" src={linkedin} alt="logo"></Image></div>
                        <div><h1 className="font-mono font-extrabold text-xl leading-6 text-center">LinkedIn Profile</h1></div>
                    </div>
                </button>
                <button>
                    <div className="flex w-auto h-[80px] border-2 border-white bg-blue-900 rounded-3xl items-center gap-3 pl-4">
                        <div><Image className="w-[50px] h-[50px] rounded-2xl" src={email} alt="logo"></Image></div>
                        <div><h1 className="font-mono font-extrabold  text-xl leading-6 text-center ">mohdanus20@gmail.com</h1></div>
                    </div>
                </button>
                <button>
                    <div className="flex w-auto h-[80px] border-2 border-white bg-blue-900 rounded-3xl items-center gap-3 pl-4">
                        <div><Image className="w-[50px] h-[50px] rounded-2xl" src={twitter} alt="logo"></Image></div>
                        <div><h1 className="font-mono font-extrabold  text-xl leading-6 text-center ">Twitter</h1></div>
                    </div>
                </button>
                <button>
                    <div className="flex w-auto h-[80px] border-2 border-white bg-blue-900 rounded-3xl items-center gap-3 pl-4">
                        <div><Image className="w-[50px] h-[50px] rounded-2xl" src={whatsapp} alt="logo"></Image></div>
                        <div><h1 className="font-mono font-extrabold  text-xl leading-6 text-center ">0336-2338915</h1></div>
                    </div>
                </button>
                <button>
                    <div className="flex w-auto h-[80px] border-2 border-white bg-blue-900 rounded-3xl items-center gap-3 pl-4">
                        <div><Image className="w-[50px] h-[50px] rounded-2xl" src={facebook} alt="logo"></Image></div>
                        <div><h1 className="font-mono font-extrabold  text-xl leading-6 text-center ">محمد انس</h1></div>
                    </div>
                </button>
                <button>
                    <div className="flex w-auto h-[80px] border-2 border-white bg-blue-900 rounded-3xl items-center gap-3 pl-4">
                        <div><Image className="w-[50px] h-[50px] rounded-2xl" src={call} alt="logo"></Image></div>
                        <div><h1 className="font-mono font-extrabold  text-xl leading-6 text-center ">+92-336-2338915</h1></div>
                    </div>
                </button>
            </div>
        </div> 
    )
}