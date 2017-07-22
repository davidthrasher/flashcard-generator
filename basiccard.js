
var BasicCard = function(front, back){
  this.front = front;
  this.back = back;
};

var firstPresident = new BasicCard("Who was the first president of The United States?", "George Washington")

console.log("Front: " + firstPresident.front);
console.log("Back: " + firstPresident.back);

module.exports = BasicCard;
