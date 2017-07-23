var inquirer = require("inquirer");
var fs = require("fs");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

function cardCreator() {
  inquirer.prompt({
    type: 'list',
    name: 'cards',
    message: 'What kind of flashcard would you like to create?',
    choices: ['BasicCard', 'ClozeCard']
  }).then(function(data) {
    //===========================================================
    if (data.cards === 'BasicCard') {
      return inquirer.prompt([
        {
            type: 'input',
            name: 'front',
            message: 'What should go on the front of the card?'
        },
        {
          type: 'input',
          name: 'back',
          message: 'What should go on the back of the card?'
        }
      ]);
    }
    //===========================================================
    else {
      return inquirer.prompt([
          {
              type: 'input',
              name: 'text',
              message: 'What do you want on your card?'
          },
          {
              type: 'input',
              name: 'cloze',
              message: 'What would you like deleted from your cloze card?'
          }
      ]);
    }
    //===========================================================
  }).then(function(data) {
    if (data.front && data.back) {
      var basic = new BasicCard(data.front, data.back);
      basic.create();
      console.log("A basic card has been added!");
      cardCreator();
    }
    else if (data.text && data.cloze) {
      var cloze = new ClozeCard(data.text, data.cloze);
      cloze.create();
      console.log("A Cloze card has been added!");
      cardCreator();
    }
    else {
      console.log("Both sides must be complete, try again!");
      cardCreator();
    }
  })
  .catch(function(err) {
    console.log(err);
  });
}

// function writeFile(cardData) {
//   fs.appendFile('./log.txt', "\r\n" + JSON.stringify(cardData), 'utf8', function (error, data) {
//    	});
// }

cardCreator();
