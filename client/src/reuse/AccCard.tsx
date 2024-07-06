import { useState } from "react";
import { Accident } from "../components/Accidents";
import Driver from "./Driver";
import DriverInterface from "../interface/Driver";
import axios from "axios";
const AccCard = ({ obj }: { obj: Accident }) => {
  const [GetDriver, setGetDriver] = useState<DriverInterface[] | undefined>(
    undefined
  );
  async function getUser() {
    const response = await axios.get(
      `http://localhost:5000/getdriver/${obj.location}`
    );
    const data = await response.data;
    setGetDriver(data);
  }
  getUser();
  return (
    <div className="shadow-md">
      <div className="card card-compact bg-base-100 w-60 shadow-xl md:w-[40vw]">
        <figure>
          <div className=" bg-blue-400 ">
            <img src={obj.img} alt="" />
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Accident!</h2>
          <div>
            In {obj.location}
            <p className="font-bold">note - these are just random values</p>
          </div>
        </div>
      </div>

      <div>
        {GetDriver?.map((i, index) => {
          return (
            <Driver
              name={i.name}
              place={i.location}
              key={index}
              email={i.email}
              phone={i.number}
            />
          );
        })}
      </div>
    </div>
  );
};
export default AccCard;
