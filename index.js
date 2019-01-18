
   document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left',
      hoverEnabled: false
    });
  });

//tooltips for nav_bar icons
$(document).ready(function(){
  $('.tooltipped').tooltip();
  $('.tooltip').tooltip('margin', 5);
});
      
//cursor animations 
$(document)
  .mousemove(function(e) {
    $('.cursor')
      .eq(0)
      .css({
        left: e.pageX-10,
        top: e.pageY-10
      });
    
  })

//adjusting background color on navbar hovering
  $(".fixed-action-btn").mouseover(function(){ 
       
});
