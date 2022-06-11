import Party from "./src/Party";
import User from "./src/User";
import IdGenerator from "./utils/idGenerator";

class PartyDistrib {
  private parties: Party[] = [];

  public createParty(id: string): Party {
    let party = new Party(id);
    this.parties.push(party);
    return party;
  }

  public getParty(id: string): Party | undefined {
    let x = this.parties.find(
      (party) => party.id === id && party.getStatus() === "open"
    );
    if (x) return x;
  }

  public deleteParty(id: string): Party[] {
    this.getParty(id)?.deleteParty();
    this.parties = this.parties.filter((party) => party.id !== id);

    return this.parties;
  }

  public getParties(): Party[] {
    return this.parties;
  }

  get utils() {
    return {
      generateId: IdGenerator,
    };
  }

  createUser(id: string): User {
    return new User(id);
  }
}

export = PartyDistrib;
