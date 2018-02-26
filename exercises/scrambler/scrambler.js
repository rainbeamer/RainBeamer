function stringPrinter(starterString){
  $('#output').append(starterString);
  }

  function funnySentence( noun, adjective, verb, adverb ){
  var sentence = "The " + adjective + " " + noun + " " + verb + " " + adverb + ".";

  stringPrinter(sentence);
};


(funnySentence('car', 'kind', 'goes', 'quickly'));
(funnySentence('boat', 'angry', 'jumps', 'slowly'));
(funnySentence('desk', 'sad', 'rides', 'freely'));
(funnySentence('computer', 'happy', 'moves', 'loudly'));
(funnySentence('mouse', 'smart', 'sings', 'softly'));
