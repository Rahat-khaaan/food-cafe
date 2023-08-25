const header = document.querySelector("header");
window.addEventListener("scroll",function() {
    header.classList.toggle("sticky", window.scrollY > 80);
});

const menu = document.querySelector('#menu-icon');
const navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll= () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset:true
})
sr.reveal ('.home-text',{delay:300});
sr.reveal ('.home-img',{delay:300});
sr.reveal ('.container',{delay:300});

sr.reveal ('.about-img',{});
sr.reveal ('.about-text',{delay:300});


sr.reveal ('.middle-text h2',{delay:300});
sr.reveal ('.row',{delay:300});

sr.reveal ('.review-box',{delay:300});
