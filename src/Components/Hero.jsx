import Img from "../assets/img/v5.png";
const Hero = () => {
  return (
    <div className=" bg-cover  flex justify-center items-center md:pt-[150px] lg:pt-0 pt-[100px] px-4 lg:px-32 bg-content bg-center bg-no-repeat min-h-screen w-full ">
      <div className=" flex flex-col lg:flex-row gap-5">
        <div className=" flex flex-1 flex-row items-center h-[auto] gap-5 justify-center">
          <div className=" LineHero w-[10px] h-[300px] md:h-[100%] bg-bgLine rounded-full "></div>
          <div className=" text-white-100">
            <p className=" text-[14px] md:text-[18px]"> Hi There... </p>
            <h1 className="text-[28px] text-Strong md:text-[35px] font-bold">
              <span className=" text-white-100">I AM</span> MUHAMMAD SALIMOV
            </h1>
            <h3 className=" text-[17px] md:text-[24px] mb-2">
              I am a FullStack Developer
            </h3>
            <p className=" md:text-[18px] text-[15px] mb-2">
              I specialize in developing end-to-end web solutions, from crafting
              responsive UIs to building robust backends. My focus is on
              creating efficient, scalable, and user-centric applications.
            </p>
            <button className=" bg-black-100 rounded-md py-3 px-8 mt-4 text-white-100 md:font-bold border border-white">
              About Me
            </button>
          </div>
        </div>
        <div className=" flex-1 flex justify-center items-center">
          <img className=" w-[400px]  kkkk" src={Img} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
