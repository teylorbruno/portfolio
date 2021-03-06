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
            const showMenu = document.getElementById('show-hide');
            if (event.target.href !== undefined && event.target.href !== '') {
                const link = event.target.innerHTML;
                const h = document.getElementById('header');
                switch (link) {
                    case utils._navigation.about:
                        h.classList.add('hide');
                        main.innerHTML = about.content;
                        main.style.display = 'flex';
                        showMenu.style.display = 'block';
                        break;
                    case utils._navigation.work:
                        h.classList.add('hide');
                        main.innerHTML = work.content;
                        main.style.display = 'flex';
                        showMenu.style.display = 'block';
                        break;
                    case utils._navigation.contact:
                        h.classList.add('hide');
                        main.innerHTML = contact.content;
                        main.style.display = 'flex';
                        showMenu.style.display = 'block';
                        break;

                }
            }
        });
    })(),
    showHideMenu: (function () {
        const showHideBtn = document.getElementById('show-hide')
        const header = document.getElementById('header');
        showHideBtn.addEventListener('mouseover', function () {
            showHideBtn.style.paddingLeft = '0.4rem';
            showHideBtn.style.backgroundColor = 'rgba(0,0,0,0.5)';
        });
        showHideBtn.addEventListener('mouseout', function () {
            showHideBtn.style.paddingLeft = '0.2rem';
            showHideBtn.style.backgroundColor = 'rgba(0,0,0,0.3)';
        });
        showHideBtn.addEventListener('click', function () {
            if (header.classList.contains('hide')) {
                header.classList.remove('hide');
                header.classList.add('hidden-menu');
                showHideBtn.innerHTML = '&#8249;';
            } else {
                header.classList.remove('hidden-menu');
                header.classList.add('hide');
                showHideBtn.innerHTML = '&#8250;';
            }
        });
    })()
}

export { app };