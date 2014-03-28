( function( $ ) {

	/*
	 * Resize entires for full width on small screens.
	 */
	function calc() {
		
		$( '.portfolio-wrapper' ).each( function() {
			if( ( $( window ).width() < 960 ) && ( $( window ).width() > 767 ) ) {
	    		$( this ).css( {
	    			'width': '100%',
	    			'margin-left': '-60px',
	    		} ).css( 'width', '+=120px' );
	    	} else if ( $( window ).width() < 768 ) {
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
	
		$( '.portfolio-featured-image' ).each( function() {
			$( this ).wrap( '<div class="portfolio-thumbnail" />' );
		} );
	
		calc();
	
		var portfolio_wrapper = $( '.portfolio-wrapper, .jetpack-portfolio-shortcode' );
	
		portfolio_wrapper.imagesLoaded( function() {
			portfolio_wrapper.masonry( {
				columnWidth: 1,
				itemSelector: '.portfolio-entry',
				transitionDuration: 0
			} );
			
			// Show the blocks
			$( '.portfolio-entry' ).animate( {
				'opacity' : 1
			}, 250 );
		} );

		$( window ).resize( function () {

			// Force layout correction after 1500 milliseconds
			setTimeout( function () {
				calc();
				portfolio_wrapper.masonry();
			}, 1500 );

		} );
		
		// Layout posts that arrive via infinite scroll
		$( document.body ).on( 'post-load', function () {

			var new_items = $( '.infinite-wrap .portfolio-entry' );

			portfolio_wrapper.append( new_items );
			portfolio_wrapper.masonry( 'appended', new_items );

			// Force layout correction after 1500 milliseconds
			setTimeout( function () {
				
				portfolio_wrapper.masonry();
				
				// Show the blocks
				$( '.portfolio-entry' ).animate( {
					'opacity' : 1
				}, 250 );
				
			}, 1500 );

		} );

	} );

} )( jQuery );