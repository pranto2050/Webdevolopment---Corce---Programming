




// let heading = document.querySelector('#nav_bar');
let heading = document.getElementsByClassName('heading');

let selec = document.querySelectorAll('#nav_bar li');
console.log(selec);

document.getElementById('nav_bar').style.backgroundColor = 'red';
document.getElementById('nav_bar').style.fontSize = '30px';
let find = document.getElementById('nav_bar');
find.getAttribute('class');
// console.log(find);


let findClass = document.getElementById('heading');
console.log(findClass.getAttribute('class')); // class Get Attribute
// Easy Way
console.log(findClass.classList);
//  Add class
findClass.classList.add('myDD');
console.log(findClass.className);
// Remove Class
findClass.classList.remove('first');
console.log(findClass.className);


let addLI = document.getElementsByClassName('My');
console.log(addLI[0].innerText);
addLI[0].innerText = 'Go TO';
console.log(addLI[0].innerText)


//
let addLI = document.getElementsByClassName('My');
console.log(addLI[0].innerHTML);
addLI[0].innerHTML = '<li> Hss </li>';
console.log(addLI[0].innerHTML)























