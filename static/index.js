let isDesktop = navigator['userAgent'].match(/(ipad|iphone|ipod|android|windows phone)/i) ? false : true;
let fontunit = isDesktop ? 20 : ((window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth) / 320) * 10;
document.write('<style type="text/css">' +
    'html,body {font-size:' + (fontunit < 30 ? fontunit : '30') + 'px;}' +
    (isDesktop ? '#welcome,#GameTimeLayer,#GameLayerBG,#GameScoreLayer.SHADE{position: absolute;}' :
        '#welcome,#GameTimeLayer,#GameLayerBG,#GameScoreLayer.SHADE{position:fixed;}@media screen and (orientation:landscape) 