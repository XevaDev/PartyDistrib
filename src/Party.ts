import User from "./User";
import s from "./saveParty";

type Response = {
  success: boolean;
  message: string;
};

class Party {
  public readonly id: string;
  private status: "closed" | "open" = "open";

  constructor(id: string) {
    this.id = id;
  }

  public join(user: User): Response {
    if (this.status === "open") {
      let u = s.getParty(this.id);

      if (u === "") {
        s.saveParty(this.id, user.id);
      } else {
        if (u.endsWith(",")) {
          s.saveParty(this.id, `${u}${user.id}`);
        } else {
          s.saveParty(this.id, `${u},${user.id}`);
        }
      }

      return {
        success: true,
        message: `${user.id} joined ${this.id}`,
      };
    } else {
      return {
        success: false,
        message: `${this.id} doesn't exist`,
      };
    }
  }

  public leave(user: User): Response {
    if (this.status === "open") {
      let u = s.getParty(this.id);
      let users = u.split(",");
      let now = [];

      now = users.filter((x) => x !== user.id);

      s.saveParty(this.id, now.join(","));

      return {
        success: true,
        message: `${user.id} left ${this.id}`,
      };
    } else {
      return {
        success: false,
        message: `${this.id} doesn't exist`,
      };
    }
  }

  public deleteParty(): Response {
    if (this.status === "open") {
      this.status = "closed";
      s.deleteParty(this.id);

      return {
        success: true,
        message: `${this.id} deleted`,
      };
    } else {
      return {
        success: false,
        message: `${this.id} already deleted`,
      };
    }
  }

  getStatus(): string {
    return this.status;
  }

  getUsers(): string[] {
    return s.getParty(this.id).split(",");
  }
}

export = Party;
