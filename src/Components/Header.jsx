import { useState } from "react";
import {
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { IoMenuOutline, IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showNav, setShownav] = useState(false);
  const [state, SetState] = useState(false);
  const [scrool, setScrool] = useState(0);

  window.addEventListener("scroll", (e) => {
    const header = document.getElementById("header");
    setScrool(window.scrollY);
    if (scrool > 140) {
      setShownav(true);
    } else {
      setShownav(false);
    }
    SetState(false);
  });

  const ShowFun = () => {
    SetState(!state);
  };

  return (
    <header id="header" className="fixed z-50 left-1 top-0 right-1">
      <div className="w-full relative top-0 left-0 rounded-md">
        <div className="PadDev z-10 absolute rounded-md bg-hero top-[10px] left-0 h-[100%] w-full "></div>
        {/* Nav Scroolbar Div */}
        <div
          className={` h-[100%] rounded-md  absolute z-40 bg-hero w-full transition-all duration-300 ease-in-out`}
        ></div>
        {/* Nav Scroolbar Div */}

        <nav
          className={`${
            showNav ? "animate-Navbar" : ""
          } text-white-100 relative z-50 lg:px-32 lg:pr-[130px]  md:px-14 px-8 h-[60px] flex items-center justify-between`}
        >
          <div className=" text-4xl font-bold"> Salimov. </div>
          <div className=" lg:flex hidden gap-10 pr-10 text-2xl items-center">
            <a
              href="https://www.linkedin.com/in/muhammad-salimov/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/muhammad_salimov.22_27/">
              <FaInstagram />
            </a>
            <a
              href="https://t.me/Salimov_1227"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegram />
            </a>

            <a
              href="https://t.me/Salimov_1227"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
          <div className=" font-bold text-2xl  cursor-pointer">
            {state ? (
              <IoCloseSharp onClick={ShowFun} />
            ) : (
              <IoMenuOutline onClick={ShowFun} />
            )}
          </div>
        </nav>
        <div
          className={` ${
            state
              ? "top-[10px] text-3xl md:text-2xl font-bold md:top-[50px] md:h-[110%] h-[400px]"
              : `top-[0] text-[1px] ${showNav ? "h-[50px]" : "h-[65px]"}  `
          } ${
            showNav ? "md:h-[100%]" : "md:h-[110%]"
          } transition-all duration-300 NavLink flex gap-10 flex-col md:flex-row   items-center  md:items-end md:pb-3 pb-0 justify-center bg-bgLine rounded-md absolute z-20   w-[95%] left-[50%] -translate-x-[50%]`}
        >
          <NavLink onClick={ShowFun} to="/" className=" text-primary">
            Home
          </NavLink>
          <NavLink onClick={ShowFun} to="/about" className=" text-primary ">
            About
          </NavLink>
          <NavLink onClick={ShowFun} to="projects" className="text-primary">
            Projects
          </NavLink>
          <NavLink onClick={ShowFun} to="contact" className="text-primary">
            Contact
          </NavLink>
          <footer className=" text-primary text-2xl md:hidden absolute bottom-2 flex gap-8 flex-row">
            <a
              href="https://www.instagram.com/muhammad_salimov.22_27/"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a href="https://t.me/Salimov_1227" target="_blank">
              <FaTelegram />
            </a>
            <a href="https://t.me/Salimov_1227" target="_blank">
              <FaYoutube />
            </a>
            <a href="https://t.me/Salimov_1227" target="_blank">
              <FaFacebook />
            </a>
          </footer>
        </div>
      </div>
    </header>
  );
};

export default Header;
