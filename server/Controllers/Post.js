import Accident from "../Model/Accident.js";

const Post = async (req, res) => {
  try {
    const data = await Accident.create(req.body);
    res.json(data);
  } catch (error) {
    res.json(error);
  }
};
export default Post;
