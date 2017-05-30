// This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;
// The constructor should accept two arguments: text and cloze.
// The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
// The constructed object should have a partial property that contains only the partial text.
// The constructed object should have a fullText property that contains only the full text.
// The constructor should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.

var BasicCard = require('./BasicCard.js')

function ClozeCard(text, cloze) {
   this.fullText = text;
   this.clozeText = cloze;
}

ClozeCard.prototype.createCard = function () {
   if (this.fullText.includes(this.clozeText)) {
      this.partialText = this.fullText.replace(this.clozeText, '');
      var newCard = new BasicCard (this.partialText, this.clozeText);
      console.log('------------------------------------');
      console.log(newCard);
      console.log('------------------------------------');
   } else {
      console.log('------------------------------------');
      console.log('Error. Cloze not included in text.');
      console.log('------------------------------------');
   }
}


new ClozeCard(process.argv[2], process.argv[3]).createCard();


module.exports = ClozeCard