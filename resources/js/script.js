import { utils } from './util.js'
const app = {
    randUrl: (function () {
        const videoEl = document.getElementById('videoBg');
        const rand = Math.floor(Math.random() * 2);
        const source = utils._videoPath + rand + utils._ext;
        videoEl.src = source;
    })(),
    aClick: (function () {
        window.addEventListener('click', event => {
            if (event.target.href !== undefined && event.target.href !== '') {
                const main = document.getElementById('main');
                const header = document.getElementById('header');
                main.style.width = '100%';
                header.style.display = 'none';
            }
        });
    })()
}

export { app };