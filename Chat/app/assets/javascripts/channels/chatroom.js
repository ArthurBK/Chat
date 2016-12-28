$(document).on('turbolinks:load', function() {

 MakeMessageChannel = function(chatroomName) {
  App.cable.subscriptions.create({
    channel: 'ChatroomChannel',
    chatroom: chatroomName }, {
  received: function(data) {
    $("#" + chatroomName).append(this.renderMessage(data));
    console.log(data.chat_name);

    if (($(".channel-name:contains('" + data.chat_name + "')").hasClass("active"))){
      $("#" + chatroomName).scrollTop($("#" + chatroomName)[0].scrollHeight); }
    else {
      $(".channel-name:contains('" + data.chat_name + "')").addClass("bold");
    }
  },

  subscribed: function() {
    console.log("subscribed");
  },

  renderMessage: function(data) {
    return "<p> <b>" + data.name + ": </b>" + data.content + "</p>";
  }
});
}

  $('#new_chatroom').hide();
  $('#plus_button').on("click", function(event){
    $('#new_chatroom').show(1000);
  });

      $(".channel-name").on("click", function(event){
        $(".channel-name").each( function(key, elem) {
          $(elem).removeClass("active");
        });
        $(event.currentTarget).addClass("active");
        $(event.currentTarget).removeClass("bold");
      });

  $('#post_content').on("keydown", function(event) {
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
