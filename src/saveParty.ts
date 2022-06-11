import { writeFileSync, readFileSync, rmSync, existsSync, mkdirSync } from "fs";

let x = {
  saveParty: function save(partyId: string, text: string) {
    x.init();
    writeFileSync("../parties/" + partyId + ".txt", text);
  },

  getParty: function getParty(partyId: string, exceptsMembers?: string[]) {
    x.init();
    let content = readFileSync("../parties/" + partyId + ".txt", "utf8");
    let res: string;

    if (content === "") {
      res = "";
    } else {
      let members = content.split(",");

      if (exceptsMembers) {
        members = members.filter((member) => !exceptsMembers.includes(member));
      }

      res = members.join(",");
    }

    return res;
  },

  deleteParty: function deleteParty(partyId: string) {
    x.init();
    rmSync("../parties/" + partyId + ".txt");
  },

  init() {
    if (!existsSync("../parties")) {
      mkdirSync("../parties");
    }
  },
};

export = x;
