import Party from "./src/Party";
import User from "./src/User";
import IdGenerator from "./utils/idGenerator";
declare class PartyDistrib {
    private parties;
    createParty(id: string): Party;
    getParty(id: string): Party | undefined;
    deleteParty(id: string): Party[];
    getParties(): Party[];
    get utils(): {
        generateId: typeof IdGenerator;
    };
    createUser(id: string): User;
}
export = PartyDistrib;
