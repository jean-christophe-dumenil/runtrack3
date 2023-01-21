$(document).ready(function() {

    // Récupération des éléments HTML
    const game = document.getElementById("game");
    const grid = document.querySelector(".grid");
    const tiles = document.querySelectorAll(".tile");
    const emptyTile = document.querySelector(".empty");
    const restartBtn = document.getElementById("restartBtn");

    // Tableau pour stocker l'emplacement des morceaux de logo
    let tileOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    // Mélanger aléatoirement les morceaux de logo
    function shuffleTiles() {
        tileOrder = tileOrder.sort(() => Math.random() - 0.5);
            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.order = tileOrder[i];
            }
    }
    shuffleTiles();
    // Déplacer un morceau de logo lorsque l'utilisateur clique dessus
    grid.addEventListener("click", e => {
        if (e.target.classList.contains("tile") && e.target !== emptyTile && e.target.style.order-1 == emptyTile.style.order || e.target.style.order+1 == emptyTile.style.order || e.target.style.order-3 == emptyTile.style.order || e.target.style.order+3 == emptyTile.style.order) {
            e.target.style.order = emptyTile.style.order;
            emptyTile.style.order = e.target.style.order
            checkForWin();
        }
    });

    // Vérifier si l'utilisateur a gagné
    function checkForWin() {
        let win = true;
        for (let i = 0; i < tileOrder.length; i++) {
            if (tiles[i].style.order != i) {
            win = false;
            break;
            }
            
        }
        if (win) {
            alert("Vous avez gagné!");
            restartBtn.style.display = "none";
        }
    }

    // Redémarrer le jeu
    restartBtn.addEventListener("click", () => {
        shuffleTiles();
        restartBtn.style.display = "block";
    }); 
});