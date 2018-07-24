
//An array of Objects for different characters and their properties

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

    //Add randomly assigned hero to hero div and h1
    $("#hero-img").html("<img src=" + hero.src + " style='width: 64px; height: 64px;'>");
    $("#Hero-Health").text("Health: " + hero.health);
    $("#Hero-Attack").text("Attack: " + hero.counterAttack);
    $("#fight-button").on("click", function () {

        //flag to check if one is currently fighting an opponent
        if (hasOpponent == true) {
            
            //adjusting battle properties
            hero.health = hero.health - villan.counterAttack;
            villan.health = villan.health - hero.Attack
            $("#Enemy-Health").text("Health: " + villan.health);
            $("#Hero-Health").text("Health: " + hero.health);
            $("#Hero-Attack").text("Attack: " + hero.Attack);
            hero.Attack = hero.Attack + 6;
            
            //animation to shake the div
            $("#hero-img").effect("shake");
            $("#enemy-img").effect("shake");

            //reset the properties of the enemy for the battle
            if (villan.health <= 0) {
                
                
                $("#Enemy-Health").text("");
                $("#Enemy-Attack").text("");
                $("enemy-img").attr('src', '""');
                hasOpponent = false;
                opponentsDefeated++;
                if (opponentsDefeated == 5) {
                    wins++;
                }
                

            }
            //Once the hero's health is zero or less reset the game
            if (hero.health <= 0) {
                //gameOver
                //resetGame
                losses++;
                
                resetGame();


               
            }

        } else {
            
        }
    });



    $("#fighters-left").on("click", ".col-2", function () {


        //Do nothing, to be remodified.
        if (hasOpponent == true) {


        } else {
            ///Add to Enemy Jumbo
            
            villan = characters[$(this).attr('id')];
            
            $("#enemy-img").html("<img src=" + villan.src + " style='width: 64px; height: 64px;'>");
            $("#Enemy-Health").text("Health: " + villan.health);
            $("#Enemy-Attack").text("Attack: " + villan.counterAttack);
            hasOpponent = true;
            $(this).remove();

        }
    })

    //Reset elements
    function resetGame() {
        //reset the flag no opponent being fought
        hasOpponent = false;
        //empty the columns inside fighters-left
        $(".col-2").parent().empty();
        
        //readd the columns with the appropriate content
        for (var i = 0; i < characters.length; i++) {
            $("#fighters-left").append("<div class='col-2 " + characters[i].character + "'id=" + i + "></div>");
            $("#" + i).append("<img class='mr-3' src=" + characters[i].src + " style='width: 64px; height: 64px;'>")
            console.log(i);
        }

        //Reset the hero health and attack
        $("#Hero-Health").text("");
        $("#Hero-Attack").text("");

        //Reset the enemy health and attack
        $("#Enemy-Health").text("");
        $("#Enemy-Attack").text("");

        //Reset properties back to original status
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

        //select a new random hero
        hero = characters[Math.floor(Math.random() * characters.length)];
        
        //reset enemies defeated to 0
        opponentsDefeated = 0;

        //reset flag
        allOpponentsDefeated = false;

        //Readd the properties of hero's health and attack
        $("#hero-img").html("<img src=" + hero.src + " style='width: 64px; height: 64px;'>");
        $("#Hero-Health").text("Health: " + hero.health);
        $("#Hero-Attack").text("Attack: " + hero.Attack);
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
    }








});