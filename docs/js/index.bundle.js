!function(){"use strict";(function(){const e=document.querySelectorAll(".faq__btn"),t=document.querySelectorAll(".faq__info");e.forEach((e=>{e.addEventListener("click",(()=>{document.querySelector(".faq__btn--active").classList.remove("faq__btn--active"),e.classList.add("faq__btn--active"),t.forEach((t=>{e.dataset.faq===t.dataset.faq?t.classList.add("faq__info--active"):t.classList.remove("faq__info--active")}))}))}))})(),function(){const e=document.querySelector(".btn__top");window.addEventListener("scroll",(()=>{(window.scrollY||document.documentElement.scrollTop)>400?e.classList.add("btn__top--active"):e.classList.remove("btn__top--active")})),e.addEventListener("click",(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}))}(),new Swiper(".swiper",{direction:"horizontal",loop:!0,slidesPerView:2,spaceBetween:32,pagination:{el:".swiper-pagination"},navigation:{nextEl:".right",prevEl:".left"}})}();