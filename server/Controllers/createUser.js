import driver from "../Model/Drivers.js";
const createDriver = async (req, res) => {
  const { location, name, email, number } = req.body;
  try {
    res.json(await driver.create({ location, name, email, number }));
  } catch (error) {
    res.json(error);
  }
};
export default createDriver;
