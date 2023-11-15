import GetUserPostgreSQL from "../infrastructure/GetUserRepoLogic";
import UserController from "../infrastructure/UserController";
import express from "express";

const repo = new GetUserPostgreSQL();
const userController = new UserController(repo);

const userRouter = express.Router();

userRouter.get(
  "/:id",
  async (req, res) => await userController.getUserController(req, res)
);

export default userRouter;
