function displayTalk(e, link)
{
  var talk = $(".talkAbstract#" + link.id);
  talk.show();

  var time = 200;
  $(".blackout").fadeIn(time);
  $(".talksContent").slideDown(time);
}

function hideAllConferenceElements()
{
  $(".blackout").hide();
  $(".talksContent").hide();
  $(".talkAbstract").hide();
}

$(document).ready(function() {
  hideAllConferenceElements();

  $(".talkLink").click(function(event) {
    displayTalk(event, this);
  });

  $(".blackout").click(function(event) {
    if($(event.target).hasClass("blackout"))
      hideAllConferenceElements();
  });
});
