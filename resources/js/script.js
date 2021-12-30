import { utils } from './util.js'
const app = {
    randUrl: (function () {
        const videoEl = document.getElementById('videoBg');
        const rand = Math.floor(Math.random() * 2);
        const source = utils._videoPath + rand + utils._ext;
        videoEl.src = source;
    })()
}

export { app };