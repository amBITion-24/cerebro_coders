import Heading from "../reuse/Heading";

const Home = () => {
  return (
    <div className="h-[100vh]">
      <div className="flex flex-col md:flex-row">
        <div className="m-5 p-5 md:m-10 p:10 w-[90%] md:w-[50%]">
          <Heading content={"This is a Heading with 5 words"} style={""} />
          <p>this is a paragraph that contains gist about our idea</p>
        </div>
        <div>this section constains image</div>
      </div>
    </div>
  );
};
export default Home;
