 //Fetch: Para fazer requesições usando Promises

 fetch('/data.json').then(responseStream => {
    responseStream.json().then(data => {
        console.log(data);
    });
 });