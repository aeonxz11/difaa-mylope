const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

const content = document.querySelector(".content");
const container = document.querySelector(".container");

const fxContainer =
    document.getElementById("fxContainer");

const particles =
    document.getElementById("particles");

const hearts =
    document.getElementById("hearts");

let effectStarted = false;


/* =========================
   CREATE PARTICLES
========================= */

function createParticles() {

    for (let i = 0; i < 90; i++) {

        const particle =
            document.createElement("span");

        particle.className = "particle";

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            150 + Math.random() * 700;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        const size =
            2 + Math.random() * 4;

        particle.style.width =
            size + "px";

        particle.style.height =
            size + "px";

        particle.style.color =
            [
                "#ff4da6",
                "#a855f7",
                "#22d3ee",
                "#ffffff",
                "#f472b6"
            ][
                Math.floor(
                    Math.random() * 5
                )
            ];

        particles.appendChild(particle);

        particle.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(.2)",
                    opacity: 0
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(1)`,
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x * 1.2}px),
                            calc(-50% + ${y * 1.2}px)
                        )
                        scale(0)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    1800 + Math.random() * 1800,

                delay:
                    Math.random() * 600,

                easing:
                    "cubic-bezier(.2,.8,.2,1)"
            }
        );

        setTimeout(
            () => particle.remove(),
            4500
        );
    }
}


/* =========================
   CREATE HEARTS
========================= */

function createHearts() {

    const symbols = [
        "♡",
        "♥",
        "❤",
        "✦",
        "✧"
    ];

    for (let i = 0; i < 30; i++) {

        const heart =
            document.createElement("span");

        heart.className =
            "fx-heart";

        heart.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        const angle =
            Math.random() *
            Math.PI * 2;

        const distance =
            200 + Math.random() * 650;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        heart.style.color =
            [
                "#ff4da6",
                "#fb7185",
                "#c084fc",
                "#67e8f9",
                "#ffffff"
            ][
                Math.floor(
                    Math.random() * 5
                )
            ];

        hearts.appendChild(heart);

        heart.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(.2)",
                    opacity: 0
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(1.2)
                        rotate(180deg)`,

                    opacity: .9
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x * 1.25}px),
                            calc(-50% + ${y * 1.25}px)
                        )
                        scale(0)
                        rotate(360deg)`,

                    opacity: 0
                }
            ],
            {
                duration:
                    2500 + Math.random() * 2000,

                delay:
                    Math.random() * 700,

                easing:
                    "cubic-bezier(.2,.8,.2,1)"
            }
        );

        setTimeout(
            () => heart.remove(),
            5000
        );
    }
}


/* =========================
   MUSIC BUTTON
========================= */

musicBtn.addEventListener(
    "click",
    () => {

        if (music.paused) {

            music.play();

            musicBtn.textContent =
                "❚❚";

            musicBtn.classList.add(
                "playing"
            );

            content.classList.add(
                "music-started"
            );

            container.classList.add(
                "music-started"
            );


            /* =================
               BIG EFFECT
            ================= */

           if (!effectStarted) {

    effectStarted = true;

    fxContainer.classList.add("active");

    document.body.classList.add("color-mode");
    document.body.classList.add("love-mode");

    createParticles();
    createHearts();

    startLoveParticles();

}

        } else {

            music.pause();

            musicBtn.textContent =
                "♫";

            musicBtn.classList.remove(
                "playing"
            );

        }

    }
);

/* =================================
   CONTINUOUS LOVE PARTICLES
================================= */

function startLoveParticles() {

    setInterval(() => {

        if (!music.paused) {

            const particle =
                document.createElement("div");

            particle.className =
                "love-particle";

            const symbols = [
                "♡",
                "♥",
                "✦",
                "✧",
                "·"
            ];

            particle.textContent =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];

            particle.style.left =
                Math.random() * 100 + "vw";

            particle.style.setProperty(
                "--drift",
                (Math.random() * 200 - 100) + "px"
            );

            particle.style.fontSize =
                (10 + Math.random() * 20) + "px";

            particle.style.color =
                [
                    "#ff4da6",
                    "#c084fc",
                    "#67e8f9",
                    "#ffffff",
                    "#fb7185"
                ][
                    Math.floor(
                        Math.random() * 5
                    )
                ];

            particle.style.animationDuration =
                (5 + Math.random() * 6) + "s";

            document.body.appendChild(
                particle
            );

            setTimeout(() => {
                particle.remove();
            }, 12000);

        }

    }, 350);

}

/* =================================
   CURSOR TRAIL
================================= */

const cursorGlow =
    document.querySelector(".cursor-glow");

const cursorTrail =
    document.querySelector(".cursor-trail");

let mouseX = 0;
let mouseY = 0;

let glowX = 0;
let glowY = 0;

let lastX = 0;
let lastY = 0;

let mouseMoving = false;


/* =========================
   MOUSE MOVE
========================= */

document.addEventListener(
    "mousemove",
    (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        mouseMoving = true;

        cursorTrail.style.left =
            mouseX + "px";

        cursorTrail.style.top =
            mouseY + "px";

        cursorTrail.style.opacity =
            "1";

        cursorGlow.style.opacity =
            "1";

        /* create small trail */

        createCursorParticle(
            mouseX,
            mouseY
        );

    }
);


/* =========================
   SMOOTH GLOW
========================= */

function animateCursor() {

    glowX +=
        (mouseX - glowX) * .12;

    glowY +=
        (mouseY - glowY) * .12;

    cursorGlow.style.left =
        glowX + "px";

    cursorGlow.style.top =
        glowY + "px";

    requestAnimationFrame(
        animateCursor
    );
}

animateCursor();


/* =========================
   TRAIL PARTICLES
========================= */

function createCursorParticle(
    x,
    y
) {

    /* Jangan terlalu banyak */

    if (
        Math.random() > .35
    ) return;

    const particle =
        document.createElement("span");

    particle.className =
        "cursor-particle";

    const symbols = [
        "✦",
        "·",
        "♡",
        "✧"
    ];

    particle.textContent =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];

    particle.style.left =
        x + "px";

    particle.style.top =
        y + "px";

    particle.style.color =
        [
            "#ff75bd",
            "#c084fc",
            "#67e8f9",
            "#ffffff"
        ][
            Math.floor(
                Math.random() * 4
            )
        ];

    particle.style.setProperty(
        "--x",
        (
            Math.random() * 30 - 15
        ) + "px"
    );

    particle.style.setProperty(
        "--y",
        (
            Math.random() * 30 - 15
        ) + "px"
    );

    document.body.appendChild(
        particle
    );

    particle.animate(
        [
            {
                transform:
                    "translate(-50%, -50%) scale(.3)",
                opacity: .9
            },

            {
                transform:
                    `translate(
                        calc(-50% + var(--x)),
                        calc(-50% + var(--y))
                    )
                    scale(1.2)`,
                opacity: .8
            },

            {
                transform:
                    `translate(
                        calc(-50% + var(--x)),
                        calc(-50% + var(--y) - 20px)
                    )
                    scale(0)`,
                opacity: 0
            }
        ],
        {
            duration:
                700 + Math.random() * 500,

            easing:
                "ease-out"
        }
    );

    setTimeout(
        () => particle.remove(),
        1300
    );
}


/* =========================
   CURSOR IDLE
========================= */

setInterval(() => {

    if (!mouseMoving) {

        cursorGlow.style.opacity =
            "0";

        cursorTrail.style.opacity =
            "0";

    }

    mouseMoving = false;

}, 1000);