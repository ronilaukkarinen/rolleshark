RolleShark
=========================

A very quick yet functional Subsonic theme based on Sonic and inspired by Grooveshark UI.

Icon-edits and CSS by me.
Album overlays by Komodo Media: http://komodomedia.com/

Contains a lot of advanced CSS3, therefore works best on Google Chrome.

Coded entirely using Linux command line editor nano :-)

Prequisites
--------------

- Subsonic / musiccabinet
- Sonic White -theme

Installation (Linux)
--------------

git clone this repository, navigate to folder and then input these commands:

	sudo cp rolleshark.css /var/subsonic/jetty/<version>/webapp/style/
	sudo cp -R icons/rolleshark /var/subsonic/jetty/<version>/webapp/icons/
	sudo cp -R WEB-INF /var/subsonic/jetty/<version>/webapp/
