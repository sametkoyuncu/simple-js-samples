/*
    Author: Samet Koyuncu
    Coded: 15.9.2019
*/
var models = [
	{ name:'HTML 5', selected:false},
  { name:'CSS 3', selected:false},
  { name:'BOOTSTRAP 4', selected:false},
  { name:'JAVASCRIPT', selected:true},
  { name:'JQUERY', selected:false},
  { name:'C#', selected:false},
  { name:'ASP.NET MVC', selected:false}
];

var list = document.querySelector('.list-group');

models.forEach(function(model){
var li = '';
if(model.selected){
	li = '<li class="list-group-item px-5 active">'+model.name+'</li>';
}else{
	li = '<li class="list-group-item px-5">'+model.name+'</li>';
}
	list.innerHTML+=li;
});