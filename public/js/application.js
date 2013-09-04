$(document).ready(function() {

$('form').on('submit',function(e){
  console.log('in submit')
  e.preventDefault();
  var form_data = $(this).serialize()
  console.log(form_data)
    $.ajax({
    url: this.action,
    type: this.method,
    data: $(this).serialize()
  }).done(function(server_data){
    console.log("success " + server_data);
    $('#grandma_says').html(server_data)

  }).fail(function(jqXHR,textStatus,errorThrown){
    console.log("Fail! " + errorThrown);
});
});
});
