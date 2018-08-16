/* var obj = {
  name: "Jackie"
};

var stringObj = JSON.stringify(obj);

console.log(typeof stringObj);
console.log(stringObj); */

const fs = require("fs");

var originalNote = {
  titile: "Some title",
  body: "Some body"
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync("notes.json", originalNoteString);

var noteString = fs.readFileSync("notes.json");
var note = JSON.parse(noteString);

console.log(note);