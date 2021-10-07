function randomCard() {
    //The three Arrays
    const suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const words = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
    const value = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    //randomize answer
    let randomSuitNum = Math.floor(Math.random() * 4);
    let randomValueNum = Math.floor(Math.random() * 13);

    //get random word, value, and suit
    let endsuit = suit[randomSuitNum];
    let endwords = words[randomValueNum];
    let endValue = value[randomValueNum];

    //create third item with a properties of endValue and endSuit
    const cards = [];
    cards.push({ endValue, endsuit });

    //Assign Suits to Symbols
    let entity;
    endsuit === "Diamonds" ? (entity = "&diams;") : (entity = "&" + endsuit.toLowerCase() + ";");

    //Spit out Title
    document.getElementById("result").innerHTML = endwords + " of " + endsuit;
    cardtext = endwords + " of " + endsuit;

    //color changes for suit
    document.getElementById("card").classList.add("card", endsuit.toLowerCase());

    //Spit out card
    document.getElementById("card").innerHTML =
        '<span class = "card-value-suit top" >' + endValue + entity + '</span>' +
        '<span class = "card-suit">' + entity + '</span>' +
        '<span class = "card-value-suit bottom">' + endValue + entity + '</span>';

    //Error Checking
    console.log(entity);
    console.log(cardtext);
    console.log('code completed');
}