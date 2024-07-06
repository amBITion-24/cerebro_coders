import Accident from "../Model/Accident.js";
const get = async (req, res) => {
  try {
    res.json(await Accident.find({}));
  } catch (error) {
    res.json(error);
  }
};
export default get;
