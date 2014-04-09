== Installation ==

1. In your admin panel, go to Appearance > Themes and click the Add New button.
2. Click Upload and Choose File, then select the theme's .zip file. Click Install Now.
3. Click Activate to use your new theme right away.

== Frequently Asked Questions ==

= How to setup the front page like the demo site? =

The demo site URL: http://illustratrdemo.wordpress.com/?demo

1. Create or edit a page, and assign it to the Portfolio Page Template from the Page Attributes module. https://cloudup.com/cRr9vf-2JFS
2. Go to Settings > Reading and set "Front page displays" to "A static page".
3. Select the page you just assigned the Portfolio Page Template to as "Front page" and then choose another page as "Posts page" to serve your blog posts.
4. Add some Projects to your Portfolio!

= I don't see the Portfolio menu in my admin, where can I find it? =

To make the Portfolio menu appear in your admin, you need to install the [Jetpack plugin](http://jetpack.me) because it has the required code needed to make [custom post types](http://codex.wordpress.org/Post_Types#Custom_Post_Types) work for Illustratr.

Once Jetpack is active, the Portfolio menu will appear in your admin, in addition to standard blog posts. No special Jetpack module is needed and a WordPress.com connection is not required for the Portfolio feature to function.

You can now start adding Projects to your Portfolio.

= Where is the page that lists all my projects? =

Let's say you have a WordPress site at: http://mygroovydomain.com

The URL of the portfolio archive page will be: http://mygroovydomain.com/portfolio/

You'll need pretty permalinks (any structure) for this URL to work though. If you're stuck with default permalinks - your links have a query string at the end, like ?p=123 - then your portfolio archive can be accessed by adding this immediately after your URL:

`/?post_type=jetpack-portfolio`

= How to add the social links in the footer? =

Illustratr allows you display links to your social media profiles, like Twitter and Facebook, as icons in custom menus.

- Set up the menu -
To automatically apply icons to your links, simply create a new custom menu. Next, add each of your social links to this menu. Each menu item should be added as a custom link.
Once your menu is created and your social links added, you need to tick “Social Menu” in the Menu Settings; if the option isn’t ticked, the theme will not display the menu in its footer.
Illustratr will automatically apply an icon if it’s available.

- Available icons -
Below is a list of sites with bundled icons you can include in your menu:
* Codepen
* Digg
* Dribbble
* Dropbox
* Facebook
* Flickr
* GitHub
* Google+
* Instagram
* LinkedIn
* Email (`mailto:` links)
* Pinterest
* Pocket
* PollDaddy
* Reddit
* RSS Feed (urls with `/feed/`)
* StumbleUpon
* Tumblr
* Twitter
* Vimeo
* WordPress
* YouTube

== Quick Specs (all measurements in pixels) ==

1. The main column width is 840.
2. A widget in the widget area is 340.

= 1.0 - Apr 10 2014 =
* Initial release.