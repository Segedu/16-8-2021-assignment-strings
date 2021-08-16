////1
/*let firstName = prompt("enter your first name");
let lastName = prompt("enter your last name");

function printLongestName(firstInput, secondinput) {
  if (firstInput.length > secondinput.length) {
    console.log(firstInput);
  } else {
    console.log(secondinput);
  }
}
printLongestName(firstName, lastName);*/

////2
/*let firstName = prompt("enter your first name");
let lastName = prompt("enter your last name");
function isFirstNameIncludeA(firstName) {
  if (firstName.indexOf("a") > -1) {
    console.log("first name includes a");
  }
}
isFirstNameIncludeA(firstName);*/

/*let firstName = prompt("enter your first name");
let lastName = prompt("enter your last name");
function isLastNameIncludeApi(lastName) {
  if (lastName.indexOf("api") > -1) {
    console.log("last name includes api");
  }
}
isLastNameIncludeApi(lastName);*/

////3
/*let fullName = prompt("enter your full name");

function printStringLength(randomString) {
  console.log(randomString.length);
}
printStringLength(fullName);

function isSpaceIncluded(randomString) {
  if (randomString.indexOf(" ") > -1) {
    console.log("space included");
  }
  return false;
}
isSpaceIncluded(fullName);

function printFirstHalf(randomString) {
  console.log(randomString.substring(0, randomString.indexOf(" ")));
}
printFirstHalf(fullName);

function printLastHalf(randomString) {
  console.log(randomString.substring(randomString.indexOf(" ") + 1));
}
printLastHalf(fullName);

////4
/*let userInput = prompt("search/ask something");
function getStringReturnsLongest(randomString) {
  if (randomString.length > 5) {
    return "long";
  } else {
    return "short";
  }
}
console.log( getStringReturnsLongest(userInput));*/

////5
/*let countryName = prompt("enter country name");
function isStringShortThenThree(randomString) {
  if (randomString.lengt < 3) {
    return "yes";
  } else {
    return "no";
  }
}
console.log(isStringShortThenThree(countryName));

////6
/*let str = prompt("write something");
let char = prompt("choose letter or number");
function returnsStringOrCharByStringLength(randomString, randomChar) {
  if (randomString.length > 6) {
    return randomString;
  } else {
    return randomString.indexOf(randomChar);
  }
}
console.log(returnsStringOrCharByStringLength(str, char));*/

////7
/*let str = prompt("write something");
let char = prompt("choose letter or number");
function returnsStringOrCharIfCharExist(randomString, randomChar) {
  if (randomString.indexOf(randomChar) > -1) {
    return randomString.indexOf(randomChar);
  } else {
    return randomString;
  }
}
console.log(returnsStringOrCharIfCharExist(str, char));*/

////8
/*let firstName = prompt("write your first name");
let lastName = prompt("write your last name");
function getStringReturnsWithFormat(firstString, secondString) {
  return `${firstString
    .substring(0, 1)
    .toLowerCase()}. ${secondString.toUpperCase()}`;
}
console.log(getStringReturnsWithFormat(firstName, lastName));*/

////9

/*let lastName = prompt("write your last name");
let secondLastName = prompt("write another last name");
function returnsLongestLastName(firstString, secondString) {
  if (firstString.length > secondString.length) {
    return firstString;
  } else {
    console.log(secondString.toLowerCase());
  }
}
returnsLongestLastName(lastName, secondLastName);*/

////10
/*let str = prompt("search somthing");
let char = prompt("write some letter");
function isCharIsInString(randomString, randomChar) {
  if (randomString.indexOf(randomChar) > -1) {
    return randomString;
  } else {
    console.log("the char doesn't exist");
  }
}
console.log(isCharIsInString(str, char));*/
