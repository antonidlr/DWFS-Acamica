//Query to get #click-box

const click_box = document.getElementById('click_box');

click_box.addEventListener('click', () => {
    console.log('Just clicked');
})

click_box.addEventListener('dblclick', () => {
    console.log('Just double click');
})