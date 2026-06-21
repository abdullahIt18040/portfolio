"use client";
const NavbarComponents: React.FC  =()=>{
   


    return(
        <>
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-[9999]">
      <div className="flex gap-6 p-4 justify-center text-sm font-medium">
        
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

      </div>
    </nav>
        </>
    )
    


};
export default NavbarComponents;