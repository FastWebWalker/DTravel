"use strict";
const screenWidth = window.screen.width;
console.log(screenWidth);
const screenHeight = window.screen.height;
const AboutSwiper = document.querySelector(".about-us__swiper");
const CitiesSwiper = document.querySelector(".cities__swiper");
const ClientsSwiper = document.querySelector(".clients__swiper");
if (AboutSwiper) {
  if (screenWidth < 1195) {
    const AboutSwiper = new Swiper(".about-us__swiper", {
      // Optional parameters
      loop: true,
      autoHeight: true,

      slidesPerView: 1,

      spaceBetween: 35,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
    const AboutSwiper = new Swiper(".about-us__swiper", {
      // Optional parameters
      loop: true,
      autoHeight: true,

      slidesPerView: 2.25,

      spaceBetween: 35,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}

if (CitiesSwiper) {
  if (screenWidth < 1195 && screenWidth > 767) {
    const CitiesSwiper = new Swiper(".cities__swiper", {
      // Optional parameters
      loop: true,
      autoHeight: true,

      slidesPerView: 2,

      spaceBetween: 35,
      navigation: {
        nextEl: ".cities__swiper-button-next",
        prevEl: ".cities__swiper-button-prev",
      },
    });
  } else if (screenWidth < 767) {
    const CitiesSwiper = new Swiper(".cities__swiper", {
      // Optional parameters
      loop: true,
      autoHeight: true,

      slidesPerView: 1,

      spaceBetween: 35,
      navigation: {
        nextEl: ".cities__swiper-button-next",
        prevEl: ".cities__swiper-button-prev",
      },
    });
  } else {
    const CitiesSwiper = new Swiper(".cities__swiper", {
      // Optional parameters
      loop: true,
      autoHeight: true,

      slidesPerView: 3,

      spaceBetween: 35,
      navigation: {
        nextEl: ".cities__swiper-button-next",
        prevEl: ".cities__swiper-button-prev",
      },
    });
  }
}

if (ClientsSwiper) {
  if (screenWidth < 1320 && screenWidth > 1195) {
    const CLientsSwiper = new Swiper(".clients__swiper", {
      // Optional parameters
      loop: true,
      autoHeight: true,

      slidesPerView: 3,

      spaceBetween: 35,
      navigation: {
        nextEl: ".clients__swiper-button-next",
        prevEl: ".clients__swiper-button-prev",
      },
    });
  } else if (screenWidth < 1195 && screenWidth > 767) {
    const ClientsSwiper = new Swiper(".clients__swiper", {
      // Optional parameters
      loop: true,
      autoHeight: true,

      slidesPerView: 2,

      spaceBetween: 35,
      navigation: {
        nextEl: ".clients__swiper-button-next",
        prevEl: ".clients__swiper-button-prev",
      },
    });
  } else if (screenWidth < 767) {
    const ClientsSwiper = new Swiper(".clients__swiper", {
      // Optional parameters
      loop: true,
      autoHeight: true,

      slidesPerView: 1,

      spaceBetween: 35,
      navigation: {
        nextEl: ".clients__swiper-button-next",
        prevEl: ".clients__swiper-button-prev",
      },
    });
  } else {
    const ClientsSwiper = new Swiper(".clients__swiper", {
      // Optional parameters
      loop: true,
      autoHeight: true,

      slidesPerView: 4,

      spaceBetween: 35,
      navigation: {
        nextEl: ".clients__swiper-button-next",
        prevEl: ".clients__swiper-button-prev",
      },
    });
  }
}
