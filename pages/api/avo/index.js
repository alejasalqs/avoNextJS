// las API en nextJS van obligatoriamente dentro de una carpeta api: pages/api
//cuando hacemos una carpeta en pages y dentro de esta hay un index, este index va a ser el punto de entrada
// en este caso cuando se consulta /avo va a devolver todos los datos por defectos
// también sirve porque vamos a necesitar una ruta /avo/id la cual nos devuelve solo un resultado

import Database from "../../../database/db_helper";

const allAvos = async (req, resp) => {
  // una funcion en nextJS siempre va a recibir por parametro
  // el request y el response, igual que en nodeJS
  const DB = new Database();
  const allEntries = await DB.getAll();
  resp.status(200).json({ length: allEntries.length, data: allEntries });
};

export default allAvos;
