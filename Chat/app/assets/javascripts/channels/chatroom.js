$(document).on('turbolinks:load', function() {

 MakeMessageChannel = function(chatroomName) {
  App.cable.subscriptions.create({
    channel: 'ChatroomChannel',
    chatroom: chatroomName }, {
  received: function(data) {
  // console.log("#" + chatroomName);
  // console.log("received_data");
    // $("#messages").removeClass('hidden')
    // return $('#messages').append(this.renderMessage(data));
    $("#" + chatroomName).append(this.renderMessage(data));
    $("#" + chatroomName).scrollTop($("#" + chatroomName)[0].scrollHeight);
  },

  subscribed: function() {
    console.log("subscribed");
  },

  renderMessage: function(data) {
    // $("#chatbox").scrollTop = $("#chatbox").scrollHeight;
    // $("#chatbox").animate({scrollTop: $("#chatbox").height()});
    return "<p> <b>" + data.name + ": </b>" + data.content + "</p>";
  }
});
}

  $("#chatrooms").on("click", function(event){
  // need to check if has firstChild
    // $("#" + event.target.firstChild.textContent).hide();
  });


  $('#post_content').on("keydown", function(event) {
    // console.log(event);
    if (event.keyCode == 13)
    {
      event.preventDefault();
      $("#button-message-home").trigger("click");
      $('#post_content').val("");
    }
  });

  $('#new_post').on('ajax:success', function(e, data, status, xhr){
    $('#post_content').val("");
  });

  $('#new_chatroom').on('ajax:success', function(e, data, status, xhr){
    $('#chatroom_name').val("");
  });



    $('#new_chatroom').on("keydown", function(event) {
      if (event.keyCode == 13)
      {
        event.preventDefault();
        $("#button-chatroom-new").trigger("click");
        $('#chatroom_name').val("");
      }
    });

    $('.channel-name a').each( function(key, val) {
      MakeMessageChannel(val.innerText.slice(1));
    });

    $('#new_chatroom').submit( function(data) {
    MakeMessageChannel($('#chatroom_name').val());
    });


});
