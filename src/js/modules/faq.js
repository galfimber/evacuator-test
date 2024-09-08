const faq = function () {
  const faqbtns = document.querySelectorAll(".faq__btn");
  const faqs = document.querySelectorAll(".faq__info");

  faqbtns.forEach((faqbtn) => {
    faqbtn.addEventListener("click", () => {
      document
        .querySelector(".faq__btn--active")
        .classList.remove("faq__btn--active");
      faqbtn.classList.add("faq__btn--active");
      faqs.forEach((faq) => {
        faqbtn.dataset.faq === faq.dataset.faq
          ? faq.classList.add("faq__info--active")
          : faq.classList.remove("faq__info--active");
      });
    });
  });
};

export default faq;
