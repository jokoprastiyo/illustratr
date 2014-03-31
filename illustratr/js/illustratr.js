( function( $ ) {

	/*
	 * Add classes to images and captions if image post format.
	 */
	function image_post_format() {
		
		$( '.hentry.format-image img, .portfolio-entry .entry-content img' ).each( function() {
			var img = $( this ),
			    caption = $( this ).closest( 'div' ),
			    new_img = new Image();
			    
			new_img.src = img.attr('src');
			var img_width = new_img.width;
			    
			if ( img_width >= 1100 ) {
				$( this ).addClass( 'image-big' );
				$( this ).parents( 'p' ).addClass( 'image-big-wrapper' );
			}
			if ( caption.hasClass( 'wp-caption' ) && img_width >= 1080 ) {
				$( this ).removeClass( 'image-big' );
				caption.addClass( 'caption-big' );
			}
		} );
		
	}
	
	/*
	 * Remove content if empty.
	 */
	function content() {
		
		$( '.page-content, .entry-content, .entry-summary' ).each( function() {
			if ( $.trim( $( this ).text() ) === '' ) {
				$( this ).remove();
			}
		} );
		
	}
	
	/*
	 * Resize entry-thumbnail, entry-gallery, entry-media, video-wrapper (video post format), caption-big and image-big for full width on small screens.
	 */
	function calc() {
		
		$( '.entry-thumbnail, .entry-gallery, .entry-media, .hentry.format-video > .video-wrapper, .caption-big' ).each( function() {
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
		$( '.caption-big' ).each( function() {
			if( $( window ).width() < 960 ) {
	    		$( this ).css( 'max-width', '200%' );
			} else {
				$( this ).css( 'max-width', '' );
			}
		} );
		$( '.image-big' ).each( function() {
			if( $( window ).width() < 960 ) {
	    		$( this ).parents( 'p' ).css( {
	    			'width': '100%',
	    			'margin-left': '-40px',
	    		} ).css( 'width', '+=80px' );
			} else {
				$( this ).parents( 'p' ).css( {
					'width': '',
					'margin-right': '',
					'margin-left': ''
				} );
			}
		} );
				
	}
	
	/*
	 * Load all the functions.
	 */
	function load_fuctions() {
	
		image_post_format();
		content();
		calc();
		
	}
	$( window ).load( function() {
		
		load_fuctions();
		
		// Show content
		$( '#primary' ).animate( {
			'opacity': 1
		}, 250 );
		
	} ).resize( _.debounce( load_fuctions, 100 ) );
	$( document ).on( 'post-load', load_fuctions );

} )( jQuery );