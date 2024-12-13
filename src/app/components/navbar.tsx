"use client"
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
export default function Navbar (){
    const [Open, setOpen] = useState(false);

    const closeMenu = () => {
        setOpen(false); 
      };
      
    return(
        <div className="w-auto h-[80px] text-[#FFFFFF] flex justify-around  items-center ">
            <div className={`${Open && "hidden"} w-auto h-auto font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl`} >
                <h1>Portfolio</h1>
            </div>
            <div className={`print:hidden ${Open && "hidden"} sm:hidden`}>
                <GiHamburgerMenu size={30} onClick={()=> setOpen(true)}/>
            </div>
            <div className={`w-screen h-auto bg-blue-900 flex absolute top-0 left-0 pr-4 justify-end items-center print:hidden ${!Open && "hidden"} sm:hidden`}>
                <RxCross1 size={35} onClick={()=> setOpen(false)}/>
            </div>
            <div className={`w-screen h-auto gap-10 items-center bg-blue-900 py-5 absolute top-[35px] flex flex-col ${!Open && "hidden"} sm:hidden `}>
                <div onClick={closeMenu} className=" hover:text-blue-600"><Link href={"./"}>Home</Link></div>
                <div onClick={closeMenu} className=" hover:text-blue-600"><Link href={"/education"}>Education</Link></div>
                <div onClick={closeMenu} className=" hover:text-blue-600"><Link href={"/skill"}>Skill</Link></div>
                <div onClick={closeMenu} className=" hover:text-blue-600"><Link href={"/contact"}>Contact</Link></div>
            </div>
            <div className="hidden  sm:text-lg sm:font-sans sm:font-medium sm:flex sm:flex-row sm:gap-9">
                <div className=" hover:text-blue-600"><Link href={"./"} >Home</Link></div>
                <div className=" hover:text-blue-600"><Link href={"/education"}>Education</Link></div>
                <div className=" hover:text-blue-600"><Link href={"/skill"}>Skill</Link></div>
                <div className=" hover:text-blue-600"><Link href={"/contact"}>Contact</Link></div>
            </div>
        </div>
    )
}