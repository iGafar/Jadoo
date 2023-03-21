let language_btn = document.getElementsByClassName('header__language')[0];

language_btn.onclick = () => {
    const language = language_btn.textContent;

    if (language === 'EN') {
        language_btn.textContent = 'RU';
    } else {
        language_btn.textContent = 'EN';
    }
}

const prev_arrow = document.getElementsByClassName('testimonials__prev-arrow')[0];
const next_arrow = document.getElementsByClassName('testimonials__next-arrow')[0];

prev_arrow.onclick = () => {
    const testimonials_items = document.getElementsByClassName('testimonials__right-block');
    const testimonials__pag_items = document.getElementsByClassName('testimonials__left-dot');

    for(let i = 0; i < testimonials_items.length; i++) {

        const item = testimonials_items[i];

        if(item.classList.contains('active')) {
            item.classList.remove('active');
            item.classList.add('next');

            testimonials__pag_items[i].classList.remove('active');
            continue;
        }

        if(item.classList.contains('next')) {
            item.classList.remove('next');
            item.classList.add('unshowed');
            continue;
        }

        if(item.classList.contains('unshowed')) {
            item.classList.remove('unshowed');
            item.classList.add('active');

            testimonials__pag_items[i].classList.add('active');
            continue;
        }

    }
}

next_arrow.onclick = () => {
    const testimonials_items = document.getElementsByClassName('testimonials__right-block');
    const testimonials__pag_items = document.getElementsByClassName('testimonials__left-dot');

    for(let i = 0; i < testimonials_items.length; i++) {

        const item = testimonials_items[i];

        if(item.classList.contains('active')) {
            item.classList.add('unshowed');
            item.classList.remove('active');

            testimonials__pag_items[i].classList.remove('active');
            continue;
        }

        if(item.classList.contains('next')) {
            item.classList.add('active');
            item.classList.remove('next');

            testimonials__pag_items[i].classList.add('active');
            continue;
        }

        if(item.classList.contains('unshowed')) {
            item.classList.add('next');
            item.classList.remove('unshowed');
            continue;
        }
    }
}