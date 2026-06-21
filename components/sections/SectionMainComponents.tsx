"use client";

import AboutComponents from "./AboutComponents";
import ContactComponents from "./ContactComponents";
import ExperienceAndEducationComponents from "./ExperienceAndEducationComponents";
import HomeComponents from "./HomeComponents";
import ProjectComponents from "./ProjectComponents";
import SkillComponents from "./SkillComponents";

const SectionMainComponents: React.FC  =()=>{
   


    return(
        <>
     
    <div >
              <section id="home" className="min-h-screen"><HomeComponents/></section>
      <section id="about" className="min-h-screen"><AboutComponents/></section>
      <section id="skills" className="min-h-screen"><SkillComponents/></section>
      <section id="experience" className="min-h-screen"><ExperienceAndEducationComponents/></section>
      <section id="education" className="min-h-screen"><ContactComponents/></section>
      <section id="projects" className="min-h-screen"><ProjectComponents/></section>
      <section id="contact" className="min-h-screen"><SkillComponents/></section>
    </div>
     </>
    )
    


};
export default SectionMainComponents;