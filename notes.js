console.log("Starting notes.js");

const fs = require("fs");

var addNote = (title, body) => {
  var notes = getAll();
  var note = { title, body };
  notes.push(note);

  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var removeNote = title => {
  console.log("Removing note:", title);
};

var getAll = () => {
  var notes = [];
  try {
    var notesString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(notesString);
  } catch (e) {
    console.log(e);
  }
  return notes;
};

var getNote = title => {
  console.log("Getting note:", title);
};

module.exports = {
  //equivalent to addNote: addNote
  addNote,
  removeNote,
  getAll,
  getNote
};
