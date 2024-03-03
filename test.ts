let message: string = 'Hello World';
console.log(message);
console.log(typeof window);
if (typeof window !== 'undefined') {
    alert('You are on the browser');
    console.log('can use alert()');
    console.log('fix');
    //can use alert()
  } else {
    console.log('You are on the server');
    console.log('can\'t use alert()');
    //can't use alert()
  }
  console.log('Master');
  console.log('test branches');
