function generate() {
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let id = "";

  for (let i = 0; i < 6; i++) {
    id += str.charAt(Math.floor(Math.random() * str.length));
  }

  return id;
}

export = generate;
