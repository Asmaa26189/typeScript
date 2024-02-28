var message = 'Hello World';
console.log(message);
if (typeof window !== 'undefined') {
    alert('You are on the browser');
    //can use alert()
}
else {
    console.log('You are on the server');
    //can't use alert()
}
