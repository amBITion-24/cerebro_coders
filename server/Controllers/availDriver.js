import driver from "../Model/Drivers.js";
const availDriver = async (req, res) => {
  const location = req.params.location;
  try {
    const list = await driver.find({});
    const flitred = list.filter((i) => i.location === location);
    res.json(flitred);
  } catch (error) {
    res.json(error);
  }
};
export default availDriver;
