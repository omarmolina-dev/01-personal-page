const button = document.querySelector("#btn-sal");

button.addEventListener("click", function() {
    const titulo = document.querySelector("h1");
    titulo.style.color = "#E8650A";
    titulo.textContent = "You clicked me!";
    
});

