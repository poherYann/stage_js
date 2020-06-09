const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    // start the game
    const startGame = () =>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    // play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const mainJoueur = document.querySelector('.choix-joueur');
        const mainOrdinateur = document.querySelector('.choix-ordinateur');
        // options de l'ordi
        const computerOptions = ['pierre', 'feuille', 'ciseaux'];

        options.forEach((options)=>{
            options.addEventListener('click', function(){
                // computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                /*console.log(computerNumber);*/
                const computerChoice = computerOptions[computerNumber];
                /*console.log(computerChoice);*/
                // c'est ici qu'on compare les mains
                comparerChoix(this.textContent, computerChoice);
                // maj images
              /*  mainJoueur.src = '../asset/img/${this.textContent}.pgn';
                mainOrdinateur.src = '../asset/img/${computerChoice}.pgn';*/



            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.joueur-score p');
        const computerScore = document.querySelector('.ordi-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;

    };


    const comparerChoix = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        // d'abord l'égalité
        if (playerChoice === computerChoice){
            winner.textContent = "Egalité !";

            return;
        }
        // la pierre
        if (playerChoice === 'pierre'){
            if (computerChoice === 'ciseaux'){
                winner.textContent = 'Vous avez gagné'
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Ordinateur vous a battu'
                cScore++;
                updateScore();
                return;
            }
        }
        // feuille
        if (playerChoice === 'feuille'){
            if (computerChoice === 'pierre'){
                winner.textContent = 'Vous avez gagné'
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Ordinateur vous a battu'
                cScore++;
                updateScore();
                return;
            }
        }
        // ciseau
        if (playerChoice === 'ciseaux'){
            if (computerChoice === 'feuille'){
                winner.textContent = 'Vous avez gagné'
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Ordinateur vous a battu'
                cScore++;
                updateScore();
                return;
            }
        }
    }

    // appel la function
    startGame();
    playMatch();
    updateScore();
};
// start la function game
game();