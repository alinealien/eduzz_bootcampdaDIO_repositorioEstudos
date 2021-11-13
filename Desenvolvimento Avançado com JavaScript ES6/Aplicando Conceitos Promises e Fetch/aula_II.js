 //Fetch: Para fazer requesições usando Promises

/*


 /*fetch('/data.json').then(responseStream => {
     console.log(responseStream);
 });*/ 

 /*fetch('/data.json')
 .then(responseStream => responseStream.json())
    .then(data => {
        console.log(data);
    }).catch(err => {

 });*/

 // ES7 - Async /  Await(Espera a promise resolver. Assincorno e Sequencial)

const asyncTimer = () =>
  new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(12345);
      }, 1000);
  });

 const simpleFune = async () => {
 const data = await asyncTimer();
 console.log(data);
 const dataJSON = await fetch('/data.json').thrn(resStream.json())
    //throw new Error('Oh, no!'); 
    
    return data;
 };

 simpleFunc()
    .then(data => {
     console.log(data);
 })
    .catch(err => {
     console.log(err);
 });