App.messages = App.cable.subscriptions.create('ChatChannel', {  


  received: function(data) {
  // console.log(data)
    // $("#messages").removeClass('hidden')
    // return $('#messages').append(this.renderMessage(data));
   $('#chatbox').append(this.renderMessage(data));
    $('#chatbox').scrollTop($('#chatbox')[0].scrollHeight);
  },

  subscribed: function() {

    console.log("subscribed")

  },

  renderMessage: function(data) {
    // $("#chatbox").scrollTop = $("#chatbox").scrollHeight;
    // $("#chatbox").animate({scrollTop: $("#chatbox").height()});
    return "<p> <b>" + data.name + ": </b>" + data.content + "</p>";
  }
});



$(document).on('turbolinks:load', function() {
  $('#post_content').on("keydown", function(event) {
    if (event.keyCode == 13)
    {
      event.preventDefault();
      $("#button-message-home").trigger("click");
      $('#post_content').val("");
    }
  });

});
