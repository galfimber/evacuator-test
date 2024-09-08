const toTopBtn = function () {
  const btn = document.querySelector(".btn__top");

  window.addEventListener("scroll", () => {
    // определяем величину прокрутки
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
    scrollY > 400
      ? btn.classList.add("btn__top--active")
      : btn.classList.remove("btn__top--active");
  });
  // при нажатии на кнопку .btn-up
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
};

export default toTopBtn;
