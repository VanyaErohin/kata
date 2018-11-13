function  language(e) {
    if (e.classList.contains('language--opened')) {
        e.classList.remove('language--opened')
    } else {
        e.classList.add('language--opened')
    }
}

function menu(e) {
    var header = document.getElementsByClassName('header')[0];
    if (header) {
        if (header.classList.contains('header--active')) {
            header.classList.remove('header--active')
        } else {
            header.classList.add('header--active')
        }
    }
}