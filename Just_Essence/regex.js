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
