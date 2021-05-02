/**

create h1 tag with hello world
using javascript


javascript -----> DOM

 */
 
const h1 = document.createElement('h1');
h1.innerText = 'Hello world with javascript';

const container = document.getElementById('container');
container.appendChild(h1);