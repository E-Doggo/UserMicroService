import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRouter from "./src/api-endpoint/routes";

dotenv.config();

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

app.use(express.json());
app.use("/api/user", userRouter);

export default app;
