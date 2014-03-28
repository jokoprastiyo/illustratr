<?php
/**
 * Template Name: Portfolio Page
 *
 * @package illustratr
 */

$hide_portfolio = get_theme_mod( 'illustratr_hide_portfolio_page_content' );
get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
		
		<?php if ( ! $hide_portfolio ) : ?>
			<?php while ( have_posts() ) : the_post(); ?>

				<?php the_title( '<header class="page-header"><h1 class="page-title">', '</h1></header>' ); ?>

				<div class="page-content">
					<?php
						the_content();
						wp_link_pages( array(
							'before'      => '<div class="page-links"><span class="page-links-title">' . __( 'Pages:', 'illustratr' ) . '</span>',
							'after'       => '</div>',
							'link_before' => '<span>',
							'link_after'  => '</span>',
						) );
					?>
				</div><!-- .page-content -->

				<?php edit_post_link( __( 'Edit', 'illustratr' ), '<div class="entry-meta"><span class="edit-link">', '</span></div>' ); ?>

			<?php endwhile; // end of the loop. ?>
		<?php endif; ?>

			<!-- Projects -->
			<?php
				//$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
				$args = array(
					'post_type'      => 'jetpack-portfolio',
					//'paged'          => $paged,
					'posts_per_page' => -1,
				);
				$project_query = new WP_Query ( $args );

				if ( $project_query -> have_posts() ) :
			?>
			
			<div class="portfolio-wrapper<?php if ( $hide_portfolio ) echo ' hide-page-content' ?>">
			
			<?php
				while ( $project_query -> have_posts() ) : $project_query -> the_post();

					get_template_part( 'content', 'portfolio' );

				endwhile;				
			?>
			
			</div><!-- .portfolio-wrapper -->
			
			<?php
				//illustratr_paging_nav( $project_query->max_num_pages );
				wp_reset_postdata();
			?>

			<?php else : ?>

				<section class="no-results not-found">
					<header class="page-header">
						<h1 class="page-title"><?php _e( 'Nothing Found', 'illustratr' ); ?></h1>
					</header><!-- .page-header -->

					<div class="page-content">
						<?php if ( current_user_can( 'publish_posts' ) ) : ?>

							<p><?php printf( __( 'Ready to publish your first project? <a href="%1$s">Get started here</a>.', 'illustratr' ), esc_url( admin_url( 'post-new.php?post_type=jetpack-portfolio' ) ) ); ?></p>

						<?php else : ?>

							<p><?php _e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'illustratr' ); ?></p>
							<?php get_search_form(); ?>

						<?php endif; ?>
					</div><!-- .page-content -->
				</section><!-- .no-results -->

			<?php endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
