// ===============================================
// VENEGAON CHA RAJA
// Premium About Image Slider
// ===============================================

const slider = document.getElementById("ganapati-slider");

const images = [

    "assets/images/about/Final-old1.png",

    "assets/images/about/Final-old2.jpeg",

    "assets/images/about/Final-old3.jpg",

    "assets/images/about/Final-old4.jpg"

];

// SETTINGS

const rows = 10;
const cols = 10;

const containerWidth = 450;
const containerHeight = 550;

const tileWidth = containerWidth / cols;
const tileHeight = containerHeight / rows;

let currentImage = 0;

// ===============================================
// CREATE IMAGE GRID
// ===============================================

function createTiles(image){

    slider.innerHTML = "";

    for(let row = 0; row < rows; row++){

        for(let col = 0; col < cols; col++){

            const tile = document.createElement("div");

            tile.className = "tile";

            tile.style.width = `${tileWidth}px`;

            tile.style.height = `${tileHeight}px`;

            tile.style.backgroundImage = `url(${image})`;

            tile.style.backgroundSize =
                `${containerWidth}px ${containerHeight}px`;

            tile.style.backgroundPosition =
                `${-col * tileWidth}px ${-row * tileHeight}px`;

            slider.appendChild(tile);

        }

    }

}

// ===============================================
// RANDOM EXPLOSION
// ===============================================

function randomExplosion(nextCallback){

    const tiles = document.querySelectorAll(".tile");

    gsap.to(tiles,{

        duration:0.9,

        opacity:0,

        scale:0.2,

        rotation:()=>gsap.utils.random(-40,40),

        x:()=>gsap.utils.random(-90,90),

        y:()=>gsap.utils.random(-90,90),

        stagger:{
            each:0.008,
            from:"random"
        },

        ease:"power3.in",

        onComplete:nextCallback

    });

}


// ===============================================
// LEFT TO RIGHT WAVE
// ===============================================

function leftWave(nextCallback){

    const tiles = document.querySelectorAll(".tile");

    gsap.to(tiles,{

        duration:0.6,

        opacity:0,

        scale:0,

        stagger:{
            grid:[rows,cols],
            from:"start",
            amount:0.8
        },

        ease:"power2.in",

        onComplete:nextCallback

    });

}

// ===============================================
// BUILD NEXT IMAGE
// ===============================================

function buildNextImage(){

    currentImage++;

    if(currentImage >= images.length){

        currentImage = 0;

    }

    createTiles(images[currentImage]);

    gsap.fromTo(

        ".tile",

        {

            opacity:0,

            scale:0.2,

            rotation:()=>gsap.utils.random(-40,40),

            x:()=>gsap.utils.random(-90,90),

            y:()=>gsap.utils.random(-90,90)

        },

        {

            duration:1,

            opacity:1,

            scale:1,

            rotation:0,

            x:0,

            y:0,

            stagger:{
                each:0.008,
                from:"random"
            },

            ease:"back.out(1.7)"

        }

    );

}


// ===============================================
// START SLIDER
// ===============================================

const transitions = [

    randomExplosion,

    leftWave

];

function startSlider(){

    createTiles(images[currentImage]);

    let transitionIndex = 0;

    setInterval(()=>{

        transitions[transitionIndex](buildNextImage);

        transitionIndex++;

        if(transitionIndex >= transitions.length){

            transitionIndex = 0;

        }

    },5000);

}

startSlider();