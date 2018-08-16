console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const argv = require("yargs").argv;

const notes = require("./notes");

var command = process.argv[2];

if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created");
    console.log("------");
    console.log(`Title:${note.title}`);
    console.log(`Body:${note.body}`);
  } else console.log("Note already exist!");
} else if (command === "list") {
  notes.getAll();
} else if (command === "remove") {
  notes.removeNote(argv.title);
  console.log("Note removed");
} else if (command === "read") {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log(`Title:${note.title}`);
    console.log(`Body:${note.body}`);
  } else {
    console.lot("Note not found");
  }
} else {
  console.log("Command not recognised");
}
