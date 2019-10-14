//default list items
var items = [
    'Lorem ipsum dolor sit amet, consectetur.',
    'Lorem ipsum consectetur.',
    'Ipsum dolor sit amet.'
];
var list = document.querySelector('#myList');

//show default li items
items.forEach(function (item) {
    AddItem(item);
});

//add checked class
list.addEventListener('click', function (item) {
    if (item.target.tagName == 'LI') { //is li? control
        item.target.classList.toggle('checked'); //add class
        ToggleDeleteButton(); //show button
    }
});

//show and hide delete all button
function ToggleDeleteButton() {
    var checkList = document.querySelectorAll('.checked');

    if (checkList.length > 0) {
        document.querySelector('#deleteAll').classList.remove('d-none');
    } else {
        document.querySelector('#deleteAll').classList.add('d-none');
    }
};

//remove item use delete all button
document.querySelector('#deleteAll').onclick = function () {
    var items = document.querySelectorAll('.checked');
    items.forEach(function (item) {
        item.style.display = 'none'; //hide item
        item.classList.remove('checked'); //remove checked class
        ToggleDeleteButton(); //button hide
    });
};

//add this project
//https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp

//add item by user
document.querySelector('#btnAdd').onclick = function () {
    var item = document.querySelector('#textItem').value;

    //control for empty input
    if (item === '') {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Please, write something!'
        });
        return;
    }

    AddItem(item);
    document.querySelector('#textItem').value = '';
};

function AddItem(item) {
    //add item
    var li = document.createElement('li');
    var t = document.createTextNode(item);
    li.className = 'list-group-item';
    li.appendChild(t);

    list.appendChild(li);
    //add close button
    var span = document.createElement('span');
    var text = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(text);
    li.appendChild(span);

    //span click event - (temporarily remove)
    span.onclick = function () {
        var li = this.parentElement;
        li.style.display = 'none';
        li.classList.remove('checked');
        ToggleDeleteButton(); //button control
    }

};
