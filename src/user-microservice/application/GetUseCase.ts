import { GetUserRepo } from "../domain/GetUserRepo";

class GetUserUC {
  constructor(private getUserRepo: GetUserRepo) {}

  get(userId: number) {
    return this.getUserRepo.get(userId);
  }

  getMail(userId: number) {
    return this.getUserRepo.getMail(userId);
  }
}

export default GetUserUC;
