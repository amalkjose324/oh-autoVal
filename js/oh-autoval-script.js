$(document).ready(function() {
  $error_count=0;
  $('.av-phone').each(function(index){
    $(this).focusout(function(){
      var autoval_validator= /^[0-9]{9,12}$/;
      return $.fn.validate(this,autoval_validator);
    });
  });
  $('.av-email').each(function(index){
    $(this).focusout(function(){
      var autoval_validator= /^[A-Za-z0-9._]*\@[A-Za-z0-9._]*\.[A-Za-z]{2,5}$/;
      return $.fn.validate(this,autoval_validator);
    });
  });

  $.fn.validate = function(object,validator){
    $autoval_value = $(object).val();
    if(!validator.test($autoval_value)){
      $(object).css('border','1px solid red');
      if (!$(object).next("#myid").length) {
        $( "<span id='myid'>Error</span>" ).insertAfter(object);
      }
      $error_count++;
    }
    else {
      $(object).css('border','1px solid #cccccc');
      $(object).next("#myid").remove();
    }
  }
  $('.oh-autoval-form').each(function(index){
    $(this).on("submit", function(){
      $error_count=0;
      $(this).find('.oh-autoval').each(function(){
        $(this).focusout();
     });
     if($error_count>0){
       return false;
     }
     else {
       return true;
     }
   });
 });
})
