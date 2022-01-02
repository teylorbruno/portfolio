const utils = {
    _videoPath: './resources/video/video-',
    _ext: '.mp4',
    _navigation: {
        about: 'about',
        work: 'work',
        contact: 'contact'
    },
    fadeOut(elem, speed) {
        if (!elem.style.opacity) {
            elem.style.opacity = 1;
        }
        setInterval(function () {
            while (elem.style.opacity > 0) {
                elem.style.opacity -= 0.02;
            }

        }, speed / 50);
    },
    fadeIn(elem, speed) {
        if (!elem.style.opacity) {
            elem.style.opacity = 1;
        }
        setInterval(function () {
            while (elem.style.opacity < 1) {
                elem.style.opacity += 0.02;
            }

        }, speed / 50);
    }

}

export { utils }