var fs = require('fs');

function ClozeCard(text, cloze){
    this.text = text;
    this.cloze = cloze;
    this.clozeDeleted = this.text.replace(this.cloze, ' ... ');
    this.create = function() {
    	var cardData = {
    		type: "cloze",
    		text: this.text,
    		cloze: this.cloze,
    		clozeDeleted: this.clozeDeleted

    	};
    	//write the object to .txt file
    	writeFile(cardData);
    }
};

function writeFile(cardData) {
  fs.appendFile('./log.txt', "\r\n" + JSON.stringify(cardData), 'utf8', function (error, data) {
   	});
}
module.exports = ClozeCard;
