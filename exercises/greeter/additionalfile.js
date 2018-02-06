var name = prompt('What is your name?');

var checkName = function(){
  if(name === "") {
    name = prompt('What is your name, for real this time?');

    checkName(); // repeats until a name exists
  }
}

checkName(); // kicks off the name-checking the first time

alert('Hello ' + name);

var age = prompt('What is you age?');
var checkAge = function() {


    if(age === "") {
      age = prompt('Please enter you age.');

    checkAge();
  }
}
checkAge();

alert(name + ' is ' + age + ' years old.');
alert(`Knock, knock-Who's there? `);
alert('Computer')
alert('Computer who?');
alert(`Computer that can't joke`);
