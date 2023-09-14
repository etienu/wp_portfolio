//jQuery
/*
$(function() {
    $(window).on('load', function() {
        $('.l-loader').delay(50).fadeOut(500);
        //        $('.l-loader__bg').delay(80).fadeOut(70);
        $('.l-loader__bg').delay(50).addClass("hide");
    });
    setTimeout(function() {
        $('.l-loader__bg').fadeOut(500);
    }, 5000);
});
*/

//  javaScript
function init() {
    let elements = document.getElementsByTagName('button');
    for (let element of elements) {
        if (element.getAttribute('data-id')) {
            element.addEventListener('click', testLoad);
        }
    }
    stopAllLoad();
}

function testLoad() {
    //let dataId = this.getAttribute('data-id');
    let dataId = "loading";
    if (dataId) {
        startLoad(dataId);
        setTimeout(stopAllLoad, 3000);
    }
    stopAllLoad();
}

function startLoad(id) {
    document.getElementById(id).style.visibility = 'visible';
}

function stopAllLoad() {
    let elements = document.getElementsByClassName('l-loader');
    for (let element of elements) {
        //element.style.visibility = 'hidden';
        //
        element.classList.add("hide");
        //  消しておく
        setTimeout(function() {
            element.classList.add("delete");
        }, 1000);
    }
}

window.addEventListener('load', testLoad);