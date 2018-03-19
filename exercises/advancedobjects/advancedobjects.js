

var warriorFactory = function(name, weapon){
  var warrior = {};

  warrior.name = name;
  warrior.weapon = weapon;

  warrior.attack = function(){
    return this.name + " attacks with their " + this.weapon + "!";
  };

  warrior.adventure = function(){
    return "Behold, the great warrior " + this.name + ", foremost of all warriors. They draw forth to face the Dragon of Kalamazar. Watch as " + this.attack() + ". Such bravery!";
  };

  $("#warriortarget").append('<p>'+warrior.adventure()+'</p>');
  $("#warriortarget").append('<p>'+warrior.attack()+'</p>');

  return warrior;

};

warriorFactory( "Olav the Destroyer of Weaklings", "Spiked Deathmaul of Lamentation");
