// ======================
// itsFR3ON Script
// ======================

// Fade In

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
            "opacity 1s ease";

        document.body.style.opacity = "1";

    }, 100);

});


// ======================
// Counters
// ======================

const counters =
    document.querySelectorAll(
        ".counter"
    );

let started = false;

function startCounters() {

    if (started) return;

    const cards =
        document.querySelector(
            ".cards"
        );

    const position =
        cards.getBoundingClientRect()
             .top;

    if (
        position <
        window.innerHeight - 100
    ) {

        started = true;

        counters.forEach(
            (counter) => {

                const target =
                    Number(
                        counter.dataset
                               .target
                    );

                let current = 0;

                const increment =
                    Math.max(
                        1,
                        target / 150
                    );

                function update() {

                    if (
                        current < target
                    ) {

                        current +=
                            increment;

                        counter.innerText =
                            Math.floor(
                                current
                            ).toLocaleString();

                        requestAnimationFrame(
                            update
                        );

                    } else {

                        counter.innerText =
                            target.toLocaleString();
                    }
                }

                update();

            }
        );
    }
}

window.addEventListener(
    "scroll",
    startCounters
);

startCounters();


// ======================
// Hover Effect
// ======================

const cards =
    document.querySelectorAll(
        ".card"
    );

cards.forEach((card) => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "translateY(-10px)";

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0)";
        }
    );

});


// ======================
// Scroll Reveal
// ======================

const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";
                    }
                }
            );
        },

        {
            threshold:0.2
        }
    );

cards.forEach((card) => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(50px)";

    card.style.transition =
        "0.8s";

    observer.observe(card);

});