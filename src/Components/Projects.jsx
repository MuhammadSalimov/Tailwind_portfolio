import React, { useState } from "react";
import ProjectCard from "../Layouts/ProjectCard";
const Projects = () => {
  const Projects = [
    {
      img: "../assets/img/img1.png",
      id: 1,
      url: "https://shop-nike-javascript.netlify.app/",
      name:"Sneakers",
      type1:"Html",
      type2:"Css",
      type3:"Javascript",
      desc:"The frontend part works on the basis of responsive (adaptable) design and provides users with access to any device."
    },
    {
      img: "./src/assets/img/img2.png",
      id: 2,
      url: "https://addcart-javascript.netlify.app/",
      name:"Product list",
      type1:"Html",
      type2:"Css",
      type3:"Javascript",
      desc:"The site provides a personal shopping cart function for users. Users can  manage their orders, complete a purchase and view their orders."
    },
    {
      img: "./src/assets/img/img3.png",
      id: 3,
      url: "https://filter-javascript.netlify.app/",
      name:"Filter product",
      type1:"Html",
      type2:"Css",
      type3:"Javascript",
      desc:"The Watch website is a one-stop online platform that offers a wide range of watches. This site allows users to find, compare prices and buy your favorite watches."
    },
    {
      img: "./src/assets/img/img4.png",
      id: 4,
      url: "https://nike-tailwindcss-react.netlify.app/",
      name:"Nike",
      type1:"React",
      type2:"Tailwindcss",
      type3:"Ant",
      desc:"The Nike website is a modern, convenient and efficient online store for buying shoes. This site is based on the React.js framework and designed with Tailwind CSS."
    },
    {
      img: "./src/assets/img/img5.png",
      id: 5,
      url: "https://redux-fashion-shop.netlify.app/",
      name:"Fashion shop",
      type1:"React",
      type2:"Redux",
      type3:"Tailwindcss",
      desc:"The frontend part is designed with a responsive design. Tailwind CSS style framework allows you to learn the design according to the latest fashion trends."
    },
    {
      img: "./src/assets/img/img6.png",
      id: 6,
      url: "https://react-meals-shop.netlify.app/",
      name:"ReactMeals",
      type1:"React",
      type2:"react contex",
      type3:"module.css",
      desc:"The website allows users to select meals from a meal catalog, add them to their cart, and place an order."
    },
    
    {
      img: "./src/assets/img/img8.png",
      id: 8,
      url: "https://router-site-in-react.netlify.app/",
      name:"online business",
      type1:"Css",
      type2:"react ",
      type3:"Router",
      desc:"Online Business website is an online platform offering online business events, products and services."
    },
    {
      img: "./src/assets/img/img9.png",
      id: 9,
      url: "https://menu-filter-in-react.netlify.app/",
      name:"Menu",
      desc:"A Menu website is an online platform that provides a catalog of foods, meals or beverages.",
      type1:"Css",
      type2:"react ",
      type3:"usestate hooks",
    },
    {
      img: "./src/assets/img/img10.png",
      id: 10,
      url: "https://appz-only-html-css.netlify.app/",
      name:"Creative Appz",
      desc:"It is distinguished by a responsive design, so it has a more comfortable experience on every device and screen size."
      ,type1:"Html",
      type2:"Css ",
      type3:"responsive",
    },
    {
      img: "./src/assets/img/img11.png",
      id: 11,
      url: "https://add-expenses-react.netlify.app/",
      desc:" The frontend part is designed with a responsive design, and it is created for the purpose of user-friendly and faster service.",
      name:"Add expens",
      type1:"React",
      type2:"module.css",
      type3:"react hooks",
    },
    {
      img: "./src/assets/img/img7.png",
      id: 7,
      url: "https://izohli-lugat.netlify.app/",
      name:"Izohli lug'at",
      type1:"Css",
      type2:"react ",
      type3:"useState Contex",
      desc:"The Izahli Lug'at website helps users to find explanations of words related to the history of Uzbekistan."
    },
  ];
  const [Show , SetShow] = useState(true)
  const  [data,setdata] = useState(Projects.slice(0,4))
  const FunShow = ()=>{
    
    if(Show){
      setdata(Projects)
      
    }else{
      setdata(Projects.slice(0,4))
    }
    SetShow(!Show)
  }
  return (
    <div className=" pt-[100px] min-h-screen bg-hero py-5 px-5 md:px-10 lg:px-32">
      {/* Title */}
      <div className=" text-white-100 w-full md:max-w-[80%] lg:md-[60%]">
        <p className=" text-[18px] md:text-[24px]"> my work </p>
        <h1 className=" text-[35px] lg:text-[50px] font-bold text-white-100">
          Projects.
        </h1>
        <p className=" text-[14px] md:text-[18px]">
          The following projects showcase my skills and experience through real
          examples of my work. Each project is briefly described with links to
          code repositories and live demos within it. This I solve complex
          problems, work effectively with different technologies and projects
          reflects my management skills.
        </p>
      </div>
      {/* Title */}

      {/* project box */}

      <div className="px-4 justify-start gap-[2%] sm:px-0 my-5 flex flex-wrap items-center  sm:flex-row">
       {
        data.map(item =>(
          <ProjectCard img={item.img}
          key={item.id}
          id={item.id}
          url={item.url}
          name={item.name}
          type1={item.type1}
          type2={item.type2}
          type3={item.type3}
          desc={item.desc} />
        ))
       }
      </div>
       <div className=" flex justify-end"> <button onClick={FunShow} className=" bg-card text-fblue py-2 px-8 rounded-lg"> {Show?"Show more":"Show Less"} </button> </div>
      {/* project box */}
    </div>
  );
};

export default Projects;
