import User from "./User";
declare type Response = {
    success: boolean;
    message: string;
};
declare class Party {
    readonly id: string;
    private status;
    constructor(id: string);
    join(user: User): Response;
    leave(user: User): Response;
    deleteParty(): Response;
    getStatus(): string;
    getUsers(): string[];
}
export = Party;
