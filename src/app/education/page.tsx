import EducationCard from "../components/educationcard";

export default function Education (){
    return(
        <div className="w-auto h-auto  mx-[10px]  flex flex-col gap-10 py-10 lg:flex lg:flex-row lg:gap-11 lg:px-[80px]">
            <EducationCard degree="Matriculation" group="Group: Computer Science" school="School: K.M.A Boys Secondary School" year="Year: 2018" grade="Grade: A"/>
            <EducationCard degree="Intermediate" group="Group: Commerce" school="College: Government College of Commerce" year="Year: 2020" grade="Grade: B"/>
            <EducationCard degree="Graduation" group="Group: Commerce" school="College: Government College of Commerce" year="Year: 2" sup="nd" grade="Status: Continue"/>
        </div>
    )
}