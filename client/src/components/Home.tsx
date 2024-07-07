import Heading from "../reuse/Heading";

const Home = () => {
  return (
    <div className="h-[100vh]">
      <div className="flex flex-col md:flex-row">
        <div className="m-5 p-5 md:m-10 p:10 w-[90%] md:w-[50%]">
          <Heading content={"Accident detection RADRS"} style={""} />
          <p className="text-3xl">
            Real Time Accident Detection And Response System Using CCTV
          </p>
        </div>
        <div className="flex justify-center items-center  w-full h-[100vh]">
          <img src="../../../hero.jpg" alt="" className=" rounded-lg" />
        </div>
      </div>
    </div>
  );
};
export default Home;
