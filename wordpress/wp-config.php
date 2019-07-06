<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'prinster_wordpress' );

/** MySQL database username */
define( 'DB_USER', 'prinster_wpuser' );

/** MySQL database password */
define( 'DB_PASSWORD', 'thisWillChange' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/** Added based on information from digital ocean page
 * {@link https://www.digitalocean.com/community/tutorials/how-to-install-wordpress-with-lamp-on-ubuntu-18-04}
 */
define( 'FS_METHOD', 'direct' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'D+x]&!fv6a7|^4%f-T=6CW70L[q`NXua[x8V+jDLx;OUU}.|R-BZ2KaZ7r2^D@UL');
define('SECURE_AUTH_KEY',  'AV)-jy-w;++ Z*S +$0%z4%<wA$|)f%eo<|U}2pSI6%ra-|$p}0K^ipCt7v`?VCQ');
define('LOGGED_IN_KEY',    '3|$>g`9jG3t}$uA_4hgK@z@7l#XWviq^[?d]d2=u-{<,zx8[abD&a7t2fQGTu-#K');
define('NONCE_KEY',        'cOQE=t <1/^^UT6AW$)&G-t%j@-B:I>[JRb@b[zhVG;C3S[fR?8_oIL3t#Y?I&Y2');
define('AUTH_SALT',        'h:9|voFiTQD/EMxM+%NCit1XFQB&26t/D*(Z *@p%VrpuQ#s?K;/W%L5vjl[+}Ct');
define('SECURE_AUTH_SALT', 'v>BmWMN{7g4ZOsbx84k&l|w|e6&.{swv|fncurft)PQ=5!07QX%1]t9}In~4eA$^');
define('LOGGED_IN_SALT',   'z}&t4e-@C!$xbxiFkb8-AKmk|E)d:U>{*aV Qj%O_]*VDKVx>%W=zGo@m-xIh~/>');
define('NONCE_SALT',       'K%F_Y1qXC7%=)^+DjErUmh:uyY9d;i*E9<Q UVDVTr>{N9.Br;z29G 7o >M84YN');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
