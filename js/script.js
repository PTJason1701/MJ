import { switchVideo } from './video.js';
import { GalleryPopup } from './popup.js';

const videoURL = document.querySelectorAll('.vid_menu a');

videoURL.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const URL = link.getAttribute('dataURL');
        switchVideo(URL);
    });
});

document.addEventListener('DOMContentLoaded', () => {
  GalleryPopup.init();
});