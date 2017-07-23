function ClozeCard(text, cloze){
    this.text = text;
    this.cloze = cloze;
    //replace cloze word with ellipsis
    this.clozeDeleted = this.text.replace(this.cloze, ' ... ');
    //create method makes the cloze card object
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

module.exports = ClozeCard;
