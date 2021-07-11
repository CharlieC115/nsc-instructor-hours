$(document).ready(function(){
    $('.sidenav').sidenav({edge: 'right'});
    $('.datepicker').datepicker({
      format: 'dd mmmm, yyyy',
      yearRange: 1,
      showClearBtn: true,
      i18n: {
        done: 'select'
      }
    });
    $('.timepicker').timepicker({
      defaultTime: '09:00',
      twelveHour: false
    });
    $('select').formSelect();
  });