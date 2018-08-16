console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const argv = require("yargs").argv;

const notes = require("./notes");

var command = process.argv[2];

if (command === "add") {
  notes.addNote(argv.title, argv.body);
} else if (command === "list") {
  console.log("Listing all notes");
} else if (command === "remove") {
  console.log("Removing note");
} else if (command === "read") {
  console.log("Reading note");
} else {
  console.log("Comman not recognised");
}
