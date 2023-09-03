// macro task queue 
// micro task queue 

function getData() {
  fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()).then(({title}) => console.log(`응답${title}`))
}


function handleHeavyTask(bFetch) {
  if (bFetch) getData();
  else queueMicrotask(() => console.log("지연없이실행"));
}

setTimeout(() => console.log("또 다른 비동기 코드"));

  (function() {
    console.log('안녕하세요');
    handleHeavyTask(false);
    console.log('무거운 작업이 시작됐어요');
  })();
