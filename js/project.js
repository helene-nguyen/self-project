/* Yumicode BIG PROJECT 2022*/

console.log("READY ! 🐉");

const base = {
    //^VARIABLES
    container: document.querySelector('.container'),
    createDiv: document.createElement('div'),
    createP: document.createElement('p'),
    //^INIT
    init: function () {
        console.log(base.container);
    },
    //^FUNCTIONS
    //~create card

    //~create slide 1
    slide1: function () {
        //link slide 1
        let linkSlide1 = document.createElement('a');
        linkSlide1.classList.add('document');
        linkSlide1.href = "#"

        //slide 1 element
        let slideElement = base.createDiv;
        slideElement.classList.add('slide', 'slide1');
        linkSlide1.appendChild(slideElement);

        //inside slide 1 element
        let insideSlide1 = base.createDiv;
        insideSlide1.classList.add('title-box');
        slideElement.appendChild(insideSlide1);

        //text and image
        let txtslide1 = base.createP;
        txtslide1.classList.add('txt-box');
        insideSlide1.appendChild(txtslide1);

        let imgSlide1 = document.createElement('img');
        imgSlide1.classList.add('card-img');
        insideSlide1.appendChild(imgSlide1);
        imgSlide1.src = "#"
        
    },
    //~create slide 2

    //create div item inside container
    //create template card => create inside div class block
    //create div class card where it will have 2 slides
    /* for slide 1
    create a class document a.href =""
    create div 2 class "slide", "slide1"
    create div class title-box
    create p "txt-box" + img class "card-img" 
    img.src = "https://picsum.photos/200/301";
    */
    /*for slide 2
    create div 2 class "slide", "slide2"
    create div class txt-slide2
    create a class basics-link
    create p 'description'
    create p

    */
}

base.init();