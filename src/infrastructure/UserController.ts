import GetUserUC from "../application/GetUseCase";

import { GetUserRepo } from "../domain/GetUserRepo";
import { Request, Response } from "express";

class UserController {
  private getUser: GetUserUC;
  constructor(getUserRepo: GetUserRepo) {
    this.getUser = new GetUserUC(getUserRepo);
  }

  async getUserController(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const user = await this.getUser.get(id);
      res.status(200).json(user);
    } catch (error) {
      console.error("Error fetching assignments:", error);
      res.status(500).json({ error: "Server error" });
    }
  }
}

export default UserController;
