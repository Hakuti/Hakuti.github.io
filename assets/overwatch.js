var characters = [{
        character: "Andrew",
        health: 100,
        Attack: 40,
        counterAttack: 20,
        attribute: "Good",
        src: "assets/overwatch.png"
    },
    {
        character: "Cassandra",
        health: 120,
        Attack: 20,
        counterAttack: 20,
        attribute: "Evil",
        src: "assets/overWatch2.png"
    },
    {
        character: "Michael",
        health: 80,
        Attack: 40,
        counterAttack: 20,
        attribute: "Good",
        src: "assets/overWatch3.png"
    },
    {
        character: "Israel",
        health: 60,
        Attack: 60,
        counterAttack: 15,
        attribute: "Evil",
        src: "assets/overWatch4.png"
    },
    {
        character: "Sandra",
        health: 60,
        Attack: 60,
        counterAttack: 15,
        attribute: "Evil",
        src: "assets/overWatch5.png"
    },
    {
        character: "Stive",
        health: 60,
        Attack: 60,
        counterAttack: 15,
        attribute: "Evil",
        src: "assets/overWatch6.png"
    }

];

var hasOpponent = false;
var allOpponentsDefeated = false;
var opponentsDefeated = 0;
var options = {
    to: {
        height: 100
    }
};
//Assigned randomly
var hero = characters[Math.floor(Math.random() * characters.length)];
// console.log(hero);
// console.log(characters.indexOf(hero));
// var heroIndex = characters.indexOf(hero);
// characters.splice(characters.indexOf(hero), 1);
// console.log(characters);
// console.log(hero);

var wins = 0;
var losses = 0;

//This will be assigned via a click
var villan = characters[1];

// console.log("Attack: " + villan.Attack);
// console.log(heroIndex);
// A $( document ).ready() block.
$(document).ready(function () {

    // $("#" + heroIndex).remove();


    $("#hero-img").html("<img src=" + hero.src + " style='width: 64px; height: 64px;'>");
    $("#Hero-Health").text("Health: " + hero.health);
    $("#Hero-Attack").text("Attack: " + hero.counterAttack);

    $("#fight-button").on("click", function () {

        if (hasOpponent == true) {
            console.log(hasOpponent + " apply fight");
            hero.health = hero.health - villan.counterAttack;
            villan.health = villan.health - hero.Attack
            $("#Enemy-Health").text("Health: " + villan.health);
            $("#Hero-Health").text("Health: " + hero.health);
            $("#Hero-Attack").text("Attack: " + hero.Attack);
            // $("#hero-img").effect().shake();
            hero.Attack = hero.Attack + 6;
            console.log(villan.health);
            $("#hero-img").effect("shake");
            $("#enemy-img").effect("shake");
            if (villan.health <= 0) {
                //remove from fight and from dom
                console.log("Here");
                $("#Enemy-Health").text("");
                $("#Enemy-Attack").text("");
                $("enemy-img").attr('src', '""');
                hasOpponent = false;
                opponentsDefeated++;
                if (opponentsDefeated == 5) {
                    wins++;
                }
                console.log(hasOpponent);
                console.log(hero.health + "In villan");

            }
            if (hero.health <= 0) {
                //gameOver
                //resetGame
                losses++;
                console.log(hero.health)
                resetGame();


                console.log("game over");
            }

        } else {
            console.log("does not have Opponent do nothing");
        }
    });

    //     <div class="col-2 Anakin" id="0">
    //     <img class="mr-3" src="assets/overwatch.png" style="height:64px; width: 64px;">
    // </div>

    ///*[@id="0"]




    {
        /* <div class="col-2 Anakin" id="0">
        <img class="mr-3" src="assets/overwatch.png" style="width: 64px; height: 64px;">
        </div> */
    }
    ////*[@id="5"]
    $("#fighters-left").on("click", ".col-2", function () {

        // $(this).effect("shake");



        if (hasOpponent == true) {

            // villan = characters[$(this).attr('id')];

            // console.log(villan);
            //Do not add to DOM
            //Do nothing
            console.log("Has opponent");
            console.log($(this));
            console.log($(this).attr('id'));



        } else {
            ///Add to Enemy Jumbo
            console.log("Does not have opponent");
            console.log($(this).attr('id'));
            villan = characters[$(this).attr('id')];
            console.log(villan);
            $("#enemy-img").html("<img src=" + villan.src + " style='width: 64px; height: 64px;'>");
            $("#Enemy-Health").text("Health: " + villan.health);
            $("#Enemy-Attack").text("Attack: " + villan.counterAttack);
            hasOpponent = true;
            $(this).remove();

        }
    })

    function resetGame() {
        hasOpponent = false;
        $(".col-2").parent().empty();
        console.log(characters.length)
        for (var i = 0; i < characters.length; i++) {
            $("#fighters-left").append("<div class='col-2 " + characters[i].character + "'id=" + i + "></div>");
            $("#" + i).append("<img class='mr-3' src=" + characters[i].src + " style='width: 64px; height: 64px;'>")
            console.log(i);
        }

        $("#Hero-Health").text("");
        $("#Hero-Attack").text("");
        $("#Enemy-Health").text("");
        $("#Enemy-Attack").text("");

        characters = [{
                character: "Andrew",
                health: 100,
                Attack: 40,
                counterAttack: 20,
                attribute: "Good",
                src: "assets/overwatch.png"
            },
            {
                character: "Cassandra",
                health: 60,
                Attack: 24,
                counterAttack: 20,
                attribute: "Evil",
                src: "assets/overWatch2.png"
            },
            {
                character: "Michael",
                health: 80,
                Attack: 20,
                counterAttack: 12,
                attribute: "Good",
                src: "assets/overWatch3.png"
            },
            {
                character: "Israel",
                health: 40,
                Attack: 60,
                counterAttack: 15,
                attribute: "Evil",
                src: "assets/overWatch4.png"
            },
            {
                character: "Sandra",
                health: 100,
                Attack: 60,
                counterAttack: 15,
                attribute: "Evil",
                src: "assets/overWatch5.png"
            },
            {
                character: "Stive",
                health: 60,
                Attack: 60,
                counterAttack: 15,
                attribute: "Evil",
                src: "assets/overWatch6.png"
            }

        ];

        hero = characters[Math.floor(Math.random() * characters.length)];
        console.log("Reset game hero" + hero);
        opponentsDefeated = 0;

        allOpponentsDefeated = false;
        $("#hero-img").html("<img src=" + hero.src + " style='width: 64px; height: 64px;'>");
        $("#Hero-Health").text("Health: " + hero.health);
        $("#Hero-Attack").text("Attack: " + hero.counterAttack);
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
    }








});