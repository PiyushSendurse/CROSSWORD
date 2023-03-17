import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const changeTheme = function () {
    var icon = document.getElementById("moon-icon");
    var mob_icon = document.getElementById("mobile-nav-dark-btn");
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

const changeThemeMobNav = () => {
    var icon = document.getElementById("moon-icon");
    var mob_icon = document.getElementById("mobile-nav-dark-btn");
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

const hamburgerMenu = () => {
    const menu_btn = document.querySelector(".hamburger");
    const mobile_menu = document.querySelector('.mobile-nav');
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle('is-active');

}

const Header = (props) => {
    return (
        <nav>
            <div id="nav-container">
                <div class="nav-logo">
                    <Link to="/"><img src="images/logo.jpg" alt="logo" /></Link>
                    <Link to="/"><p class="title">Highwayhelp</p></Link>
                </div>
                <div class="nav-links">
                    <ul>
                        <li><Link to="/about" class="links">About</Link></li>
                        {/* { <li><Link to="/products" class="links">Products</Link></li> } */}
                        <li><a href="#contact" class="links">Contact</a></li>
                        <li><Link to="/signup" class="links">Signup</Link></li>
                        <li><a href="#"><img id="moon-icon" src="Images/moon.svg" alt="dark-mode" height="18px" onClick={changeTheme} /></a></li>
                    </ul>
                </div>
                <button class="hamburger" onClick={hamburgerMenu}>
                    <div class="bar"></div>
                </button>
                <nav class="mobile-nav">
                    <ul>
                        <li><Link to="/about" class="links">About</Link></li>
                        <li><Link to="/products" class="links">Products</Link></li>
                        <li><a href="#" class="links">Contact</a></li>
                        <li><Link to="/signup" class="links">Signup</Link></li>
                        <li><a href="#" class="links" id="mobile-nav-dark-btn" onClick={changeThemeMobNav}>Dark Mode</a></li>
                    </ul>
                </nav>
            </div>
        </nav>
    );
}

export default Header;