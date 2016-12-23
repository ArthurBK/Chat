$(document).on('turbolinks:load', function() {

 MakeMessageChannel = function(chatroomName) { 
  App.cable.subscriptions.create({
    channel: 'ChatroomChannel',
    chatroom: chatroomName }, {  
  received: function(data) {
  // console.log(data)
    // $("#messages").removeClass('hidden')
    // return $('#messages').append(this.renderMessage(data));
    $('#chatbox').append(this.renderMessage(data));
    $('#chatbox').scrollTop($('#chatbox')[0].scrollHeight);
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

    $('#new_chatroom').submit( function(data) {
    MakeMessageChannel($('#chatroom_name').val());
  });


});

