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


var header= document.querySelector('#main-header');
header.style.borderBottom = "solid 4px #ccc";

var input = document.querySelector('input');
input.value = 'hello world';

var sumbit = document.querySelector('input[type="submit"]');
sumbit.value='Send';


//var item = document.querySelector('.list-group-item');
//item.style.color ="red";

var seconditem = document.querySelector
('.list-group-item:nth-child(3)');
seconditem.style.color ="green";


//var seconditem = document.querySelector
//('.list-group-item:nth-child(2)');
//seconditem.style.backgroundColor ="green";



// get elements by  queryselectorall

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent= 'hello';

var add  = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for (var i =  0; i < add.length ; i++)
{
    add[i].style.backgroundColor = "green";
    even[i].style.backgroundColor = "pink";
}