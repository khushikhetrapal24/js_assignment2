// variables
var thumbnails = [...document.querySelectorAll('ul li')];
var images = [...document.querySelectorAll('figure')];
var fullImage = document.querySelector('figure img');

// binding event through loop
for(let item of thumbnails) {
    item.addEventListener('click', function(event) {
        var target = event.currentTarget.getAttribute('data-target');
        for(let elem of thumbnails) {
            elem.classList = '';
        }
        event.currentTarget.classList = 'active';
        var imgToShow = document.querySelector(target);
        for(let item of images) {
            item.classList = '';
        }
        imgToShow.classList = 'active';
    });
}