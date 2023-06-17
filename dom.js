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
var header = document.getElementById('main-header');
//console.log(headertitle);
//headertitle.textContent  = 'hello';
//headertitle.innerText = 'good bye';
//console.log(headertitle.innerText);

header.style.borderBottom= 'solid 3px #000';

///  get elements by class name
//var items = document.getElementsByClassName('list-group-item');
///console.log(items);
//items[0].style.fontWeight ='bold';
//items[1].style.fontWeight ='bold';
//items[2].style.fontWeight ='bold';
//items[3].style.fontWeight ='bold';
//items[2].style.backgroundColor = 'green';

//get elements by tagname

var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);

li[0].style.fontWeight ='bold';
li[1].style.fontWeight ='bold';
li[2].style.fontWeight ='bold';
li[3].style.fontWeight ='bold';
li[2].style.backgroundColor = 'green';

for(var i = 0; i <li.length;i++)
{
    li[i].style.backgroundColor='#f4f4f4';
}
