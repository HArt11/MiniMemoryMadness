const cards = document.querySelectorAll(".card");

let matched = 0;
let cardOne, cardTwo;
let moves = 0;
let seconds = 0;
let disableDeck = false;


// begin timer on page load, 1000 milliseconds = 1 second

function startTimer() {
    window.setInterval("updateTimer()", 1000);
}
// updates every second
function updateTimer() {
    ++seconds;
    document.getElementById("seconds").innerHTML = seconds;
}


// based on CodingNepal's memory card game for animations and flips

function flipCard({target: clickedCard}) {
    if(cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
        movesCounter();
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matched++;
        if(matched == 8) {
            document.getElementById("win-message").innerHTML = "Well done! You completed in...";
            disableDeck = true;

        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
             
        
    }


    // timer to stop on win




    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}



// shuffling cards

function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `/assets/images/img-${arr[i]}.png`;
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();
    
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});


// mount counter, 2 flips = 1 move

function movesCounter () {
    let addScoreCount = parseInt(document.getElementById("moves").innerText);
    document.getElementById("moves").innerText = addScoreCount + 1;
  }



// add timer here - starts on page load
 // "onload" event for timer on page load?





// reset - by clicking new game, deck is disabled and no longer auto shuffled
