import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaSass,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { SiGreensock, SiMui, SiTailwindcss, SiRedux } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { MdOutlineWeb } from "react-icons/md";
import Image from "../assets/img/pngegg.png";

const About = () => {
  let size = 190
  const [tScroll , setTscroll] =useState(false)
  window.addEventListener("scroll", (e) => {
   const techo = document.getElementById("techo")
   const Parent = document.querySelectorAll(".Parent")
   if(techo.getBoundingClientRect().top < 655){
      Parent.map((item)=> {
        item.classList.add("translate-x-0")
      })
   }else{
    item.classList.remove("translate-x-0")
   }
   
  });
  return (
    <div id="about" className=" pt-[80px]  flex flex-col gap-10 bg-hero  px-5 md:px-32">
      {/* Introduction */}

      <div className=" text-white-100 w-full md:max-w-[60%]">
        <p className=" text-[16px] md:text-[24px]">Introduction</p>
        <h1 className=" font-bold text-[35px] text-white md:text-[50px]">
          Overview.
        </h1>
        <p className="normal-case">
          I Create Successful Responsive Websites That Are Fast, Easy To Use,
          And Built With Best Practices. The Main Area Of My Expertise Is
          Front-End Development, HTML, CSS, JS, Building Small And Medium Web
          Apps, Custom Plugins, Features, Animations, And Coding Interactive
          Layouts.
        </p>
      </div>

      {/* Introduction */}

      {/* Card box */}
      <div className=" flex flex-col gap-5 sm:flex-row md:gap-7">
        <div className=" flex-1 flex flex-col gap-3 md:gap-8  rounded-lg text-white text-center items-center justify-center py-4 bg-card shadow-card border-lineColor border-2">
          <MdOutlineWeb className=" text-white mt-5 mb-3  text-4xl " />
          <h1 className=" text-2xl md:text-3xl lg:text-4xl text-primary font-bold  ">
            Frontend <br /> Developer
          </h1>
        </div>
        <div className=" flex-1 flex flex-col gap-3 md:gap-8  rounded-lg text-white text-center items-center justify-center py-4 bg-card shadow-card border-lineColor border-2">
          <FaReact className="  text-white mt-5 mb-3 text-4xl" />
          <h1 className=" text-2xl md:text-3xl lg:text-4xl text-primary font-bold  ">
            React Native
            <br />
            Developer
          </h1>
        </div>
        <div className=" flex-1 flex flex-col gap-3 md:gap-8  rounded-lg text-white text-center items-center justify-center py-4 bg-card shadow-card border-lineColor border-2">
          <FaNodeJs className=" text-white mt-5 mb-3  text-4xl" />
          <h1 className=" text-2xl md:text-3xl lg:text-4xl text-primary font-bold  ">
            Backend <br /> Developer
          </h1>
        </div>
      </div>
      {/* Card box */}

      {/* About Me */}
      <div className=" mt-5 pt-10">
        <h1 className=" mb-5 text-3xl md:text-[40px] text-center text-white-100 font-bold">
          About <span className=" text-Strong">Me</span>
        </h1>
      </div>
      <div className=" flex flex-col justify-center px-5 items-center md:flex-row mt-4">
        <div className=" bg-card p-0 w-full lg:max-w-[50%]">
          <h1 className="md:text-[24px] px-1 md:px-4 text-white-100 PathBox w-[101%] bg-hero py-[50px]">
            My name is Muhammad Salimov. I was born in Samarkand in 1999.
            Bachelor's degree: Samarkand State University 2019-2023. My
            specialty is computer science teaching methodology. I am currently a
            frontend programmer. I develop projects based on the following
            technologies:
          </h1>
        </div>
        <div className="hidden lg:flex justify-end md:pr-10 pr-0 w-full md:max-w-[50%]">
          <img
            className=" drop-shadow-ImgShadow w-full md:w-[400px]"
            src={Image}
            alt="About"
          />
        </div>
      </div>
      {/* About Me */}

      {/* Technalogies */}
      <div id="techo" className=" my-5 text-center w-full flex justify-center gap-4 md:gap-6 lg:gap-8 items-center  md:flex-row flex-wrap  ">
        <div className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}>
            <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
        <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
          <FaHtml5 className=" text-xl md:text-5xl text-white-100 my-2" /> 
          <p className=" my-2 text-xs md:text-2xl text-Strong font-bold">Html</p>
        </div>
        </div>
            
        <div className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}>
            <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
        <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
          <FaCss3 className=" text-xl md:text-5xl text-white-100 my-2" /> 
          <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">Css</p>
        </div>
        </div>
        
        <div className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}>
            <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
        <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
          <FaSass className=" text-xl md:text-5xl text-white-100 my-2" /> 
          <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">Css</p>
        </div>
        </div>

        <div className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}>
            <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
        <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
          <FaGitAlt className=" text-xl md:text-5xl text-white-100 my-2" /> 
          <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">Git</p>
        </div>
        </div>

        <div className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}>
            <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
        <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
          <FaGithub className=" text-xl md:text-5xl text-white-100 my-2" /> 
          <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">Github</p>
        </div>
        </div>

        <div className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}>
            <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
        <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
          <RiJavascriptLine className=" text-xl md:text-5xl text-white-100 my-2" /> 
          <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">JavaScript</p>
        </div>
        </div>

        <div className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}>
            <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
        <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
          <SiGreensock className=" text-xl md:text-5xl text-white-100 my-2" /> 
          <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">Gsap</p>
        </div>
        </div>

        <div className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}>
            <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
        <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
          <FaReact className=" text-xl md:text-5xl text-white-100 my-2" /> 
          <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">React js</p>
        </div>
        </div>

        <div className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}>
            <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
        <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
          <SiMui className=" text-xl md:text-5xl text-white-100 my-2" /> 
          <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold"> Mui </p>
        </div>
        </div>

        <div className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}>
            <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
        <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
          <SiTailwindcss className=" text-xl md:text-5xl text-white-100 my-2" /> 
          <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">Tailwind <br />  </p>
        </div>
        </div>

        <div className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}>
            <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
        <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
          <SiRedux className=" text-xl md:text-5xl text-white-100 my-2" /> 
          <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">Redux  </p>
        </div>
        </div>


        <div className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}>
            <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
        <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
          <BiLogoTypescript className=" text-xl md:text-5xl text-white-100 my-2" /> 
          <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">Typescript </p>
        </div>
        </div>



      </div>

      {/* Technalogies */}

      {/* Slider Div */}
      
      {/* Slider Div */}
    </div>
  );
};

export default About;
