const comments = [
  ...document.querySelectorAll(
    'a[href="/%D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9-%D0%A4%D0%B5%D1%80%D0%B0%D0%BD%D1%82%D0%B5"]'
  ),
];

// Так как в массиве comments сейчас находится по два элемента(аватар и текст комментария) на каждый комментарий - нам нужно убрать дублирующие элементы
for (let i = 0; i < comments.length; i++) {
  if (!comments[i].classList.contains('UserAvatar')) comments.splice(i, 1);
}

for (let i = 0; i < comments.length; i++) {
  comments[i].parentNode.parentNode.parentNode.replaceWith(
    'Комментарий пользователя скрыт'
  );
}
