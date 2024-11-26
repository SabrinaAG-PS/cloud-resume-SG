const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("sag-resumeFunction");
    let data = await response.json();
    counter.innerHTML = `${data}`;

updateCounter();
}