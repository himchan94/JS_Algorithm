// Just Search

const story =
  "There was once an employee named Dwight. Dwigt was not very smart, but he was loyal. I could have promoted dwight but I did not.";

// g = global, i = case insenstive
const myNameSearch = /Dwigh?t/gi;

const updatedStory = story.replace(myNameSearch, "himchan");

console.log(updatedStory);

// Flexible Searches & Capturing Groups
/**
 * [] : create character set [cyr][ao]t : cat
 * [a-z][a-z][a-z] -> [a-z]{3}
 * [a-z]{1,6} -> minimum : 1 ~ maximum : 6
 * [a-z]{1,} -> minimum : 1 ~ maximum : ++
 * [a-z]{1,} === [a-z]+
 * [a-z\s]+ -> \s 띄어쓰기(white space)를 찾는다.
 * [a-z\s]+:\s[a-z]+,\s[a-z]+
 * capturing group
 * ([a-z\s]+):\s([a-z]+),\s([a-z]+)
 */

const pets = [
  "cat: Smith, Meowsalot",
  "young dog: Jones, Barksalot",
  "rabbit: Doe, Fluffy",
];

// capturing group

const petPattern = /([a-z\s]+):\s([a-z]+),\s([a-z]+)/i; // i를 하면 uppercase도 감지한다.

const petsUpdated = pets.map((pet) => pet.replace(petPattern, "$3 $2 $1"));

console.log(petsUpdated);

// username

const usernamePattern = /^[a-z][a-z0-9]{7,29}$/i; //$ end of input, ^ beginning of input
const result = usernamePattern.test("g1aasdasdf#!#");
console.log(result);

// combination
const num =
  "There are a lot of phone numbers. One is 5555555555, and another is 123-123-1234. Yet another is 321.321.4321. Another is 555 555 5555. Did you know another phone number is 1 555 555 5555 and my friend has a number of (555) 123 1234. My other friend has a number of 555 555-5555 and another has 1.987.654.3210.";

const phonePattern = /1?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})/g; ///[0-9]{3}[-.\s]?[0-9]{4}/

let results = num.match(phonePattern);
if (!results) results = [];

console.log(results.map((x) => x.replace(phonePattern, `($1) $2-$3`)));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
