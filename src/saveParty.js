"use strict";
const fs_1 = require("fs");
let x = {
    saveParty: function save(partyId, text) {
        x.init();
        (0, fs_1.writeFileSync)("../parties/" + partyId + ".txt", text);
    },
    getParty: function getParty(partyId, exceptsMembers) {
        x.init();
        let content = (0, fs_1.readFileSync)("../parties/" + partyId + ".txt", "utf8");
        let res;
        if (content === "") {
            res = "";
        }
        else {
            let members = content.split(",");
            if (exceptsMembers) {
                members = members.filter((member) => !exceptsMembers.includes(member));
            }
            res = members.join(",");
        }
        return res;
    },
    deleteParty: function deleteParty(partyId) {
        x.init();
        (0, fs_1.rmSync)("../parties/" + partyId + ".txt");
    },
    init() {
        if (!(0, fs_1.existsSync)("../parties")) {
            (0, fs_1.mkdirSync)("../parties");
        }
    },
};
module.exports = x;
