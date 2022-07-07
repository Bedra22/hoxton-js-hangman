window.onload = function () {

    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let categories;
    let chosenCategory;
    let getHints;
    let word;
    let guess;
    let geusses = [];
    let lives;
    let counter;
    let space;


    let showLives = document.getElementById("mylives");
    let showCatagory = document.getElementById("scatagory");
    let getHint = document.getElementById("hint");
    let showClue = document.getElementById("clue");


    function buttons() {
        let myButtons = document.getElementById('buttons');
        let letters = document.createElement('ul');

        for (let i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            let list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            myButtons.append(letters);
            letters.append(list);
        }
    }

    function selectCat() {
        if (chosenCategory === categories[0]) {
            chosenCategory.innerHTML = "The Chosen Category Is Premier League Football Teams";
        } else if (chosenCategory === categories[1]) {
            chosenCategory.innerHTML = "The Chosen Category Is Films";
        } else if (chosenCategory === categories[2]) {
            chosenCategory.innerHTML = "The Chosen Category Is Cities";
        }
    }

    function result() {
        let wordHolder = document.getElementById('hold');
        let correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }

            geusses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }

    function comments() {
        showLives.innerHTML = "You have " + lives + " lives";
        if (lives < 1) {
            showLives.innerHTML = "Game Over";
        }
        for (var i = 0; i < geusses.length; i++) {
            if (counter + space === geusses.length) {
                showLives.innerHTML = "You Win!";
            }
        }
    }



    function check() {
        function list() {
            // @ts-ignore
            let guess = (this.innerHTML);
            // @ts-ignore
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    geusses[i].innerHTML = guess;
                    counter += 1;
                }
            }
            var j = (word.indexOf(guess));
            if (j === -1) {
                lives -= 1;
                comments();
            } else {
                comments();
            }
        }
    }


    // Play
    function play() {
        categories = [
            ["everton", "liverpool", "swansea", "chelsea", "hull", "manchester-city", "newcastle-united"],
            ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
            ["manchester", "milan", "madrid", "amsterdam", "prague"]
        ];

        chosenCategory = categories[Math.floor(Math.random() * categories.length)];
        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();

        geusses = [];
        lives = 10;
        counter = 0;
        space = 0;
        selectCat();
    }

    play();

    function reset() {
        let resets = document.getElementById('reset')
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);
        showClue.innerHTML = "";
        context.clearRect(0, 0, 400, 400);
        play();
    }
}



