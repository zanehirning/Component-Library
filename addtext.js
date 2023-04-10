document.getElementById("navbar-html").innerText = `
<nav class="nav-bar">
    <div class="nav-title">
        <button class="menu-button" id="menu-button">
            <span class="material-icons">menu</span>
        </button>
        Website Title
    </div>
    <div class="nav-links">
        <a class="nav-item" href="#">Link 1</a>
        <a class="nav-item" href="#">Link 2</a>
        <a class="nav-item" href="#">Link 3</a>
    </div>
</nav>

`;

document.getElementById("navbar-css").innerText = `
.nav-title {
    display: flex;
    width: 100vw;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 8px;
}

.menu-button {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 8px;
    border: none;
    background-color: transparent;
    color: var(--font-color);
    cursor: pointer;
}

.nav-links {
    display: flex;
    width: 100vw;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin: 8px;
}

.nav-item {
    padding: 8px;
    color: var(--font-color);
    text-decoration: none;
}
`;

document.getElementById("navbar-js").innerText = `
document.getElementById("menu-button").addEventListener("click", () => {
    console.log("Menu button clicked")
});

`;

document.getElementById("drawer-html").innerText = `
<nav class="nav-bar">
    <div class="nav-title">
        <button class="menu-button" id="drawer-button">
            <span class="material-icons">menu</span>
        </button>
    </div>
</nav>
<div class="nav-drawer" id="nav-drawer">
    <a class="nav-item" href="#">Link 1</a>
    <a class="nav-item" href="#">Link 2</a>
    <a class="nav-item" href="#">Link 3</a>
</div>

`;

document.getElementById("drawer-css").innerText = `
.nav-drawer {
    display: flex;
    position: relative;
    width: 200px;
    left: -250px;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px; 
    visibility: hidden;
    background-color: var(--accent-color);
    transition: all .3s ease-in;
}

.nav-drawer[data-open="true"] {
    left: 0px;
    visibility: visible;
}

`;

document.getElementById("drawer-js").innerText = `
let isNavOpen = false;
const drawerButton = document.getElementById("drawer-button");
const drawer = document.getElementById("nav-drawer");
const menuIcon = document.getElementById("menu-icon");

drawerButton.addEventListener("click", () => {
    isNavOpen = !isNavOpen;
    if (isNavOpen) {
        menuIcon.innerText = "close";

    } else {
        menuIcon.innerText = "menu";
    }
    drawer.dataset.open = isNavOpen;
});

`;

document.getElementById("button-html").innerText = `
<!-- Normal button -->
<button class="button">Save</button>
<!-- Button with icon -->
<button class="button"> <span class="material-icons">save</span> Save</button>
<!-- FAB -->
<button class="circle-button"> <span class="material-icons">add</span></button>

`;

document.getElementById("button-css").innerText = `
.button {
    display: flex;
    padding: 16px;
    border: none;
    background-color: var(--accent-color);
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    color: var(--font-color);
    cursor: pointer;
    align-items: center;
    justify-content: center;
    transition: background-color .6s ease;
}

.button:hover {
    background-color: var(--secondary-accent-color);
}

.circle-button {
    display: flex;
    padding: 8px 16px;
    border: none;
    background-color: var(--accent-color);
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    color: var(--font-color);
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color .6s ease;
}

.circle-button:hover {
    background-color: var(--secondary-accent-color);
}

`;

document.getElementById("carousel-html").innerText = `
<div class="carousel">
    <div class="carousel-slider" id="carousel-slider">
        <img src="imgs/Forest1.jpg" alt="image" width="400" class="carousel-item">
        <img src="imgs/Forest2.jpg" alt="image" width="400" class="carousel-item">
        <img src="imgs/Forest3.jpg" alt="image" width="400" class="carousel-item">
        <img src="imgs/Forest5.jpg" alt="image" width="400" class="carousel-item">
    </div>
</div>

`;

document.getElementById("carousel-css").innerText = `
.carousel {
    width: 100%;
    overflow: hidden
}

.carousel .carousel-slider {
    display: flex;
    transform: translateX(-200px)
}

`;

document.getElementById("carousel-js").innerText = `
function setCarousel(carousel) {
    if (carousel.children.length === 1) {
        carousel.appendChild(carousel.children[0].cloneNode(true));
        carousel.appendChild(carousel.children[0].cloneNode(true));
        carousel.appendChild(carousel.children[0].cloneNode(true));
    }
    else if (carousel.children.length === 2) {
        carousel.appendChild(carousel.children[0].cloneNode(true));
        carousel.appendChild(carousel.children[0].cloneNode(true));
    }
    else if (carousel.children.length === 3) {
        carousel.appendChild(carousel.children[0].cloneNode(true));
    }

    setInterval(() => {
        carousel.animate([
            { transform: translateX(-750px) }
        ], {
            duration: 300,
            easing: "ease-in-out",
        }).onfinish = () => {
            const firstChild = carousel.firstElementChild;
            firstChild.remove();
            carousel.appendChild(firstChild.cloneNode(true));
        }
    }, 4000);
}

setCarousel(carouselSlider);

`;

