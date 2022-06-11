<h1> PartyDistrib 1.0.0 </h2>
<h3><u>Party manager and logger</u></h3>
<p>This program is a simple party manager and logger.</p>
<p>It is designed to be used in a mini browser game server.</p>
<h3><u>Features</u></h3>
<ul>
    <li>Create a party which will be saved in a text file with all users ids</li>
    <li>Delete a party</li>
    <li>Add a user to a party</li>
    <li>Remove a user from a party</li>
    <li>Get all users of a party</li>
    <li>Get all parties</li>
</ul>
<h3><u>How to use</u></h3>
<h4> Import the library </h4>
<b>First, install it</b>
<pre>
    npm install partydistrib
</pre>
<b>Then, import it in you server.js file</b>

```js
const PartyDistrib = require("partydistrib");
let myPartyDistrib = new PartyDistrib();
```

<h4> Create a party </h4>

```js
const PartyDistrib = require("partydistrib");
let myPartyDistrib = new PartyDistrib();
let generateId = myPartyDistrib.utils.generateId;

let party = myPartyDistrib.createParty(generateId());
```

<h4> Delete a party </h4>

```js
const PartyDistrib = require("partydistrib");
let myPartyDistrib = new PartyDistrib();

myPartyDistrib.deleteParty("partyId");
```

<h4> Add a user to a party </h4>

```js
// let party = myPartyDistrib.createParty(generateId());

let user1 = myPartyDistrib.createUser("user1");
let user2 = myPartyDistrib.createUser("user2");

user1.joinParty(party);
user2.joinParty(party);
```

<h4> Remove a user from a party </h4>

```js
// let party = myPartyDistrib.createParty(generateId());
// let user1 = myPartyDistrib.createUser("user1");

party.leave(user);
```

<b> Party is automatically deleted when there is no user in it </b>

<h4> Get all users of a party </h4>

```js
// let party = myPartyDistrib.createParty(generateId());

let users = party.getUsers(); // returns an array of string with all users ids

console.log(users);
```

<h4> Get all parties </h4>

```js
let parties = myPartyDistrib.getParties(); // returns an array of string with all parties ids

console.log(parties);
```

<h4> Get a party </h4>

```js
let party = myPartyDistrib.getParty("partyId");
```

<h3> Utils </h3>
<h4> Generate an id </h4>

```js
let generateId = myPartyDistrib.utils.generateId;
let id = generateId();
console.log(id);
```

<h3> Authors </h3>
<p>
    <b>Author:</b> <a href="https://github.com/XevaDev/" target="_blank">
    <img src="https://avatars0.githubusercontent.com/u/103420547?s=460&v=4" alt="Github" width="20" height="20">
</p>
