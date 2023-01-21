    let count = 0;

    const button = document.getElementById("button");
    const counter = document.getElementById("compteur");

    function addone() {
    count++,
    counter.textContent = count;
    }

    button.addEventListener("click", addone);
