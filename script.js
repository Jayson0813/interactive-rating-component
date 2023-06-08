const container = document.querySelector(".container");
const thankYou = document.querySelector(".thank-you");
const submit = document.querySelector(".submit");
const rateAgain = document.querySelector(".rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submit.addEventListener("click", () => {
    thankYou.classList.remove("hidden")
    container.style.display = "none"
});

rateAgain.addEventListener("click", () => {
    thankYou.classList.add("hidden")
    container.style.display = "block"
});

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    });
});