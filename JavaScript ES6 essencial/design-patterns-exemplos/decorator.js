let loggedIn = false;

function callIfAuthenticated(fn){
    return !!loggedIn && fn();
}

function sun(a,b) {
    return a+b;
}

console.log(callIfAuthenticated(() => sun(2,3)));
loggedIn = true;
console.log(callIfAuthenticated(() => sun(2,3)));
loggedIn = false;
console.log(callIfAuthenticated(() => sun(2,3)));
