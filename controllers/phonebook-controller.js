const phonebook = require("../phonebook");
module.exports = {
  index: (req, res) => {
    res.render("index", {
      contacts: phonebook.getPhonebook(),
    });
  },
  addPhonebookPost: (req, res) => {
    let name = req.body.name;
    let number = req.body.number;
    phonebook.addNumber(name, number);
    res.redirect("/");
  },
};
