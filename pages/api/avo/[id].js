import Database from "../../../database/db_helper";

const getAvoById = async (req, resp) => {
  const DB = new Database();
  const { id } = req.query;
  const entry = await DB.getById(id);
  resp.status(200).json(entry);
};

export default getAvoById;
