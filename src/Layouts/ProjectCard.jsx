import { useState } from "react";
import { GoLinkExternal } from "react-icons/go";

const ProjectCard = (props) => {
  const { img, id, url, name, type1, type2, type3, desc } = props;
  const [state, SetState] = useState(true)
  const Minimum = desc.length>120
  const Text = Minimum ? state ?` ${desc.substring(0,120)}... ` : desc :desc
    
    
  return (
    <div id={id} className="w-full h-[400px] relative sm:w-[48%] my-2 md:w-[31%] lg:w-[31%] xl:w-[23%] text-white-100 p-3  rounded-md  bg-card">
      <img className=" rounded-[12px]" src={img} alt={name} />
      <h1 className=" text-xl font-bold my-2"> {name} </h1>
      <p className=" w-full text-sm my-3">
        {Text}  {Minimum && <button onClick={()=>SetState(!state) } className=" bg-gray-700 text-primary px-[6px] rounded-sm"> {state?"more":"less"} </button>}
      </p>
      <footer className=" flex flex-col gap-1 absolute bottom-2">
        <span className=" text-fblue"> #{type1}</span>
        <span className=" text-fgreen"> #{type2}</span>
        <span className=" text-fred"> #{type3}</span>
      </footer>
      <div className=" absolute bottom-4 right-4"> <a href={url} target="_blank" > <GoLinkExternal className=" cursor-pointer text-xl" /> </a>  </div>
      {/* <div className="absolute top-5 right-4 cursor-pointer flex justify-center items-center bg-black w-[40px] h-[40px] rounded-[50%]">
        <FaGithub className=" text-2xl " />
      </div> */}
    </div>
  );
};

export default ProjectCard;
