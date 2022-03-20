/* Yumicode BIG PROJECT 2022*/

console.log("READY ! 🐉");

const base = {
    //^VARIABLES
    container: document.querySelector('.container'),
    //^INIT
    init: function () {
        /* console.log(test); */
        base.cards();   
       
    },
    //^FUNCTIONS
    //~create a card template
    cardTemplate: function () {
        let flipCard = document.createElement('div');
        flipCard.classList.add('flip-card');
        base.container.appendChild(flipCard);

        let flipCardInner = document.createElement('div');
        flipCardInner.classList.add('flip-card-inner');
        flipCard.appendChild(flipCardInner);

        let flipCardFront = document.createElement('div');
        flipCardFront.classList.add('flip-card-front');
        flipCardInner.appendChild(flipCardFront);

        let flipCardBack = document.createElement('div');
        flipCardBack.classList.add('flip-card-back');
        flipCardInner.appendChild(flipCardBack); 

        base.hoverCard(flipCard);
        base.hoverCard(flipCardInner);
    },
    //~event on mouseover mouseleave
    hoverCard: function (element) {
        element.addEventListener('mouseover', () => {
            element.classList.add('hovering');
        });
        element.addEventListener('mouseleave', () => {
            element.classList.remove('hovering');
        });
    },
    //~create 12 cards
    cards: function () {
        for (let index = 0; index < 12; index++){
            base.cardTemplate(base.createDiv);
        }
    },
    //~flip card front
}

base.init();

