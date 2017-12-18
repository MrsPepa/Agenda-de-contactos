var contact = '';
$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    $('.modal-tirgger').modal();

    $('.left').click(function(){
    	var name = $('#icon_prefix').val();
      var phone = $('#icon_telephone').val();

      $('#agregar').append(("<div id=contact" + contact + "' class='contact col s12'>'" +
        "<div class='card horizontal'>" +
        "<div class='card-image'>" +
        "</div" +
        "<div class='card-stacked'>" +
        "<div class='card-content'>" +
        "<h4 id='info'>" + '<i class="material-icons">account_circle</i>' + ' ' + name + "</h4>" +
        '<p id="number">' + '<i class="material-icons">local_phone</i>' + ' ' + phone + '</p>' +
        '<a class="waves-effect waves-light btn trash right" id="trash"><i class="material-icons">delete</i></a>' +
        "</div>" +
        "</div>" +
        "</div>"))
      $('.trash').click(function(){
        $(this).parent().remove();
      })
    })
  });