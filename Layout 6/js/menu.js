$( document ).ready(function() {
   

    $( '.menu span' ).click(function() {

    	if ( $( '.menu a' ).is(':visible') == true ) {
    		
    		$( '.menu a' ).css('display', 'none');
    		$( '.menu span' ).text('Открыть меню');
    	
    	} else {
    		
    		$( '.menu a' ).css('display', 'block');
    		$( '.menu span' ).text('Закрыть меню');
    	
    	}

    	

    });


});