const journeyBtn = document.getElementById("journeyBtn");
const aboutMore = document.getElementById("aboutMore");
const arrow = journeyBtn.querySelector("i");

let isOpen = false;

journeyBtn.addEventListener("click", () => {

    if (!isOpen) {

        aboutMore.style.display = "block";

        // Expand container
       gsap.fromTo(
       aboutMore,
    {
        opacity: 0,
        height: 0
    },
    {
        opacity: 1,
        height: "auto",
        duration: 0.6,
        ease: "power2.out"
    }
);

// Animate cards one by one
       gsap.from(".about-card", {

         opacity: 0,

         y: 40,

         scale: 0.95,

         duration: 0.6,

         ease: "power3.out",

        stagger: 0.35

});


        journeyBtn.childNodes[0].textContent = "Hide Our Journey ";

        gsap.to(arrow, {
            rotate: 180,
            duration: 0.4
        });

        setTimeout(() => {
            aboutMore.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 250);

        isOpen = true;

    } else {

        gsap.to(aboutMore, {

            opacity: 0,

            y: -20,

            height: 0,

            duration: 0.6,

            ease: "power2.in",

            onComplete: () => {

                aboutMore.style.display = "none";

            }

        });

        journeyBtn.childNodes[0].textContent = "Discover Our Journey ";

        gsap.to(arrow, {

            rotate: 0,

            duration: 0.4

        });

        isOpen = false;

    }

});