 $(function(){
 	function hasClassName(inElement, inClassName)
    {
        var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)');
        return regExp.test(inElement.className);
    }
 

    $(".classname").click(function(event) {
    	/* Act on the event */
    	$("#shape").toggleClass('ring');
    	$("#shape").toggleClass('cube');

    	var stage = document.getElementById('stage');
      if (hasClassName(shape, 'ring'))
        stage.style.webkitTransform = 'translateZ(-200px)';
      else
        stage.style.webkitTransform = '';
    });
    // JS cho phần audio
    
    

})  
 