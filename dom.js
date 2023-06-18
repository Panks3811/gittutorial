//console.log(document);
//console.log(document.all[10]);
//console.log(document.title);
//console.log(document.head);

//console.log(document.all);
//console.log(document.body);
//console.log(document.forms);

//console.log(document.images);



// get elemrnt by id //

//console.log(document.getElementById('header-title'));
//var headertitle = document.getElementById('header-title');
// header = document.getElementById('main-header');
//console.log(headertitle);
//headertitle.textContent  = 'hello';
//headertitle.innerText = 'good bye';
//console.log(headertitle.innerText);

//header.style.borderBottom= 'solid 3px #000';

///  get elements by class name
//var items = document.getElementsByClassName('list-group-item');
///console.log(items);
//items[0].style.fontWeight ='bold';
//items[1].style.fontWeight ='bold';
//items[2].style.fontWeight ='bold';
//items[3].style.fontWeight ='bold';
//items[2].style.backgroundColor = 'green';

//get elements by tagname

//var li = document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);

//li[0].style.fontWeight ='bold';
//li[1].style.fontWeight ='bold';
//li[2].style.fontWeight ='bold';
//li[3].style.fontWeight ='bold';
//li[1].style.backgroundColor = 'green';
//li[2].style.color ='white';

//get element by queryselector


//var header= document.querySelector('#main-header');
//header.style.borderBottom = "solid 4px #ccc";
//var input = document.querySelector('input');
//input.value = 'hello world';
//var sumbit = document.querySelector('input[type="submit"]');
//sumbit.value='Send';
//var item = document.querySelector('.list-group-item');
//item.style.color ="red";
//var seconditem = document.querySelector
//('.list-group-item:nth-child(3)');
//seconditem.style.color ="green";


//var seconditem = document.querySelector
//('.list-group-item:nth-child(2)');
//seconditem.style.backgroundColor ="green";

// get elements by  queryselectorall

//var titles = document.querySelectorAll('.title');
//console.log(titles);
//titles[0].textContent= 'hello';

//var add  = document.querySelectorAll('li:nth-child(odd)');
//var even = document.querySelectorAll('li:nth-child(even)');

//for (var i =  0; i < add.length ; i++)
//{
 //   add[i].style.backgroundColor = "green";
 //   even[i].style.backgroundColor = "pink";
//}


var itemList = document.querySelector('#items');
// parent node//
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = 'green';
//console.log(itemList.parentNode.parentNode.parentNode);

//parent element//
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = 'green';
//console.log(itemList.parentElement.parentElement.parentElement);


// childnode//

//console.log(itemList.childNodes);
//console.log(itemList.children);
//console.log(itemList.children[1]);

// fisrtchild
//console.log(itemList.firstChild);

// fisrt element child

//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent= 'hello';

// last element child//
//console.log(itemList.lastElementChildElementChild);
//itemList.lastElementChild.textContent= 'hello';

//nextsibling
//console.log(itemList.nextSibling);

//nextsiblingElement
//console.log(itemList.nextElementSibling);

// previousSibling
//console.log(itemList.previousSibling);

// previousElementSibling
console.log(itemList.previousElementSibling);

itemList.previousElementSibling.textContent = "HELLo";
//createelement

var newDiv = document.createElement('div');

//addclass
newDiv.className= 'hello';

//add id
newDiv.id= 'hello1';

//add attr
newDiv.setAttribute('title', 'Hello Div');

//create text node
var newDivText = document.createTextNode('HELLo');

//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '35px';

container.insertBefore(newDiv, h1);





