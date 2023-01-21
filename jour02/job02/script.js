    function showhide() {
        var article = document.getElementById("article");
        if (article.style.display === "none") {
            article.style.display = "block";
            article.innerHTML = "L'important n'est pas la chute, mais l'atterrissage.";
        } else {
            article.style.display = "none";
        }
    }


