var response = prompt("You go into a beautiful forest. You see a tree and stream in the distance. Type 'explore' to look around the tree, or 'walk' to walk to the stream");

if (response == "explore") {
  response = prompt("There is a large box up under the tree and a rosebush down the path. Type 'open' to open the box or 'rosebush' got to the fragrant rosebush down the path.");
}
 if (response == "walk") {
    response = prompt("You see a boat. Type 'boat' to go downstream, or 'leave' to exit the forest");
  }
if (response == "rosebush") {
        response = prompt("You stop to see the rosebush and you see a map. Type 'map' to get the map, or 'leave' to exit the forest.");
 }
     if (response == "boat") {
      alert('You go downstream to a buch of animals. You have fun watching the animals, especially the squirrels. Game over. Refresh the page to play again.');
      response = "over";
}


      else if (response == "open") {
         alert('The box contains a message that tells you to leave the forest. Game over.');
         response = "over";

       }




    if (response == "map") {
       response = alert("You follow the map. It leads to a treasure. A beautiful cluster of flowers. You take a photo of the flowers and leave garden. Adventure over. Refresh the page to try again.");
       response = "over";

   }
      else if (response == "leave") {
         alert('You have left the forest. Please refresh the browser to play again');
         response = "over";
       }

     else if (response == "" || response == null) {
         alert("Please type a valid reponse. Refresh the page to start the game over.");
       }

       else if (response > 0 || response !== "over"){
          alert('Invalid respose. Please refresh the browse to play again.');
       }
