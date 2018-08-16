console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const argv = require("yargs").argv;

const notes = require("./notes");

var command = process.argv[2];

if (command === "add") {
  notes.addNote(argv.title, argv.body);
} else if (command === "list") {
  notes.getAll();
} else if (command === "remove") {
  notes.removeNote(argv.title);
} else if (command === "read") {
  notes.getNote(argv.title);
} else {
  console.log("Command not recognised");
}
