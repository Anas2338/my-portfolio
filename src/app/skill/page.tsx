
import SkillCard from "../components/skillcard";

export default function Skill (){
    return(
      <div className="w-auto flex flex-col gap-8 md:grid md:grid-cols-2  md:justify-items-center lg:grid lg:grid-cols-3 lg:px-[40px] lg:py-[80px]  mx-[40px] items-center py-[40px] ">
        <SkillCard coursename="Forex Trading" paragraph="Proficient in forex trading, technical analysis, risk management, and strategies." imagesrc="/photos/trading.png" imagealt="trading image" height={100} width={100}/>
        <SkillCard coursename="Stenography" paragraph="skilled in stenography, fast typing, transcription, and accurate note-taking." imagesrc="/photos/stenography.png" imagealt="stenography image" width={100} height={100}/>
        <SkillCard coursename="Electrical Repairing" paragraph="Expert in electrical repairing, troubleshooting, maintenance, and equipment installation." imagesrc="/photos/electrical.png" imagealt="electrical image" width={100} height={100}/>
        <SkillCard coursename="Web Development" paragraph="Experienced in web development, HTML, CSS, JavaScript, and responsive design." imagesrc="/photos/webdevelopment.png" imagealt="web image" width={100} height={100}/>
      </div>
    )
}