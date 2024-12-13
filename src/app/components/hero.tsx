import Image from "next/image";
import profile from "../../../image/profile.jpeg";
    export default function Hero (){
    return(
        <div  className="w-auto  mx-9 flex flex-col-reverse items-center gap-10 py-[100px] lg:flex lg:flex-row lg:px-[50px] lg:gap-20 ">
            <div className="flex flex-col  mx-[20px] lg:mx-[0px] gap-[40px]  lg:gap-[60px]">
              <h2  className="font-sans font-bold text-2xl lg:text-3xl  text-amber-600">Hello I`m</h2>
              <h1 className="font-sans font-extrabold text-4xl lg:text-5xl tracking-wide leading-[50px] text-white">Muhammad Anus</h1>
              <h3 className="font-sans font-bold text-lg lg:text-3xl text-cyan-600 ">Front-End Developer</h3>
              <p className="font-sans font-medium lg:font-semibold px-[0px] text-white">Welcome to my personal portfolio! I am a Front-End Developer with one year experience in building responsive and dynamic web applications.</p>
              <button className="w-[200px] h-[50px] bg-blue-400 hover:bg-blue-700 text-white rounded-xl font-sans font-bold lg:font-extrabold py-[10px] px-[10px] text-nowrap">Download CV</button>
            </div>
            <div >
               <Image className="w-[300px] h-[300px] lg:w-[800px] lg:h-[300px]  border-[6px] rounded-full lg:rounded-lg" src={profile} alt="profile"></Image>
            </div>
        </div>
    )
}