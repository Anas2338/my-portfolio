import Image from "next/image";
import trading  from "../../../image/trading.png";
import stenography  from "../../../image/stenography.png";
import repairing from "../../../image/electrical.png";
import webdevelopment  from "../../../image/web development.png";
export default function Skill (){
    return(
        <div className="w-auto flex flex-col gap-8 md:grid md:grid-cols-2  md:justify-items-center lg:grid lg:grid-cols-3 lg:px-[40px] lg:py-[80px]  mx-[40px] items-center py-[40px] ">
            <div  className="flex flex-col bg-[#2982b6] w-[328] h-[292] py-[35] px-[40] gap-[20] rounded-2xl">
              <div ><Image  className=" w-[100px] h-[100px] rounded-[10]  gap-[10] border-2 border-emerald-700 " src={trading} alt="trading logo"></Image></div>
              <div  className="w-[135px] h-[24px] "><h3 className="font-sans font-bold text-[#252B42] tracking-widest leading-6 text-base text-nowrap ">Forex Trading</h3></div>
              <div  className="w-[50px] h-[2px] bg-[#FFFFFF]"></div>
              <div  className=" w-[222] h-[60]"><p className="font-serif text-[#FFFFFF] text-sm leading-5 tracking-wide">Proficient in forex trading, technical analysis, risk management, and strategies.</p></div>
            </div>
            <div  className="flex flex-col bg-[#2982b6] w-[328] h-[292] py-[35] px-[40] gap-[20] rounded-2xl">
              <div  ><Image className=" w-[100] h-[100] rounded-[10]  gap-[10] border-2 border-emerald-700" src={stenography} alt="stenography logo"></Image></div>
              <div  className="w-[135] h-[24]"><h3 className="font-sans font-bold text-[#252B42] tracking-widest leading-6 text-base text-nowrap">Stenography</h3></div>
              <div  className="w-[50] h-[2] bg-[#E74040]"></div>
              <div  className="w-[222] h-[60]"><p className="font-serif text-[#FFFFFF] text-sm leading-5 tracking-wide">Skilled in stenography, fast typing, transcription, and accurate note-taking.</p></div>
            </div>
            <div  className="flex flex-col bg-[#2982b6] w-[328] h-[292] py-[35] px-[40] gap-[20] rounded-2xl">
              <div ><Image  className=" w-[100] h-[100] rounded-[10]  gap-[10] border-2 border-emerald-700" src={repairing} alt="repairing logo"></Image></div>
              <div  className="w-[135] h-[24]"><h3 className="font-sans font-bold text-[#252B42] tracking-widest leading-6 text-base text-nowrap">Electrical Repairing</h3></div>
              <div  className="w-[50] h-[2] bg-[#E74040]"></div>
              <div  className="w-[222] h-[60]"><p className="font-serif text-[#FFFFFF] text-sm leading-5 tracking-wide">Expert in electrical repairing, troubleshooting, maintenance, and equipment installation.</p></div>
            </div>
            <div  className="flex flex-col bg-[#2982b6] w-[328] h-[292] py-[35] px-[40] gap-[20] rounded-2xl">
              <div  ><Image className=" w-[100] h-[100] rounded-[10]  gap-[10] border-2 border-emerald-700" src={webdevelopment} alt="web development logo"></Image></div>
              <div  className="w-[135] h-[24]"><h3 className="font-sans font-bold text-[#252B42] tracking-widest leading-6 text-base text-nowrap">Web Development</h3></div>
              <div  className="w-[50] h-[2] bg-[#E74040]"></div>
              <div  className="w-[222] h-[60]"><p className="font-serif text-[#FFFFFF] text-sm leading-5 tracking-wide">Experienced in web development, HTML, CSS, JavaScript, and responsive design.</p></div>
            </div>
        </div>
    )
}