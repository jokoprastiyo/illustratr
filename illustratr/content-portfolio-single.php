<?php
/**
 * @package Illustratr
 */
 
// Access global variable directly to adjust the content width for portfolio single page
if ( isset( $GLOBALS['content_width'] ) ) {
	$GLOBALS['content_width'] = 1100;
}
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
		
		<?php echo get_the_term_list( $post->ID, 'jetpack-portfolio-type', '<span class="portfolio-entry-meta">', _x(', ', 'Used between list items, there is a space after the comma.', 'illustratr' ), '</span>' ); ?>
	</header><!-- .entry-header -->
	
	<div class="entry-content">
		<?php the_content(); ?>
		<?php
			wp_link_pages( array(
				'before'   => '<div class="page-links clear">',
				'after'    => '</div>',
				'pagelink' => '<span class="page-link">%</span>',
			) );
		?>
	</div><!-- .entry-content -->
	
	<?php
		$comments_status = false;
		if ( ! post_password_required() && ( comments_open() || '0' != get_comments_number() ) ) {
			$comments_status = true;
		}
	?>
	
	<?php
		/* translators: used between list items, there is a space after the comma */
		$tags_list = get_the_term_list( $post->ID, 'jetpack-portfolio-tag', '', __( ', ', 'illustratr' ) );
	?>
	
	<footer class="entry-meta<?php if ( ! current_user_can( 'edit_posts' ) && ! $comments_status && ! $tags_list ) echo ' empty-meta' ?>">
		<?php if ( $tags_list ) : ?>
			<span class="tags-links"><?php printf( __( 'Tagged %1$s', 'illustratr' ), $tags_list ); ?></span>
		<?php endif; ?>

		<?php if ( $comments_status ) : ?>
		<span class="comments-link"><?php comments_popup_link( __( 'Leave a comment', 'illustratr' ), __( '1 Comment', 'illustratr' ), __( '% Comments', 'illustratr' ) ); ?></span>
		<?php endif; ?>

		<?php edit_post_link( __( 'Edit', 'illustratr' ), '<span class="edit-link">', '</span>' ); ?>
	</footer><!-- .entry-meta -->
</article><!-- #post-## -->
