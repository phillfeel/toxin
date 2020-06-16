import './text-field.scss'

var Inputmask = require('inputmask');
jQuery(function() {
  Inputmask('99.99.9999').mask('.masked');
});