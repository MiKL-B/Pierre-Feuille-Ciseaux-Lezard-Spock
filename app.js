// déclaration de variable pour aller chercher les buttons
const buttons = document.querySelectorAll("button");

//récupération du contenu HTML des divs
const scoreJoueur = document.querySelector(".scorej").innerHTML;
const scoreRobot = document.querySelector(".scorer").innerHTML;
//déclaration et initialisation des variables
let jScore = scoreJoueur;
let rScore = scoreRobot;
//création de la fonction d'incrémentation
function updateScore() {
  jScore = jScore++;
  rScore = rScore++;
}

// création de boucle pour voir ce que chacun des boutons fait
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // évenement a écouter , le click pour chaque boutons, ensuite donner une fonction
    const joueur = buttons[i].innerHTML; // récupérer l'élément html du boutons clické par le joueur
    const robot = buttons[Math.floor(Math.random() * 5)].innerHTML; // formule pour nombre aléatoire tronqué compris dans la longueur des boutons en récupérant l'élément HTML
    let resultat = "";
    //buttons.length
    //Condition du Jeu
    if (joueur === robot) {
      resultat = "Egalité";
    } else if (
      (joueur === "Ciseaux" && robot === "Feuille") ||
      (joueur === "Feuille" && robot === "Pierre") ||
      (joueur === "Pierre" && robot === "Lézard") ||
      (joueur === "Lézard" && robot === "Spock") ||
      (joueur === "Spock" && robot === "Ciseaux") ||
      (joueur === "Ciseaux" && robot === "Lézard") ||
      (joueur === "Lézard" && robot === "Feuille") ||
      (joueur === "Feuille" && robot === "Spock") ||
      (joueur === "Spock" && robot === "Pierre") ||
      (joueur === "Pierre" && robot === "Ciseaux")
    ) {
      resultat = "Gagné";
      jScore++;
      updateScore();
    } else if (
      (joueur === "Sheldon" && robot === "Pierre") ||
      (joueur === "Sheldon" && robot === "Feuille") ||
      (joueur === "Sheldon" && robot === "Ciseaux") ||
      (joueur === "Sheldon" && robot === "Lézard")
    ) {
      resultat = "Bazinga je t'ai eu !";
      jScore++;
      updateScore();
    } else if (joueur === "Sheldon" && robot === "Spock") {
      resultat = `Bien tenté mais je t'ai eu quand même </br>BAZINGA !`;
      jScore++;
      updateScore();
    } else {
      resultat = "Perdu";
      rScore++;
      updateScore();
    }

    //chercher la div resultat et modifié son contenu HTML
    document.querySelector(".resultat").innerHTML = `
		Choix Joueur : ${joueur} </br>
		Choix Robot : ${robot} </br>
		${resultat} !</br></br>
		`;
    //console.log(`Joueur : ${joueur}  VS Robot : ${robot}`)//affiche le choix du joueur et celui du robot avec syntaxe ${} qui sert a inclure du javascript
    document.querySelector(".score").innerHTML = `
		Score Joueur : ${jScore}</br>
		Score Robot : ${rScore}`;
  });
}
