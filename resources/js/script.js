import { utils } from './util.js'
import { about } from './about.js'
import { work } from './work.js'
import { contact } from './contact.js';

const app = {
    randUrl: (function () {
        const videoEl = document.getElementById('videoBg');
        const rand = Math.floor(Math.random() * 2);
        const source = utils._videoPath + rand + utils._ext;
        videoEl.src = source;
    })(),
    aClick: (function () {
        window.addEventListener('click', event => {
            const main = document.getElementById('main');
            if (event.target.href !== undefined && event.target.href !== '') {
                const link = event.target.innerHTML;
                switch (link) {
                    case utils._navigation.about:
                        document.getElementById('header').style.display = 'none';
                        main.innerHTML = about.content;
                        main.style.display = 'flex';
                        break;
                    case utils._navigation.work:
                        document.getElementById('header').style.display = 'none';
                        main.innerHTML = work.content;
                        main.style.display = 'flex';
                        break;
                    case utils._navigation.contact:
                        document.getElementById('header').style.display = 'none';
                        main.innerHTML = contact.content;
                        main.style.display = 'flex';
                        break;

                }
            }
        });
    })()
}

export { app };