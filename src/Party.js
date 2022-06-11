"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const saveParty_1 = __importDefault(require("./saveParty"));
class Party {
    constructor(id) {
        this.status = "open";
        this.id = id;
    }
    join(user) {
        if (this.status === "open") {
            let u = saveParty_1.default.getParty(this.id);
            if (u === "") {
                saveParty_1.default.saveParty(this.id, user.id);
            }
            else {
                if (u.endsWith(",")) {
                    saveParty_1.default.saveParty(this.id, `${u}${user.id}`);
                }
                else {
                    saveParty_1.default.saveParty(this.id, `${u},${user.id}`);
                }
            }
            return {
                success: true,
                message: `${user.id} joined ${this.id}`,
            };
        }
        else {
            return {
                success: false,
                message: `${this.id} doesn't exist`,
            };
        }
    }
    leave(user) {
        if (this.status === "open") {
            let u = saveParty_1.default.getParty(this.id);
            let users = u.split(",");
            let now = [];
            now = users.filter((x) => x !== user.id);
            saveParty_1.default.saveParty(this.id, now.join(","));
            return {
                success: true,
                message: `${user.id} left ${this.id}`,
            };
        }
        else {
            return {
                success: false,
                message: `${this.id} doesn't exist`,
            };
        }
    }
    deleteParty() {
        if (this.status === "open") {
            this.status = "closed";
            saveParty_1.default.deleteParty(this.id);
            return {
                success: true,
                message: `${this.id} deleted`,
            };
        }
        else {
            return {
                success: false,
                message: `${this.id} already deleted`,
            };
        }
    }
    getStatus() {
        return this.status;
    }
    getUsers() {
        return saveParty_1.default.getParty(this.id).split(",");
    }
}
module.exports = Party;
