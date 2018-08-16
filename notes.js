console.log("Starting notes.js");

var addNote = (title, body) => {
  console.log("Adding note:", title, body);
};

module.exports = {
  //equivalent to addNote: addNote
  addNote
};
