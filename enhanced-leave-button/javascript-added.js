 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript">
function leave() {
  // Get away right now by opening a new tab with prepopulated google
  window.open("https://www.google.ca/?gfe_rd=cr&ei=YMYKWKraGsah8we984CwBQ#q=weather+toronto", "_newtab");
  // Replace current site with another benign site -- takes slower to load
  //window.location.replace will cause the back-button history to not be there
  window.location.replace('http://www.nbc.com/schedule');
}

$(function() {

  $("#leave").on("click", function(e) {
    leave();
  });

  $("#leave a").on("click", function(e) {
    // allow the (?) link to work
    e.stopPropagation();
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) { // escape key
      leave();
    }
  });

});
</script>
