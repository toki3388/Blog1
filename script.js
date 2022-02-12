const photoTotalNumber = 3,
      slide = document.getElementById('slide'),
      leftArrow = document.getElementById('leftArrow'),
      rightArrow = document.getElementById('rightArrow'),
      photos = document.getElementById('photos')

photos.setAttribute('src', 'photo-file/photo1.jpg');

let slideNumber = 1;

leftArrow.addEventListener('click', () => {
    if (slideNumber !== 1){
        slideNumber = slideNumber - 1;
        photos.setAttribute('src', `photo-file/photo${slideNumber}.jpg`);
    }
});

rightArrow.addEventListener('click', () => {
    if (slideNumber !== photoTotalNumber){
        slideNumber = slideNumber + 1;
        photos.setAttribute('src', `photo-file/photo${slideNumber}.jpg`);
    }
});