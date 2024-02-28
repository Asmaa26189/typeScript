var message = 'Hello World';
console.log(message);
console.log(typeof window);
if (typeof window !== 'undefined') {
    alert('You are on the browser');
    console.log('can use alert()');
    //can use alert()
}
else {
    console.log('You are on the server');
    console.log('can\'t use alert()');
    //can't use alert()
}
