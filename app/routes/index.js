import express from "express";
import fs from "fs";
const router = express.Router();
const root = "./data/files/";

router.post("/upload", (req, res) => {
  const getFiles = req.files.file;
  const { destino } = req.body;
  console.log(destino);
  getFiles.mv(`${root}/${destino}${getFiles.name}`, (err) => {
    if (err) {
      return res
        .status(500)
        .send({ message: "ERR:Los archivos node se estan moviendo" });
    }
    return res.status(200).send({
      message: "Archivo subido correctamente !",
      destino: `${root}${destino}${getFiles.name}`,
    });
  });
});

router.post("/root", (req, res) => {
  const { pathactual } = req.body;
  const patComplete = `${root}${pathactual.name}`;

  let filenames = fs.readdirSync(patComplete);
  console.log(filenames);

  res.json({ path: pathactual, content: filenames });
});

export default router;
