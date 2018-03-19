//exercises demontrating loops
//exercise 1
var n = 1;
var outputTarget = document.querySelector("#exercise-1");
var outputHtml = "<ul>";

while (n <= 10) {
    console.log(n);
    outputHtml += "<li>" + n + "</li>";
    n++;
}

outputHtml += "</ul>";

outputTarget.innerHTML = outputHtml;

//exercise 2
n = 2;
outputTarget = document.querySelector("#exercise-2");
outputHtml = "<ul>";

while (n <= 20) {
    console.log(n);
    outputHtml += "<li>" + n + "</li>";
  n+=2;
}

outputHtml += "</ul>";

outputTarget.innerHTML = outputHtml;

//exercise 3
n = 100;
var i = 1;
var sum = 0;

outputTarget = document.querySelector("#exercise-3");
outputHtml = "<ul>";

while (i < n) {
    sum += i;
    console.log(sum);
    i++;
    outputHtml += "<li>" + sum + "</li>";

}

outputHtml += "</ul>";

outputTarget.innerHTML = outputHtml;

//exercise 5

n = 15;
outputTarget = document.querySelector("#exercise-5");
outputHtml = "<ul>";

while (n > 0) {
  console.log(n);
  if (n % 2 === 0) {
    outputHtml += "<li>" + n + " even" + "</li>";
  } else {
    outputHtml += "<li>" + n + " odd" + "</li>";
  }
  n--;
  }
  outputHtml += "</ul>";
  outputTarget.innerHTML = outputHtml;
//exercise 6
 n = 1;
 outputTarget = document.querySelector("#exercise-6");
 outputHtml = "<ul>";

 while (n < 100) {
   if(n % 3 === 0 && n % 5 == 0) {
     console.log("fizzBuzz");
     outputHtml += "<li>FizzBuzz</li>";
   } else if (n % 3 === 0) {
     console.log("Fizz");
     outputHtml += "<li>Fizz</li>"
   } else if (n % 5 === 0) {
     console.log("Buzz")
     outputHtml += "<li>Buzz</li>";
   } else {
     console.log(n);
     outputHtml += "<li>" + n + "</li>";
   }
   n++
 }
outputHtml += "</ul>";
outputTarget.innerHTML = outputHtml;
