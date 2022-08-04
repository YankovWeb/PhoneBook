const Contact = require("./models/Contact");

let phonebook = [
  {
    name: "Grigor",
    number: "+3164871344",
  },
  {
    name: "Gosho",
    number: "+314871342",
  },
];
function getPhonebook() {
  return phonebook;
}
function addNumber(name, number) {
  let contact = new Contact(name, number);
  phonebook.push(contact);
}

module.exports = {
  getPhonebook,
  addNumber,
};
/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/
