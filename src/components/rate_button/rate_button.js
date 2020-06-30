import './rate_button.scss'

//var rating = document.querySelector('.rating');
var rateButtons = document.querySelector('.rate_buttons');
var ratingItem = document.querySelectorAll('.rate-item');

rateButtons.onclick = function (event) {
  var target = event.target;
  var newRating = target.closest('.rating');
  ratingItem = newRating.querySelectorAll('.rate-item');

  if (target.classList.contains('rate-item')) {
    removeClass(ratingItem,'current-active')
    target.classList.add('active', 'current-active');
  } else if (target.classList.contains('path')) {
    removeClass(ratingItem,'current-active')
    target.parentNode.classList.add('active', 'current-active')
  };
};

rateButtons.onmouseover = function (event) {
  var target = event.target;
  var newRating = target.closest('.rating');
  if (!newRating) return;
  ratingItem = newRating.querySelectorAll('.rate-item');
  
  if (target.classList.contains('rate-item')) {
    removeClass(ratingItem,'active');
    target.classList.add('active');
    mouseOverActiveClass(ratingItem);
  } else if (target.classList.contains('path')) {
    removeClass(ratingItem,'active');
    target.parentNode.classList.add('active')
    mouseOverActiveClass(ratingItem);
  };
};

rateButtons.onmouseout = function(){
  addClass(ratingItem,'active');
  mouseOutActiveClass(ratingItem);
}

function removeClass(arr) {
  for(var i = 0, iLen = arr.length; i <iLen; i ++) {
    for(var j = 1; j < arguments.length; j ++) {
      ratingItem[i].classList.remove(arguments[j]);
    }
  }
}
function addClass(arr) {
  for(var i = 0, iLen = arr.length; i <iLen; i ++) {
    for(var j = 1; j < arguments.length; j ++) {
      ratingItem[i].classList.add(arguments[j]);
    }
  }
}

function mouseOverActiveClass(arr){
  for(var i = 0, iLen = arr.length; i < iLen; i++) {
    if(arr[i].classList.contains('active')){
      break;
    }else {
      arr[i].classList.add('active');
    }
  }
}

function mouseOutActiveClass(arr){
  for(var i = arr.length-1; i >=1; i--) {
    if(arr[i].classList.contains('current-active')){
      break;
    }else {
      arr[i].classList.remove('active');
    }
  }
}