/*
 * Project: akrismed
 * File: /index.js
 * File Created: 2022-03-01, 22:50:10
 * Author: Wojciech Sobczak (wsobczak@gmail.com)
 * -----
 * Last Modified: 2022-03-01, 23:36:26
 * Modified By: Wojciech Sobczak (wsobczak@gmail.com)
 * -----
 * Copyright © 2021 - 2022 by vbert
 */

// Navbar toggle fixed
const navbarTop = document.getElementById('navbarTop');
const navbarClass = '.navbar';
const fixedClass = 'fixed-top';
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            navbarTop.classList.add(fixedClass);
            // Add padding-top to body
            const navbarHeight = document.querySelector(navbarClass).offsetHeight;
            document.body.style.paddingTop = `${navbarHeight}px`;
        } else {
            navbarTop.classList.remove(fixedClass);
            // Remove padding-top to body
            document.body.style.paddingTop = '0';
        }
    });
});
