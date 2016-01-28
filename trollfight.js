var user = prompt("Oh no! A troll appeared! Are you smart, strong, or fast? Choose one.").toUpperCase();

switch(user) {
    case 'SMART':
        console.log("You play chess with the troll.");
        var smart = prompt("Do you know how to play chess?").toUpperCase();
            if(smart == "YES") {
                console.log("You trounce him easily! He is very upset.");
            }
            else {
                console.log("The troll beats you. This is a surprisingly smart troll.");
            }
        break;

    case 'STRONG':
        var strong = prompt("Do you fight him with a sword, axe, or both?").toUpperCase();
        if(strong == "SWORD" || "AXE"){
            console.log("It's not quite enough. The troll overpowers you with his club. You get smooshed. You are having a very bad day");
        }
        else {
            console.log("You overpower the troll and defeat him! Huzzah!");
        }
        break;

    case 'FAST':
          console.log("You run all the way home!")
        break;

    default:
        console.log("You get smooshed. You are having a very bad day. ");
}
