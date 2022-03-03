import express from "express";
import Routes from "./app/routes/index";
import cors from "cors";
const app = express();
const PORT = 5000;
import fileUpload from "express-fileupload";

//midlewares
app.use(cors());

app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    createParentPath: true,
  })
);
app.use(express.json());
app.use("/api", Routes);

app.listen(PORT, () => {
  console.log(`Server is run in http://localhost:${PORT}`);
});
