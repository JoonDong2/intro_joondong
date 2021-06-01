let width = document.documentElement.clientWidth;

function onload() {
    $(".js-video-button").modalVideo({
        youtube:{
            controls:0,
            nocookie: true
        }
    });

    $(".modal-link").modalLink();  
}

function onresize() {
    width = document.documentElement.clientWidth;
}

function openModalLink(url) {
    if(width < 640 || !url) {
        window.open("https://" + url, '_blank');
        return
    }

    $.modalLink.open("https://" + url, {
        width: Math.min(width * 0.8, 900)
    });  
}