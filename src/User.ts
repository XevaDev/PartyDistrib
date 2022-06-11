import Party from "./Party";

class User {
  public readonly id: string;
  constructor(id: string) {
    this.id = id;
  }

  joinParty(party: Party) {
    party.join(this);
  }
}

export = User;
