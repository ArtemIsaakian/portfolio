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
    setTimeout(showDescription, 1500 * (++i), el);
  })
}

function hide() {
  arr.some((el,i) => {
    setTimeout(hideDescription, 2000 * (++i + 0.5), el);
  })
}

show()
hide()
