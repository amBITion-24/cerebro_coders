import axios from "axios";
import { useEffect, useState } from "react";
import AccCard from "../reuse/AccCard";
import Heading from "../reuse/Heading";
export interface Accident {
  location: String;
  intenstiy: String;
  isAmbulanceReq: Boolean;
  createdAt: String;
  updatedAt: String;
  
  img: string;
}

const Accidents = () => {
  const [acc, setAcc] = useState<Accident[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    async function getInfo() {
      try {
        const res = await axios.get("http://localhost:5000/");
        const data: Accident[] = res.data;
        setAcc(data);
        setFetching(false);
      } catch (error) {
        setFetching(true);
        console.error("Error fetching data:", error);
      }
    }

    getInfo(); // Fetch initially

    const intervalId = setInterval(() => {
      getInfo(); // Poll every 10 seconds
    }, 5000);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <div className="space-y-3">
      <div className="flex justify-center m-3">
        <Heading content={"Detected Accidents"} style={""} />
      </div>

      <div className="">
        {fetching ? (
          <div className="loading"></div>
        ) : acc.length === 0 ? (
          <div className="h-screen flex justify-center items-center">
            <div className="w-[80%] h-[20vh] flex justify-center items-center bg-base-200 mx-auto rounded-md">
              <Heading content={"NO ACCIDENTS"} style={""} />
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-10 p-10">
            {acc.map((i, index) => {
              return <AccCard obj={i} key={index} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default Accidents;
