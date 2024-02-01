import React, { useState } from "react";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const SubmitData = (e) => {
    e.preventDefault();
    if (title.length > 2 && email.length > 10) {
      console.log(555);
      setError(false);
    } else {
      setError(true);
      return;
    }

    setTitle("");
    setMessage("");
    setEmail("");
  };
  return (
    <div className=" flex pb-8 flex-col gap-10 items-center justify-center bg-hero pt-[80px] px-5 lg:px-32">
      <div className=" w-full my-5">
        <p className="text-[18px] md:text-[24px] text-white-100">Suggestions</p>
        <h1 className=" text-[35px] lg:text-[50px] font-bold text-white-100">
          Contact me.
        </h1>
      </div>
      <div className=" py-5 md:py-10 lg:py-20 px-5 md:px-6 lg:px-14 w-full bg-card">
        <div className=" flex flex-col md:flex-row w-full text-white-100">
          <div className=" lg:pt-[60px] p-4 bg-card-child w-full md:w-[50%]">
            <div className="my-4 border border-lineColor py-2 px-2 call_Ass flex flex-col gap-3">
              <h1 className=" text-[18px] md:text-xl">
                <IoMdCall className=" inline text-xl md:text-2xl" /> Call us
              </h1>
              <p className=" text-[14px] md:text-[18px]">
                +998933981227, +998996723427
              </p>
            </div>
            <div className="my-4 border border-lineColor py-2 px-2 Email flex flex-col gap-3">
              <h1 className=" text-[18px] md:text-xl">
                <MdEmail className=" inline text-xl md:text-2xl" /> Email
                address
              </h1>
              <p className=" text-[14px] md:text-[18px]">
                developer2799@gmail.com
              </p>
            </div>
            <div className="my-4 border border-lineColor py-2 px-2 Location flex flex-col gap-3">
              <h1 className=" text-[18px] md:text-xl">
                <IoLocationOutline className=" inline md:text-2xl text-xl" />
                Location
              </h1>
              <p className=" text-[14px] md:text-[18px]">
                Toshkent shahri , Samarqand shahri
              </p>
            </div>
            {/* <div className=" flex flex-row gap-5 justify-center items-center pt-5 text-xl"> 
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
               </div> */}
          </div>
          <form className="p-4 bg-bgLine w-full md:w-[50%] flex flex-col gap-8">
            <h1 className=" text-primary font-bold text-center text-2xl md:text-4xl">
              Contact us
            </h1>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={` ${error?" shadow-md shadow-red-600":""} bg-card p-2 focus:outline-none  md:text-xl `}
              type="text"
              placeholder="Enter your name"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`  ${error?" shadow-md shadow-red-600":""} bg-card p-2 focus:outline-none  md:text-xl `}
              type="email"
              placeholder="Enter a valid email adreess"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className=" bg-card p-2 focus:outline-none  md:text-xl"
              placeholder="Message:"
            />
            <button
              onClick={SubmitData}
              className=" bg-card active:bg-card-child  p-2 md:text-xl"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
