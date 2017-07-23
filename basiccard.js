function BasicCard(front, back) {
    this.front = front;
    this.back = back;
    //create method makes the basic card object
    this.create = function() {
		var cardData = {
			type: "basic",
			front: this.front,
			back: this.back
    	};
    	//write the object to .txt file
    	writeFile(cardData);
    }
};

module.exports = BasicCard;
