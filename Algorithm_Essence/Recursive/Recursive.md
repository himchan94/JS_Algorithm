# Recursive

```js
function outer(input){
  var outerScopedVariable = [];

  function helper(helperInput){
    helper(helperInput--)
  }

  helper(input);

  return outerScopedVariable;
}

```