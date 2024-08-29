"use strict";
const lightTheme = document.querySelector(".info .icons button .lightTheme");
const darkTheme = document.querySelector(".info .icons button .darkTheme");
const body = document.querySelector("body");
const header = document.querySelector("header");
const bars = document.querySelector("#bars");
const links = document.querySelector("#links");
const dropdownMenu = document.querySelector("#dropdown");
// todo ---------------------- Start Bars ------------------------ //
bars.addEventListener("click", () => {
    links === null || links === void 0 ? void 0 : links.classList.toggle("d-flex");
    console.log("Ahmed");
});
// todo ---------------------- End Bars -------------------------- //
// todo ---------------------- Start Themes -------------------------- //
lightTheme === null || lightTheme === void 0 ? void 0 : lightTheme.addEventListener("click", () => {
    if (body === null || body === void 0 ? void 0 : body.classList.contains("dark")) {
        body.classList.remove("dark");
    }
});
darkTheme === null || darkTheme === void 0 ? void 0 : darkTheme.addEventListener("click", () => {
    body === null || body === void 0 ? void 0 : body.classList.add("dark");
});
darkTheme === null || darkTheme === void 0 ? void 0 : darkTheme.addEventListener("click", () => {
    var _a, _b, _c;
    if ((_a = lightTheme === null || lightTheme === void 0 ? void 0 : lightTheme.parentElement) === null || _a === void 0 ? void 0 : _a.classList.contains("icon")) {
        (_b = lightTheme === null || lightTheme === void 0 ? void 0 : lightTheme.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove("icon");
    }
    (_c = darkTheme === null || darkTheme === void 0 ? void 0 : darkTheme.parentElement) === null || _c === void 0 ? void 0 : _c.classList.add("icon");
    if (window.scrollY >= 100) {
        header.style.backgroundColor = "rgb(19 27 77 / .9";
        header.style.backdropFilter = "blur(5px)";
    }
});
lightTheme === null || lightTheme === void 0 ? void 0 : lightTheme.addEventListener("click", () => {
    var _a, _b, _c;
    if ((_a = darkTheme === null || darkTheme === void 0 ? void 0 : darkTheme.parentElement) === null || _a === void 0 ? void 0 : _a.classList.contains("icon")) {
        (_b = darkTheme === null || darkTheme === void 0 ? void 0 : darkTheme.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove("icon");
    }
    (_c = lightTheme === null || lightTheme === void 0 ? void 0 : lightTheme.parentElement) === null || _c === void 0 ? void 0 : _c.classList.add("icon");
    if (window.scrollY >= 100) {
        header.style.backgroundColor = "#fff";
    }
});
// todo ---------------------- End Themes -------------------------- //
// todo ---------------------- Start Header Color -------------------- //
window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
        if (body === null || body === void 0 ? void 0 : body.classList.contains("dark")) {
            header.style.backgroundColor = "rgb(19 27 77 / .9";
            header.style.backdropFilter = "blur(5px)";
        }
        else {
            header.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
            header.style.backdropFilter = "blur(5px)";
        }
    }
    else {
        header.style.backgroundColor = "transparent";
        header.style.backdropFilter = "blur(0px)";
    }
});
// todo ---------------------- End Header Color ----------------------- //
// todo ---------------------- Start Scroll ----------------------- //
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};
const grid = document.querySelectorAll(".sclGrid");
grid.forEach((gd) => {
    ScrollReveal().reveal(gd, Object.assign({}, scrollRevealOption));
});
const details = document.querySelectorAll(".details");
details.forEach((det) => {
    ScrollReveal().reveal(det, Object.assign({}, scrollRevealOption));
});
const tokenSale = document.querySelectorAll(".sclToken");
tokenSale.forEach((tk) => {
    ScrollReveal().reveal(tk, Object.assign({}, scrollRevealOption));
});
const supScl = document.querySelectorAll(".supScl");
supScl.forEach((sp) => {
    ScrollReveal().reveal(sp, Object.assign({}, scrollRevealOption));
});
const sinScl = document.querySelectorAll(".sinScl");
sinScl.forEach((sin) => {
    ScrollReveal().reveal(sin, Object.assign({}, scrollRevealOption));
});
// todo ---------------------- End Scroll ----------------------- //
//# sourceMappingURL=main.js.map