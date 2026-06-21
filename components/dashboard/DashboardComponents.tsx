"use client";

import Navbar from "@/app/navbar/page";
import HomeComponents from "../sections/HomeComponents";
import AboutComponents from "../sections/AboutComponents";
import SkillComponents from "../sections/SkillComponents";
import ContactComponents from "../sections/ContactComponents";
import ExperienceAndEducationComponents from "../sections/ExperienceAndEducationComponents";
import ProjectComponents from "../sections/ProjectComponents";
import SectionMainComponents from "../sections/SectionMainComponents";

const DashboardComponents: React.FC  =()=>{
   


    return(
        <>
      <div className=" " >
      <Navbar />
   
      <SectionMainComponents/> 

    </div>
        </>
    )
    


};
export default DashboardComponents;