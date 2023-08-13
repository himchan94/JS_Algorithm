function kmpSearch(text, word) {
  // Preprocess the word to create the failure function
  let failure = buildFailureArray(word);
  console.log("failure", failure);
  let i = 0; // Index for text[]
  let j = 0; // Index for word[]

  while (i < text.length) {
    if (word[j] === text[i]) {
      i++;
      j++;
    }
    if (j === word.length) {
      return i - j; // Pattern found
    } else if (i < text.length && word[j] !== text[i]) {
      if (j !== 0) {
        j = failure[j - 1];
      } else {
        i++;
      }
    }
  }
  return -1; // Pattern not found
}

function buildFailureArray(word) {
  let failure = Array(word.length).fill(0);
  let j = 0;

  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[j]) {
      j++;
      failure[i] = j;
    } else if (j !== 0) {
      j = failure[j - 1];
      i--; // Decrement i to try again
    }
    console.log("i", i, "j", j);
  }

  return failure;
}

// Example usage
let text = "ABABDABACDABABCABAB";
let word = "ABABCABAB";
let position = kmpSearch(text, word);

if (position !== -1) {
  console.log(`Pattern found at index ${position}`); // Output: Pattern found at index 10
} else {
  console.log("Pattern not found");
}
