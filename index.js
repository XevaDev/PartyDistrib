"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Party_1 = __importDefault(require("./src/Party"));
const User_1 = __importDefault(require("./src/User"));
const idGenerator_1 = __importDefault(require("./utils/idGenerator"));
class PartyDistrib {
    constructor() {
        this.parties = [];
    }
    createParty(id) {
        let party = new Party_1.default(id);
        this.parties.push(party);
        return party;
    }
    getParty(id) {
        let x = this.parties.find((party) => party.id === id && party.getStatus() === "open");
        if (x)
            return x;
    }
    deleteParty(id) {
        var _a;
        (_a = this.getParty(id)) === null || _a === void 0 ? void 0 : _a.deleteParty();
        this.parties = this.parties.filter((party) => party.id !== id);
        return this.parties;
    }
    getParties() {
        return this.parties;
    }
    get utils() {
        return {
            generateId: idGenerator_1.default,
        };
    }
    createUser(id) {
        return new User_1.default(id);
    }
}
module.exports = PartyDistrib;
