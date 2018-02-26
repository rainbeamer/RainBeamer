//Forming an array to hold contact items and printing them to the HTML page
// var contactArray = ["Seize the day!", "Carisa Brown", "1664 Greendale Way Apt. 428", "Hixson, TN 37343", "423-877-8688", "09/23/75", "yellow"];
//
// var itemToAppend= prompt('Type item to append (p, li, or another element)');
// function appendStrings(contactArrayPassed, itemToAppend) {
// for (x=0; x < contactArrayPassed.length  ; x++){
//
//    $("#contact-list").append("<"+itemToAppend+">" + contactArrayPassed[x] + "</"+ itemToAppend + ">");
// }
// }
//
// appendStrings(contactArray);

// let contactArray = ["Seize the day!", "Carisa Brown", "1664 Greendale Way Apt. 428", "Hixson, TN 37343", "423-877-8688", "09/23/75", "yellow"]
// contactArray[7] = "A new Item"
// contactArray[8] = "rainbeamer@gmail.com"
//
// function addContent(array){
// console.log(array)
// $("#contact-array").append("<li>" + array + "</li>");
// }
//
// contactArray.forEach(addContent)


//Refactoring code for putting contact list litems in an contactObject

var contactObject ={ "quote" : "Seize the day",
                    "name"  : "Carisa Brown",
                    "address1": "1664 Greendale Way Apt. 428",
                    "address2" : "Hixson, TN 37343",
                    "phone" : "423-877-8688",
                    "dateofbirth": "09/23/75",
                    "favcolor": "yellow"
                  }


contactObject["favfood"] = "applesauce";
contactObject["email"] = "rainbeamer@bellsouth.net";

var elementLister = function( contactElement ){
  var listString = "<li>" + contactElement + "</li>";

  if(Array.isArray( contactElement )){
    listString = "<ol>";

    contactElement.forEach( function( element ){
      listString += "<li>" + element + "</li>";
    });

    listString += "</ol>";
  } else if(typeof contactElement === "object"){
    listString = "<li>";

    for(var element in contactElement){
      listString += contactElement[element] + " ";
    }

    listString += "</li>";
  }

  $("#contact-array").append(listString);
};

for(var contactType in contactObject){
  elementLister( contactObject[contactType] );
}

var puppies = [{
        name: 'Henry',
        age: 0.5,
        breed: 'Aussie',
        food: 'kibble',
        toys: ['tennis ball', 'chew toy'],
        picture: 'http://rubyriverminiaustralianshepherds.com/wp-content/uploads/aussie-puppy-for-sale-940x412.jpg'
    }, {
        name: 'Tilly',
        age: 5,
        breed: 'Mutt',
        food: 'kibble',
        toys: ['bone', 'kong', 'squeaky toy'],
        picture: 'http://www.dogchannel.com/images/zones/top_promo/excited-mixed-breed.jpg'
    }, {
        name: 'Apollo',
        age: 10,
        breed: 'Labrador',
        food: 'absolutely anything',
        toys: ['old sock', 'other old sock', 'more old socks'],
        picture: 'http://media.cmgdigital.com/shared/img/photos/2014/08/01/5a/66/LadyLabrador.jpg'
    }]
//
// for((var puppyContact in puppyObject){)
//   elementLister(puppyObject.[puppyContact]);

// }
puppies.forEach(function(puppy) {
   elementLister(puppy.name);
})


// var allToys[];
 // puppies.forEach(function(puppy) {
 //  elementLister(puppy.toys);
  // allToys.push(puppy.toys);
// })



var allToys = [];
 puppies.forEach(function(puppy) {
  elementLister(puppy.toys);
  allToys.push(puppy.toys);
})
