declare var ScrollReveal: any;

const lightTheme = document.querySelector(".info .icons button .lightTheme");
const darkTheme = document.querySelector(".info .icons button .darkTheme");
const body = document.querySelector("body");
const header: HTMLElement = document.querySelector("header");

const bars: HTMLButtonElement = document.querySelector("#bars");
const links = document.querySelector("#links");
const dropdownMenu = document.querySelector("#dropdown");

// todo ---------------------- Start Bars ------------------------ //
bars.addEventListener("click", () => {
  links?.classList.toggle("d-flex");
  console.log("Ahmed");
});

// todo ---------------------- End Bars -------------------------- //

// todo ---------------------- Start Themes -------------------------- //
lightTheme?.addEventListener("click", () => {
  if (body?.classList.contains("dark")) {
    body.classList.remove("dark");
  }
});

darkTheme?.addEventListener("click", () => {
  body?.classList.add("dark");
});

darkTheme?.addEventListener("click", () => {
  if (lightTheme?.parentElement?.classList.contains("icon")) {
    lightTheme?.parentElement?.classList.remove("icon");
  }
  darkTheme?.parentElement?.classList.add("icon");
  if (window.scrollY >= 100) {
    header.style.backgroundColor = "rgb(19 27 77 / .9";
    header.style.backdropFilter = "blur(5px)";
  }
});

lightTheme?.addEventListener("click", () => {
  if (darkTheme?.parentElement?.classList.contains("icon")) {
    darkTheme?.parentElement?.classList.remove("icon");
  }
  lightTheme?.parentElement?.classList.add("icon");
  if (window.scrollY >= 100) {
    header.style.backgroundColor = "#fff";
  }
});
// todo ---------------------- End Themes -------------------------- //

// todo ---------------------- Start Header Color -------------------- //
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    if (body?.classList.contains("dark")) {
      header.style.backgroundColor = "rgb(19 27 77 / .9";
      header.style.backdropFilter = "blur(5px)";
    } else {
      header.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
      header.style.backdropFilter = "blur(5px)";
    }
  } else {
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
  ScrollReveal().reveal(gd, {
    ...scrollRevealOption,
  });
});

const details = document.querySelectorAll(".details");

details.forEach((det) => {
  ScrollReveal().reveal(det, {
    ...scrollRevealOption,
  });
});

const tokenSale = document.querySelectorAll(".sclToken");

tokenSale.forEach((tk) => {
  ScrollReveal().reveal(tk, {
    ...scrollRevealOption,
  });
});

const supScl = document.querySelectorAll(".supScl");

supScl.forEach((sp) => {
  ScrollReveal().reveal(sp, {
    ...scrollRevealOption,
  });
});

const sinScl = document.querySelectorAll(".sinScl");

sinScl.forEach((sin) => {
  ScrollReveal().reveal(sin, {
    ...scrollRevealOption,
  });
});

// todo ---------------------- End Scroll ----------------------- //
