import police from "../Model/Police.js";

const create = async (req, res) => {
  const { policelocation, policename, policephone } = req.body;
  try {
    res.json(await police({ policelocation, policename, policephone }));
  } catch (error) {
    res.json(error);
  }
};
export default create;
