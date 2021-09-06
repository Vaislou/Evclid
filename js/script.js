document.addEventListener('DOMContentLoaded', function() {
    // How buttons
    document.querySelectorAll('.how__link').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            document.querySelectorAll('.how__link').forEach(function(el) {
                el.classList.remove('how__link_active');
            })
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.how__grid').forEach(function(tabContent) {
                tabContent.classList.remove('how__grid_active');
            })

            document.querySelector(`[data-path="${path}"]`).classList.add('how__link_active')
            document.querySelector(`[data-target="${path}"]`).classList.add('how__grid_active')
        })
    })

    // Promo slider
    document.querySelectorAll('.dots__item').forEach(function(sliderBtn) {
        sliderBtn.addEventListener('click', function(event) {
            document.querySelectorAll('.dots__item').forEach(function(el) {
                el.classList.remove('dots__item_active');
            })

            const path = event.currentTarget.dataset.path

            document.querySelector('.promo__slider').style.background = `url('/img/${path}_slide.jpg') center center / cover no-repeat`;
            document.querySelector(`[data-path="${path}"]`).classList.add('dots__item_active');
        })
    })

    // Acordion
    document.querySelectorAll('.faq__item').forEach(function(faqBlock) {
        faqBlock.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            if (document.querySelector(`[data-text="${path}"]`).classList.contains('faq__descr_active')) {
                document.querySelector(`[data-text="${path}"]`).classList.remove('faq__descr_active');
                document.querySelector(`[data-icon="${path}"]`).classList.remove('faq__icon_close');
            } else {
                document.querySelectorAll('.faq__descr').forEach(function(elem) {
                    elem.classList.remove('faq__descr_active');
                })

                document.querySelectorAll('.faq__icon').forEach(function(elem) {
                    elem.classList.remove('faq__icon_close');
                })
    
                document.querySelector(`[data-text="${path}"]`).classList.add('faq__descr_active');
                document.querySelector(`[data-icon="${path}"]`).classList.add('faq__icon_close');
            }
        })
    })

    // Hamburger
    document.querySelector('.hamburger').addEventListener('click', function(event) {
        document.querySelector('.hamburger').classList.toggle('hamburger_active');
        document.querySelector('.hamburger__menu').classList.toggle('hamburger__menu_active');
    })

    document.querySelectorAll('.hamburger__link').forEach(function(selectLink) {
        selectLink.addEventListener('click', function(event) {
            document.querySelector('.hamburger').classList.toggle('hamburger_active');
            document.querySelector('.hamburger__menu').classList.toggle('hamburger__menu_active');
        })
    })
})