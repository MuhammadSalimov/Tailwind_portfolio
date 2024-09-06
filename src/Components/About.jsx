import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaSass,
  FaGitAlt,
  FaGithub,
  FaTelegramPlane,
} from "react-icons/fa";
import { TbBrandPrisma } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import {
  SiGreensock,
  SiMui,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiTypeorm,
  SiSocketdotio,
  SiRedis,
  SiDocker,
  SiNestjs,
  SiGraphql,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import Image from "../assets/img/pngegg.png";
import { DiPostgresql } from "react-icons/di";

const About = () => {
  window.addEventListener("scroll", () => {
    const techo = document.getElementById("techo");
    const Parent = document.querySelectorAll(".Parent");
    if (techo.getBoundingClientRect().top < 655) {
      Parent.map((item) => {
        item.classList.add("translate-x-0");
      });
    }
  });
  return (
    <div
      id="about"
      className=" pt-[80px]  flex flex-col gap-10 bg-hero  px-5 md:px-32"
    >
      {/* Introduction */}

      <div className=" text-white-100 w-full md:max-w-[60%]">
        <p className=" text-[16px] md:text-[24px]">Introduction</p>
        <h1 className=" font-bold text-[35px] text-white md:text-[50px]">
          Overview.
        </h1>
        <p className="normal-case text-xl tracking-[1px] font-light">
          I specialize in crafting responsive, high-performance web
          applications, leveraging modern front-end and back-end technologies to
          deliver intuitive user experiences and scalable, maintainable
          codebases.
        </p>
      </div>

      {/* Introduction */}

      {/* Card box */}
      <div className=" flex flex-col gap-5 sm:flex-row md:gap-7">
        <div className=" flex-1 flex flex-col gap-3 md:gap-8  rounded-lg text-white text-center items-center justify-center py-4 bg-card shadow-card border-lineColor border-2">
          <FaReact className="  text-white mt-5 mb-1 text-6xl" />
          <h1 className=" text-2xl md:text-3xl lg:text-4xl text-fblue font-bold  ">
            Frontend <br /> Developer
          </h1>
        </div>
        <div className=" flex-1 flex flex-col gap-3 md:gap-8  rounded-lg text-white text-center items-center justify-center py-4 bg-card shadow-card border-lineColor border-2">
          <FaNodeJs className=" text-white mt-5 mb-1  text-6xl" />
          <h1 className=" text-2xl md:text-3xl lg:text-4xl text-fblue font-bold  ">
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
          <h1 className="md:text-[24px] px-1 md:px-4 text-white-100 w-[101%] bg-hero py-[50px]">
            My name is Muhammad Salimov. I was born in Samarkand in 1999.
            Bachelor`s degree: Samarkand State University 2019-2023. My
            specialty is computer science teaching methodology. I develop
            projects based on the following technologies:
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

      <div
        id="techo"
        className=" my-5 text-center w-full flex justify-center gap-4 md:gap-6 lg:gap-8 items-center  md:flex-row flex-wrap  "
      >
        <h1 id="text-left" className="w-full text-white text-xl pl-3">
           Skills
        </h1>
        <div className="w-full h-parent">
          <div className=" w-full h-[5px] bg-white horizontal_line "></div>
        </div>

        {/* Backend */}

        {/* Javascript */}
        <div
          className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}
        >
          <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
          <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
            <RiJavascriptLine className=" text-xl md:text-5xl text-white-100 my-2" />
            <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">
              JavaScript
            </p>
          </div>
        </div>

        {/* Typescript */}
        <div
          className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}
        >
          <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
          <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
            <BiLogoTypescript className=" text-xl md:text-5xl text-white-100 my-2" />
            <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">
              Typescript{" "}
            </p>
          </div>
        </div>

        {/* Nodejs */}
        <div
          className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}
        >
          <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
          <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
            <FaNodeJs className=" text-xl md:text-5xl text-white-100 my-2" />
            <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">
              Nodejs{" "}
            </p>
          </div>
        </div>

        {/* Express */}
        <div
          className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}
        >
          <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
          <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
            <SiExpress className=" text-xl md:text-5xl text-white-100 my-2" />
            <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">
              Expressjs{" "}
            </p>
          </div>
        </div>
        {/* nestjs */}
        <div
          className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}
        >
          <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
          <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
            <SiNestjs className=" text-xl md:text-5xl text-white-100 my-2" />
            <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">
              Nestjs{" "}
            </p>
          </div>
        </div>

        {/* graphql */}
        <div
          className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}
        >
          <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
          <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
            <SiGraphql className=" text-xl md:text-5xl text-white-100 my-2" />
            <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">
              Graphql
            </p>
          </div>
        </div>

        {/* Postgress */}
        <div
          className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}
        >
          <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
          <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
            <DiPostgresql className=" text-xl md:text-5xl text-white-100 my-2" />
            <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">
              Postgresql{" "}
            </p>
          </div>
        </div>

        {/* Mongodb */}
        <div
          className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}
        >
          <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
          <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
            <SiMongodb className=" text-xl md:text-5xl text-white-100 my-2" />
            <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">
              Mongodb
            </p>
          </div>
        </div>

        {/* Prisma */}
        <div
          className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}
        >
          <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
          <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
            <TbBrandPrisma className=" text-xl md:text-5xl text-white-100 my-2" />
            <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">
              Prisma
            </p>
          </div>
        </div>

        {/* typeorm */}
        <div
          className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}
        >
          <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
          <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
            <SiTypeorm className=" text-xl md:text-5xl text-white-100 my-2" />
            <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">
              Typeorm
            </p>
          </div>
        </div>

        {/* socket.io */}
        <div
          className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}
        >
          <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
          <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
            <SiSocketdotio className=" text-xl md:text-5xl text-white-100 my-2" />
            <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">
              Socket.io
            </p>
          </div>
        </div>

        {/* redis */}
        <div
          className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}
        >
          <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
          <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
            <SiRedis className=" text-xl md:text-5xl text-white-100 my-2" />
            <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">
              Redis
            </p>
          </div>
        </div>

        {/* docker */}
        <div
          className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}
        >
          <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
          <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
            <SiDocker className=" text-xl md:text-5xl text-white-100 my-2" />
            <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">
              Docker
            </p>
          </div>
        </div>

        {/* telegram */}
        <div
          className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}
        >
          <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
          <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
            <FaTelegramPlane className=" text-xl md:text-5xl text-white-100 my-2" />
            <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">
              Bot
            </p>
          </div>
        </div>
        {/* Backend */}

        {/* Frontend  */}
        {/* html */}
        <div
          className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}
        >
          <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
          <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
            <FaHtml5 className=" text-xl md:text-5xl text-white-100 my-2" />
            <p className=" my-2 text-xs md:text-2xl text-Strong font-bold">
              Html
            </p>
          </div>
        </div>
        {/* css */}
        <div
          className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}
        >
          <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
          <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
            <FaCss3 className=" text-xl md:text-5xl text-white-100 my-2" />
            <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">
              Css
            </p>
          </div>
        </div>

        {/* sass */}
        <div
          className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}
        >
          <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
          <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
            <FaSass className=" text-xl md:text-5xl text-white-100 my-2" />
            <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">
              Css
            </p>
          </div>
        </div>
        {/* git */}
        <div
          className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}
        >
          <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
          <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
            <FaGitAlt className=" text-xl md:text-5xl text-white-100 my-2" />
            <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">
              Git
            </p>
          </div>
        </div>
        {/* github */}
        <div
          className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}
        >
          <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
          <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
            <FaGithub className=" text-xl md:text-5xl text-white-100 my-2" />
            <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">
              Github
            </p>
          </div>
        </div>
        {/* gsap */}
        <div
          className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}
        >
          <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
          <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
            <SiGreensock className=" text-xl md:text-5xl text-white-100 my-2" />
            <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">
              Gsap
            </p>
          </div>
        </div>
        {/* Reactjs */}
        <div
          className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}
        >
          <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
          <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
            <FaReact className=" text-xl md:text-5xl text-white-100 my-2" />
            <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">
              React js
            </p>
          </div>
        </div>
        {/* Mui */}
        <div
          className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}
        >
          <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
          <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
            <SiMui className=" text-xl md:text-5xl text-white-100 my-2" />
            <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">
              {" "}
              Mui{" "}
            </p>
          </div>
        </div>
        {/* tailwind */}
        <div
          className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}
        >
          <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
          <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
            <SiTailwindcss className=" text-xl md:text-5xl text-white-100 my-2" />
            <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">
              Tailwind <br />{" "}
            </p>
          </div>
        </div>
        {/* redux */}
        <div
          className={` Parent w-[90px] h-[90px] md:w-[160px] md:h-[160px] relative`}
        >
          <div className=" bg-card absolute w-full h-[100%] top-0 left-0 Sircle "></div>
          <div className="IconPath bg-hero h-[101%] w-[101%] cursor-pointer  flex flex-col justify-center items-center">
            <SiRedux className=" text-xl md:text-5xl text-white-100 my-2" />
            <p className=" my-2 text-xs md:text-2xl  text-Strong font-bold">
              Redux{" "}
            </p>
          </div>
        </div>

        {/* Frontend  */}
      </div>

      {/* Technalogies */}

      {/* Slider Div */}

      {/* Slider Div */}
    </div>
  );
};

export default About;
