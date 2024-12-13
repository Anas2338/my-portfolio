interface iprops {
    degree : string,
    group : string,
    school : string,
    year : string,
    grade : string,
    sup? : string,
}
export default function EducationCard (props:iprops){
    const {degree, group, school, year, sup, grade} = props;
    return(
        <div className="bg-[#194d8a] pb-4 text-white rounded-xl h-auto w-auto pt-10 flex flex-col gap-10 lg:w-[600px] lg:pb-5">
            <h1 className="font-sans font-bold text-center text-4xl  text-[#FFFFFF] leading-[50px] tracking-wide">{degree}</h1>
            <h2 className="font-sans pl-5 font-bold text-lg tracking-widest">{group}</h2>
            <h2 className="font-sans pl-5 font-bold text-lg tracking-widest">{school}</h2>
            <h2 className="font-sans pl-5 font-bold text-lg tracking-widest">{year}<sup>{sup}</sup></h2>
            <h2 className="font-sans pl-5 font-bold text-lg tracking-widest">{grade}</h2>
        </div>
    )
}