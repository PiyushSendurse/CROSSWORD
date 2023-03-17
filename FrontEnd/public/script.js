var icon = document.getElementById("moon-icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        icon.src = "Images/sun.svg";
        mob_icon.innerHTML = "Light Mode";
    }
    else {
        icon.src = "Images/moon.svg";
        mob_icon.innerHTML = "Dark Mode";
    }
}

var mob_icon = document.getElementById("mobile-nav-dark-btn");
mob_icon.onclick = () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        icon.src = "Images/sun.svg";
        mob_icon.innerHTML = "Light Mode";
    }
    else {
        icon.src = "Images/moon.svg";
        mob_icon.innerHTML = "Dark Mode";
    }
}

window.onload = () => {
    const menu_btn = document.querySelector(".hamburger");
    const mobile_menu = document.querySelector('.mobile-nav');
    menu_btn.addEventListener('click', () => {
        menu_btn.classList.toggle("is-active");
        mobile_menu.classList.toggle('is-active');
    })
}