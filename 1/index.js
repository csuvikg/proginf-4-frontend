// 1. feladat
const links = Array.from(document.querySelectorAll('#mainNav a'));
links.forEach(link => {
    link.onclick = event => {
        event.preventDefault();
        document.querySelector(event.target.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        })
        history.pushState(null, null, event.target.getAttribute("href"))
    } 
});

// 2. feladat
let prevY = 0;
const NAVBAR_HEIGHT = 200;
const navBar = document.getElementById("mainNav");
window.onscroll = () => {
    const a = prevY <= NAVBAR_HEIGHT;
    const b = window.scrollY > NAVBAR_HEIGHT;
    if (a && b || !a && !b) {
        navBar.classList.toggle("navbar-scrolled");
    }
    prevY = scrollY;
}

// let ticking = false;
// window.addEventListener("scroll", () => {
//     if (ticking) return;
//     document.querySelector("nav").classList.toggle("navbar-scrolled", scrollY > 200);
//     window.requestAnimationFrame(() => ticking = false);
//     ticking = true;
// })

// Or using lodash throttle or debounce

// 3. feladat
{
    const cb = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animated", entry.target.dataset.scrollAnimation);
            }
        })
    }
    const observer = new IntersectionObserver(cb);
    Array.from(document.querySelectorAll("[data-scroll]")).forEach(e => observer.observe(e));
}

// 4. feladat
