import Image from "next/image";
import trading  from "../../../image/trading.png";
import stenography  from "../../../image/stenography.png";
import repairing from "../../../image/electrical.png";
import webdevelopment  from "../../../image/web development.png";
export default function Skill (){
    return(
        <div className="w-auto flex flex-col gap-8 md:grid md:grid-cols-2  md:justify-items-center lg:grid lg:grid-cols-3 lg:px-[40px] lg:py-[80px]  mx-[40px] items-center py-[40px] ">
            <div  className="flex flex-col bg-[#2982b6] w-[328px] h-[292px] py-[35px] px-[40px] gap-[20px] rounded-2xl">
              <div  className=" w-[100px] h-[100px]  gap-[10]  "  ><Image className="rounded-[10px] " src={trading} alt="trading logo"></Image></div>
              <div  className="w-[135px] h-[24px] "><h3 className="font-sans font-bold text-[#252B42] tracking-widest leading-6 text-base text-nowrap ">Forex Trading</h3></div>
              <div  className=" w-[222px] h-[60px]"><p className="font-serif text-[#FFFFFF] text-sm leading-5 tracking-wide">Proficient in forex trading, technical analysis, risk management, and strategies.</p></div>
            </div>
            <div  className="flex flex-col bg-[#2982b6] w-[328px] h-[292px] py-[35px] px-[40px] gap-[20px] rounded-2xl">
              <div  className=" w-[100px] h-[100px]   gap-[10px] "  ><Image className="rounded-[10px]" src={stenography} alt="stenography logo"></Image></div>
              <div  className="w-[135px] h-[24px]"><h3 className="font-sans font-bold text-[#252B42] tracking-widest leading-6 text-base text-nowrap">Stenography</h3></div>
              <div  className="w-[222px] h-[60px]"><p className="font-serif text-[#FFFFFF] text-sm leading-5 tracking-wide">Skilled in stenography, fast typing, transcription, and accurate note-taking.</p></div>
            </div>
            <div  className="flex flex-col bg-[#2982b6] w-[328px] h-[292px] py-[35px] px-[40px] gap-[20px] rounded-2xl">
              <div  className=" w-[100px] h-[100px]  gap-[10px] " ><Image className="rounded-[10px]" src={repairing} alt="repairing logo"></Image></div>
              <div  className="w-[135px] h-[24px]"><h3 className="font-sans font-bold text-[#252B42] tracking-widest leading-6 text-base text-nowrap">Electrical Repairing</h3></div>
              <div  className="w-[222px] h-[60px]"><p className="font-serif text-[#FFFFFF] text-sm leading-5 tracking-wide">Expert in electrical repairing, troubleshooting, maintenance, and equipment installation.</p></div>
            </div>
            <div  className="flex flex-col bg-[#2982b6] w-[328px] h-[292px] py-[35px] px-[40px] gap-[20px] rounded-2xl">
              <div  className=" w-[100px] h-[100px]   gap-[10px] "  ><Image className="rounded-[10px]" src={webdevelopment} alt="web development logo"></Image></div>
              <div  className="w-[135px] h-[24px]"><h3 className="font-sans font-bold text-[#252B42] tracking-widest leading-6 text-base text-nowrap">Web Development</h3></div>
              <div  className="w-[222px] h-[60px]"><p className="font-serif text-[#FFFFFF] text-sm leading-5 tracking-wide">Experienced in web development, HTML, CSS, JavaScript, and responsive design.</p></div>
            </div>
        </div>
    )
}