import { switchVideo } from './video.js';

const videoURL = document.querySelectorAll('.vid_menu a');

videoURL.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const URL = link.getAttribute('dataURL');
        switchVideo(URL);
    });
});
