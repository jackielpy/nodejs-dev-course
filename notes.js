console.log("Starting notes.js");

const fs = require("fs");

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
  } catch (e) {
    console.log(e);
    return [];
  }
};

var saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();

  var duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length > 0) return;

  var note = { title, body };
  notes.push(note);
  saveNotes(notes);

  return note;
};

var removeNote = title => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter(note => note.title != title);
  saveNotes(filteredNotes);
};

var getAll = () => fetchNotes();

var getNote = title => {
  var notes = fetchNotes();

  var duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length == 1) return duplicateNotes[0];
};

module.exports = {
  //equivalent to addNote: addNote
  addNote,
  removeNote,
  getAll,
  getNote
};
