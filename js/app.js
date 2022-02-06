
// darkmode
$('.tombol').click( function() { 
    $('body').toggleClass('dark');
    $('body nav.navbar').toggleClass('glases');
    $(['.navbar-brand', '.nav-link', '.fa-ellipsis-v', '.fa-github','p', 'h1', 'h2', 'h3', 'h5', 'h6', 'label']).toggleClass('text-light');
    $(['.kotak', '.tombol']).toggleClass('bg-putih');
    $('.tombol').toggleClass('shadow-white');
    $('.fa-sun').toggleClass('appear');
    $('.fa-moon').toggleClass('hide');
    $('.head a').toggleClass('github-dark');
    $('.explanation .polka').toggleClass('polka-dark');
    $('.about .text-profesion p').toggleClass('text-white-border');
    $('.about .text-profesion span').toggleClass('text-white');
    $('ul  li').toggleClass('text-white');
    $('.icon i').toggleClass('text-white');
    $('.point .to').toggleClass('buble-white');
    $('.card').toggleClass('white-card');
    $('.form').toggleClass('form-dark');
});

// onlicklick navbar-responsive 
$('.navbar-toggler').click(function () { 
    $('.navbar-nav').toggleClass('navbar-appear');
});

// scroll
$(window).scroll(function () {
    const wScrollY = $(this).scrollTop();
    if (wScrollY > 80) {
        $('.navbar').addClass('shadow-nav')
    } if (wScrollY < 80) {
        $('.navbar').removeClass('shadow-nav');
    }

    $('.head').css({
        'transform': 'translate(0,' + wScrollY / 31 + '%)'
    });

    // parallax point

    $('.to.one').css({
        'transform': 'translate(0,' + -wScrollY / 6 + '%)'
    });

    $('.to.two').css({
        'transform': 'translate(0,' + wScrollY / 8 + '%)'
    });

    $('.to.tree').css({
        'transform': 'translate(0,' + -wScrollY / 1.3 + '%)'
    });

    $('.to.four').css({
        'transform': 'translate(0,' + -wScrollY / 1 + '%)'
    });

    $('.to.five').css({
        'transform': 'translate(0,' + -wScrollY / 1.3 + '%)'
    });
    
    $('.to.six').css({
        'transform': 'translate(0,' + -wScrollY / 3 + '%)'
    });

    $('.to.seven').css({
        'transform': 'translate(0,' + wScrollY / 1 + '%)'
    });

    $('.to.eight').css({
        'transform': 'translate(0,' + -wScrollY / 1.7 + '%)'
    });

    $('.to.nine').css({
        'transform': 'translate(0,' + -wScrollY / 7 + '%)'
    });

    $('.to.ten').css({
        'transform': 'translate(0,' + -wScrollY / 1 + '%)'
    });

    if (wScrollY > 540) {
        $('.nav-item:nth-child(2) a').addClass(['text-danger', 'active']);
        $('.nav-item:first-child a').removeClass(['text-danger', 'active']);
    }if (wScrollY < 540) {
        $('.nav-item:nth-child(2) a').removeClass(['text-danger', 'active']);
        $('.nav-item:first-child a').addClass(['text-danger', 'active']);
    }
    
    if (wScrollY > 2809) {
        $('.nav-item:nth-child(4) a').addClass(['text-danger', 'active']);
        $('.nav-item:nth-child(2) a').removeClass(['text-danger', 'active']);
    }if (wScrollY < 2809) {
        $('.nav-item:nth-child(4) a').removeClass(['text-danger', 'active']);
    }
})

// gsap
gsap.from('.kotak', {
    duration: 2,
    x: -100,
    opacity: 0,
    ease: 'bounce'
}).delay(1)

gsap.from('.head h1', {
    y: 200,
    opacity: 0,
    duration: 2,
    ease: 'circ'
})

gsap.from(['.img-circle', '.head p'], {
    y: -200,
    opacity: 0,
    duration: 2,
    ease: 'circ'
})

// tilt js
VanillaTilt.init(document.querySelectorAll(".sosmed .card"), {
    max: 30,
    speed: 800
});

// contact
const scriptURL = 'https://script.google.com/macros/s/AKfycbyq20CYeALc9XS_wONzXNo37K6oZn0qlUNwbeyOppzH0pce2Mh2eJkfxlZjj6tLRMq0/exec'
const form = document.forms['my-contact']

form.addEventListener('submit', e => {
    $('.btn-loading').toggleClass('d-none');
    $('.btn-send').toggleClass('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
        $('.btn-loading').toggleClass('d-none');
        $('.btn-send').toggleClass('d-none');
        $('.alert').removeClass('d-none');
        form.reset();
        console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
    setTimeout(() => {
        $('.alert').addClass('d-none');
    }, 8000);
    e.preventDefault()
})