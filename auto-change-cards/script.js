/*
    Author: Samet Koyuncu
    Coded: 15.9.2019
*/
var models = [{
    name: 'Fox',
    image: 'https://images.unsplash.com/photo-1503886299049-280d37f62583?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    text: 'Foxes are small-to-medium-sized, omnivorous mammals belonging to several genera of the family Canidae..',
    link: 'https://images.unsplash.com/photo-1503886299049-280d37f62583?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
},
{
    name: 'Wolf',
    image: 'https://images.unsplash.com/photo-1556568543-b0a7c8ccd0bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    text: 'The wolf, also known as the gray/grey wolf, is a canine native to the wilderness and remote areas of Eurasia and North America..',
    link: 'https://images.unsplash.com/photo-1556568543-b0a7c8ccd0bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
},
{
    name: 'Dog',
    image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
    text: 'The domestic dog is a member of the genus Canis, which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore..',
    link: 'https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80'
}
];
setInterval(function () {
    var index = Math.floor(Math.random() * models.length);

    var img = document.querySelector('.card-img-top');
    var title = document.querySelector('.card-title');
    var text = document.querySelector('.card-text');
    var a = document.querySelector('a');

    img.setAttribute('src', models[index].image);
    a.setAttribute('href', models[index].link);
    a.textContent = 'Read More';
    title.textContent = models[index].name;
    text.textContent = models[index].text;

}, 1000);