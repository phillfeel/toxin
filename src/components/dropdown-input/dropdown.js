import './dropdown.scss';

var $counterBlock = '<div class="clear"><h3>очистить</h3></div><div class="accept" value="accept"><h3>применить</h3></div><div class="counter"><div class="minus"><p>-</p></div><div class="number">0</div><div class="plus"><p>+</p></div></div>'

$('select').each(function () { //перебор элементов по селектору c помощью each
  var $this = $(this),
    numberOfOptions = $(this).children('option').length; //сокращаем $(this)

  $this.addClass('select-hidden');
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
    'class': 'select-options'
  }).insertAfter($styledSelect);

  //

  for (var i = 0; i < numberOfOptions; i++) {
    $('<li />', {
      text: $this.children('option').eq(i).text(),
      rel: $this.children('option').eq(i).val(),
      value: '0' 
    }).append($counterBlock).appendTo($list);
  };

  var $listItems = $list.children('li');

  //my code---------------

  var countGuests = 0

  $(".counter .plus").on("click", function () {
    var numberCount = $(this).parent('.counter').find('.number');

    numberCount.text(parseInt(numberCount.text()) + 1);
    countGuests = countGuests + 1;
    console.log(countGuests);
  });
  $(".counter .minus").on("click", function () {
    var numberCount = $(this).parent('.counter').find('.number');

    if (numberCount.text() != 0) {
      numberCount.text(parseInt(numberCount.text()) - 1);
      countGuests = countGuests - 1;
      console.log(countGuests);
    };
  });

  //---------------------

  $styledSelect.click(function (e) {
    e.stopPropagation();
    $('div.select-styled.active').not(this).each(function () {
      $(this).removeClass('active').next('ul.select-options').hide();
    });
    $(this).toggleClass('active').next('ul.select-options').toggle();
  });

  $listItems.click(function (e) {

    if (countGuests == 1) {
      var sayCountGuests = countGuests + " гость"

    } else if(countGuests == 0) {
      var sayCountGuests = "Cколько гостей"

    } else if (countGuests < 5 && countGuests > 1) {
      var sayCountGuests = countGuests + " гостя"

    } else {
      var sayCountGuests = countGuests + " гостей"

    };

    e.stopPropagation();
    $styledSelect.text(sayCountGuests)
    $this.val($(this).attr('rel'));
    //$list.hide();
    //console.log($this.val());
  });

  $(document).click(function () {
    $styledSelect.removeClass('active');
    $list.hide();
  });
  $(".select-options .accept").click(function () {
    $styledSelect.removeClass('active');
    $list.hide();
  });

  $(".select-options .clear").click(function (e) {
    e.stopPropagation();
    $styledSelect.text('Сколько гостей');
    $('li .counter .number').text('0');
    countGuests = 0;
  });
});