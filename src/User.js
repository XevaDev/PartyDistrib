"use strict";
class User {
    constructor(id) {
        this.id = id;
    }
    joinParty(party) {
        party.join(this);
    }
}
module.exports = User;
