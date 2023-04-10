document.getElementById("menu-button").addEventListener("click", () => {
    console.log("Menu button clicked")
});


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
    drawer.dataset.open = `${isNavOpen}`;
});


const carouselSlider = document.getElementById("carousel-slider");
const carouselItems = document.querySelectorAll(".carousel-item");
console.log(carouselSlider);

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
            { transform: `translateX(-750px)` }
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


const interactiveLoader = document.getElementById("interactive-loader");

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


