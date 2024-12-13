import Image from "next/image";
interface Iprops {
    coursename: string;
    paragraph: string;
    imagesrc: string;
    imagealt: string;
    width: number;
    height: number;
}
export default function SkillCard (props:Iprops){
    const {imagesrc, imagealt, coursename, paragraph, width, height} = props
    return(
        <div  className="flex flex-col bg-[#2982b6] w-[328px] h-[292px] py-[35px] px-[40px] gap-[20px] rounded-2xl">
          <div  className=" w-[100px] h-[100px]  gap-[10] " ><Image className="rounded-[10px] " src={imagesrc} alt={imagealt} width={width} height={height}></Image></div>
          <div  className="w-[135px] h-[24px] "><h3 className="font-sans font-bold text-[#252B42] tracking-widest leading-6 text-base text-nowrap ">{coursename}</h3></div>
          <div  className=" w-[222px] h-[60px]"><p className="font-serif text-[#FFFFFF] text-sm leading-5 tracking-wide">{paragraph}</p></div>
        </div>
    )
}