document.getElementById("blur-html").innerText = `
<div class="blur-animation">
    <span class="blur-letters">S</span>
    <span class="blur-letters">P</span>
    <span class="blur-letters">I</span>
    <span class="blur-letters">N</span>
    <span class="blur-letters">U</span>
    <span class="blur-letters">P</span>
</div>

`;

document.getElementById("blur-css").innerText = `
.blur-animation {
    display: flex;
    flex-direction: row;
    padding: 16px;
    margin: 16px;
    justify-content: center;
}

.blur-letters {
    font-size: 1.3em;
    margin: 0px 7px;
    animation-name: blur-text;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

.blur-letters:nth-child(1) {
    animation-delay: .5s;
}

.blur-letters:nth-child(2) {
    animation-delay: 1s;
}

.blur-letters:nth-child(3) {
    animation-delay: 1.5s;
}

.blur-letters:nth-child(4) {
    animation-delay: 2s;
}

.blur-letters:nth-child(5) {
    animation-delay: 2.5s;
}

.blur-letters:nth-child(6) {
    animation-delay: 3s;
}

@keyframes blur-text {
    0% {
        filter: blur(0px);
    }
    
    50% {
        filter: blur(4px);
    }
    
    100% {
        filter: blur(0px);
    }
}

`;

document.getElementById("interactive-html").innerText = `
<div class="interactive-animation">
    <div class="interactive-loader" id="interactive-loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>

`;

document.getElementById("interactive-css").innerText = `
.interactive-animation {
    display: flex;
    flex-direction: row;
    padding: 16px;
    margin: 64px;
    justify-content: center;
}

.interactive-loader {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: linear-gradient(#000428, #01294d, #004e92);
}

.interactive-loader span {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(#000428, #01294d, #004e92);
}

.interactive-loader span:nth-child(1) {
    filter: blur(5px);
}

.interactive-loader span:nth-child(2) {
    filter: blur(15px);
}

.interactive-loader span:nth-child(3) {
    filter: blur(20px);
}

.interactive-loader span:nth-child(4) {
    filter: blur(25px);
}

.interactive-loader:after {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background: var(--main-bg-color);
    border: solid var(--main-bg-color) 10px;
    border-radius: 50%;
}

`;

document.getElementById("interactive-js").innerText = `
isClockWise = true;
interactiveLoader.addEventListener("click", () => {
    isClockWise = !isClockWise;
    if (!isClockWise) {
        interactiveLoader.animate([
        {transform: "rotate(0deg)"},
        {transform: "rotate(-360deg)"}
        ], {
            duration: 1200,
            easing: "linear",
            iterations: Infinity,
        });
    }
    else {
        interactiveLoader.animate([
            {transform: "rotate(0deg)"},
            {transform: "rotate(360deg)"}
        ], {
                duration: 1200,
                easing: "linear",
                iterations: Infinity,
            });
    }
});

interactiveLoader.animate([
    {transform: "rotate(360deg)"}
], {
        duration: 1200,
        easing: "linear",
        iterations: Infinity,
    });

`;

document.getElementById("soundwave-html").innerText = `
<div class="sound-wave-container">
    <span class="soundwave"></span>
    <span class="soundwave"></span>
    <span class="soundwave"></span>
    <span class="soundwave"></span>
    <span class="soundwave"></span>
    <span class="soundwave"></span>
    <span class="soundwave"></span>
    <span class="soundwave"></span>
</div>

`;

document.getElementById("soundwave-css").innerText = `
.soundwave {
    position: relative;
    width: 5px;
    height: 100px;
    border-radius: 10px;
    margin: 10px;
    background: linear-gradient(#001809, #014e1f, #018634);
    animation-name: soundwave;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

}

.soundwave:nth-child(2) {
    animation-delay: .1s;
}

.soundwave:nth-child(3) {
    animation-delay: .2s;
}

.soundwave:nth-child(4) {
    animation-delay: .3s;
}

.soundwave:nth-child(5) {
    animation-delay: .4s;
}

.soundwave:nth-child(6) {
    animation-delay: .5s;
}

.soundwave:nth-child(7) {
    animation-delay: .6s;
}

.soundwave:nth-child(8) {
    animation-delay: .7s;
}


@keyframes soundwave {
    0% {
      scale: 0;
    }
    50% {
        scale: 1.2;
    }
    100% {
        scale: 0;
    }
}

`;