const form = document.querySelector("#contact-form");
const response = document.querySelector("#form-response");

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mjgapnrr", {
        method: "POST",
        body: data,
        headers: {
            Accept: "application/json"
        }
    });

    if (res.ok) {
        response.textContent = "Thanks! I'll get back to you soon.";
        form.reset();
    } else {
        response.textContent = "Something went wrong. Try again.";
    }
});