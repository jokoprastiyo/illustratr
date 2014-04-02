( function( $ ) {

	$( window ).load( function() {

		var widgets_area = $( '.widgets-area' );

		$( '#secondary' ).on( 'click', '.widgets-trigger', function( event ) {
			event.preventDefault();
			$( this ).toggleClass( 'active' );
			$( '.widgets-wrapper' ).slideToggle( 100 );
			// Trigger resize to make sure widgets fit prefectly.
			$( this ).trigger( 'resize' );

			// Masonry blocks
			widgets_area.imagesLoaded( function() {
				widgets_area.masonry( {
					columnWidth: 1,
					itemSelector: '.widget'
				} );
			} );

		} );
		$( '#secondary' ).on( 'mouseenter mouseleave', '.widgets-trigger', function() {
			$( '#secondary' ).toggleClass( 'hover' );
		} );

		$( window ).resize( function () {

			// Force layout correction after 1500 milliseconds
			setTimeout( function () {
				widgets_area.masonry();
			}, 1500 );

		} );

	} );

} )( jQuery );
