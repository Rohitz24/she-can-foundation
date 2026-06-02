// Dark Mode Toggle

function toggleTheme() {

    document.body.classList.toggle("dark");

    const button =
    document.querySelector(".toggle");

    if(document.body.classList.contains("dark")){

        button.innerHTML =
        "☀️ Light Mode";

    } else {

        button.innerHTML =
        "🌙 Dark Mode";
    }
}

// AOS Animation

AOS.init({
    duration: 1000,
    once: true
});

// Statistics Counter

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const count =
        +counter.innerText;

        const increment =
        target / 100;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;
        }
    };

    updateCounter();

    document.addEventListener("DOMContentLoaded", () => {

    AOS.init({
        duration: 1000,
        once: true,
        offset: 120
    });

});
});