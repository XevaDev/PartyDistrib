declare let x: {
    saveParty: (partyId: string, text: string) => void;
    getParty: (partyId: string, exceptsMembers?: string[] | undefined) => string;
    deleteParty: (partyId: string) => void;
    init(): void;
};
export = x;
