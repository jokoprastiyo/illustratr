( function( $ ) {

	/*
	 * Resize entires for full width on small screens.
	 */
	function calc() {
		
		$( '.portfolio-entry .video-wrapper, .portfolio-gallery' ).each( function() {
			if( $( window ).width() < 960 ) {
	    		$( this ).css( {
	    			'width': '100%',
	    			'margin-left': '-40px',
	    		} ).css( 'width', '+=80px' );
			} else {
				$( this ).css( {
					'width': '',
					'margin-right': '',
					'margin-left': ''
				} );
			}
		} );
			
	}

	$( window ).load( function() {
		
		$( '.portfolio-entry .gallery, .portfolio-entry .tiled-gallery' ).each( function() {
			$( this ).wrap( '<div class="portfolio-gallery" />' );
			$( this ).trigger( 'resize' );
		} );
		
		calc();
		
	} ).resize( _.debounce( calc, 100 ) );;

} )( jQuery );