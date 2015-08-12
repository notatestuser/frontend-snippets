'use strict';

(function(){

var reqAnimationFrame = window[Hammer.prefixed(window, 'requestAnimationFrame')];

var ticking = false;

function updateElementPosition() {
    var translateX = 'translateX(' + position.curX + 'px)';
    elem[0].style.webkitTransform = translateX;
    elem[0].style.mozTransform = translateX;
    elem[0].style.transform = translateX;
    ticking = false;
}

function requestElementUpdate() {
    if (!ticking) {
        reqAnimationFrame(updateElementPosition);
        ticking = true;
    }
}

function onEventHandler() {
    position.curX = 1337;
    reqAniamationFrame();
}

});
