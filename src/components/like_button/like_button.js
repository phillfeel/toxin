import './like_button.scss'

let hearts = document.querySelectorAll('.like_button');

hearts.forEach(heart => heart.addEventListener('click', function(){
  let likesNumber = heart.querySelector('.count');
  let counter = Number(likesNumber.textContent);

  if (heart.classList.contains('like')) {
    counter = counter - 1;
  } else {
    counter = counter + 1;
  };

  function new_count(){
    likesNumber.textContent = counter;
  };
  setTimeout(new_count,180)
  heart.classList.toggle('like');
})
);


