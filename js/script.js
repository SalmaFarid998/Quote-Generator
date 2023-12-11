

var quotes = [
`“Be yourself; everyone else is already taken.” <br> ― Oscar Wilde`,
`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” <br> ― Marilyn Monroe`, 
`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” <br> ― Albert Einstein`, 
`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” <br> ― Bernard M. Baruch`,
`“So many books, so little time.”<br>― Frank Zappa`,
`“A room without books is like a body without a soul.”<br>― Marcus Tullius Cicero`,
`“You only live once, but if you do it right, once is enough.” <br> ― Mae West`,
`“Be the change that you wish to see in the world.”<br>― Mahatma Gandhi`,
`“In three words I can sum up everything I've learned about life: it goes on.”<br>― Robert Frost`,
`“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”<br>― J.K. Rowling, Harry Potter and the Goblet of Fire`
]



var quoteBox = document.getElementById('quote');
var button = document.getElementById('button');





function getQuote(x){
    var turn= Math.ceil(Math.random()*10-1);

    if(x == turn){
        getQuote(); 
    }else{
        var currentQuote = quotes[turn];

        quoteBox.innerHTML = currentQuote;

        newFunc = `getQuote(`+ turn +`)`;

        button.setAttribute("onclick", newFunc);
    }

    
}

