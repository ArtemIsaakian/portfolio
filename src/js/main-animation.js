const titles = document.querySelectorAll('[data-title]')

const arr = [];
titles.forEach((el) => {
  arr.push(el.getAttribute('data-title'));
})

function showDescription(el) {
  document.querySelector(`.main-section__title__${el}`).classList.add('show-text')
}

function hideDescription(el) {
  document.querySelector(`.main-section__title__${el}`).classList.remove('show-text')
}

//== функции, которые активируют механику автоматического отображения и скрытия карточек ==//

function show() {
  arr.some((el,i) => {
    setTimeout(showDescription, 1800 * (++i), el);
  })
}

function hide() {
  arr.some((el,i) => {
    setTimeout(hideDescription, 1800 * (++i + 0.5), el);
  })
}

//== для первого запуска автоматического показа карточек ==//

let firstAutoplayShow = setInterval(show, 1000)
let firstAutoplayHide = setInterval(hide, 1000)

setTimeout(() => clearInterval(firstAutoplayShow), 1200)
setTimeout(() => clearInterval(firstAutoplayHide), 1200)

//== для последующего автоматического показа карточек ==//

let autoplayShow = setInterval(show, 6000)
let autoplayPlayHide = setInterval(hide, 6000)