/* =========================================
   BOTÓN INICIAL
========================================= */

const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {

    document.getElementById("garden").scrollIntoView({
        behavior: "smooth"
    });

    createBurst();

});


/* =========================================
   CARTA AL HACER SCROLL
========================================= */

const letter = document.querySelector(".letter");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                letter.classList.add("show");

            }

        });

    },
    {
        threshold: 0.35
    }
);

observer.observe(letter);


/* =========================================
   PARTÍCULAS DEL FONDO
========================================= */

const particlesContainer =
    document.getElementById("particles");


function createParticle() {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");

    const size =
        Math.random() * 4 + 2;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.top =
        Math.random() * 100 + "vh";

    particle.style.animationDuration =
        Math.random() * 4 + 3 + "s";

    particlesContainer.appendChild(particle);


    setTimeout(() => {

        particle.remove();

    }, 7000);

}


setInterval(createParticle, 300);


/* =========================================
   EFECTO AL HACER CLICK
========================================= */

function createBurst() {

    for (let i = 0; i < 30; i++) {

        const particle =
            document.createElement("div");

        particle.classList.add("particle");

        particle.style.left = "50%";
        particle.style.top = "50%";

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            Math.random() * 250 + 50;

        particle.style.transition =
            "1.5s ease";

        particlesContainer.appendChild(particle);

        setTimeout(() => {

            particle.style.transform =
                `translate(
                    ${Math.cos(angle) * distance}px,
                    ${Math.sin(angle) * distance}px
                )`;

            particle.style.opacity = "0";

        }, 50);

        setTimeout(() => {

            particle.remove();

        }, 1700);

    }

}


/* =========================================
   FLORES SIGUEN EL MOUSE
========================================= */

let lastFlower = 0;

document.addEventListener("mousemove", (event) => {

    const now = Date.now();

    if (now - lastFlower < 100) {
        return;
    }

    lastFlower = now;

    const flower =
        document.createElement("div");

    flower.innerHTML = "🌼";

    flower.style.position = "fixed";

    flower.style.left =
        event.clientX + "px";

    flower.style.top =
        event.clientY + "px";

    flower.style.pointerEvents = "none";

    flower.style.fontSize =
        Math.random() * 12 + 10 + "px";

    flower.style.zIndex = "999";

    flower.style.transition =
        "1.2s ease";

    document.body.appendChild(flower);


    setTimeout(() => {

        flower.style.transform =
            `translate(
                ${Math.random() * 60 - 30}px,
                -70px
            )
            rotate(${Math.random() * 180}deg)`;

        flower.style.opacity = "0";

    }, 30);


    setTimeout(() => {

        flower.remove();

    }, 1300);

});


/* =========================================
   EFECTO TÁCTIL PARA CELULAR
========================================= */

document.addEventListener("touchstart", (event) => {

    const touch = event.touches[0];

    for (let i = 0; i < 5; i++) {

        const flower =
            document.createElement("div");

        flower.innerHTML = "🌼";

        flower.style.position = "fixed";

        flower.style.left =
            touch.clientX + "px";

        flower.style.top =
            touch.clientY + "px";

        flower.style.pointerEvents = "none";

        flower.style.zIndex = "999";

        flower.style.fontSize = "18px";

        flower.style.transition =
            "1s ease";

        document.body.appendChild(flower);


        setTimeout(() => {

            flower.style.transform =
                `translate(
                    ${Math.random() * 100 - 50}px,
                    ${Math.random() * -100}px
                )`;

            flower.style.opacity = "0";

        }, 20);


        setTimeout(() => {

            flower.remove();

        }, 1100);

    }

});