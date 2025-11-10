// Select the class bubble
const time = document.getElementsByClassName('bubbles')[0];

const fish1 = document.getElementById('fish1');
const fish2 = document.getElementById('fish2');
const fish3 = document.getElementById('fish3');
const fish4 = document.getElementById('fish4');

const fishConfigs = [
    {
        element: fish1,
        baseTop: 12,
        baseLeft: 8,
        verticalSpeed: 0.18,
        horizontalSpeed: 0.28
    },
    {
        element: fish2,
        baseTop: 20,
        baseLeft: 28,
        verticalSpeed: 0.16,
        horizontalSpeed: 0.24
    },
    {
        element: fish3,
        baseTop: 28,
        baseLeft: 48,
        verticalSpeed: 0.2,
        horizontalSpeed: 0.3
    },
    {
        element: fish4,
        baseTop: 36,
        baseLeft: 68,
        verticalSpeed: 0.17,
        horizontalSpeed: 0.26
    }
];

if (screen.width < 400) {

    //Change transformation duration and translatey for mobile view
    time.style.setProperty('--transform-duration', '15s');
    time.style.setProperty('--transform-y', '-700vh');

    // Slow down the fish movement for mobile screens
    fishConfigs.forEach((config) => {
        config.verticalSpeed *= 0.6;
        config.horizontalSpeed *= 0.6;
    });
}



window.addEventListener('scroll', function () {

    let value = window.scrollY;   //Get Scroll Value (Mobile - High)

    text.style.top = 50 + value * -0.2 + '%';
    cloud.style.left = value * 2 + 'px';

    bird1.style.top = value * 0.1 + 'px';
    bird1.style.left = value * 1 + 'px';

    bird2.style.top = value * -0.1 + 'px';
    bird2.style.left = value * -2 + 'px';

    explore.style.marginTop = value * 1.5 + 'px';

    rocks.style.top = value * -0.14 + 'px';

    forest.style.top = value * 0.4 + 'px';
    sky.style.top = value * 0.25 + 'px';
    mountains.style.top = value * 0.25 + 'px';

    header.style.top = value * 0.7 + 'px';
    sun.style.top = value * 1 + 'px';

    //To prevent splash to move above sea water
    if (value < 380) {
        splash.style.top = 20 + value * -0.3 + 'px';
    }

    // Move fishes diagonally from top-left to bottom-right
    fishConfigs.forEach(({ element, baseTop, baseLeft, verticalSpeed, horizontalSpeed }) => {
        if (!element) {
            return;
        }

        element.style.top = `calc(${baseTop}% + ${value * verticalSpeed}px)`;
        element.style.left = `calc(${baseLeft}% + ${value * horizontalSpeed}px)`;
    });
})


// Contains the link for all social media handles
var links = document.getElementsByClassName("social-media");

links[0].addEventListener("click", () => { openlink(1) });
links[1].addEventListener("click", () => { openlink(2) });
links[2].addEventListener("click", () => { openlink(3) });
links[3].addEventListener("click", () => { openlink(4) });

function openlink(x) {
    if (x == 1) {
        window.open("https://www.instagram.com/_.vini._02_/", "_blank");
    }
    if (x == 2) {
        window.open("https://www.linkedin.com/in/vineet-kumar-gupta-2833ab196/", "_blank");
    }
    if (x == 3) {
        window.open("https://github.com/VineetKumar02", "_blank");
    }
    if (x == 4) {
        window.open("https://vineet-portfolio-site.netlify.app/", "_blank");
    }
}
