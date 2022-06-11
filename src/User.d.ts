import Party from "./Party";
declare class User {
    readonly id: string;
    constructor(id: string);
    joinParty(party: Party): void;
}
export = User;
