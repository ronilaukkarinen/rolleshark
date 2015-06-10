RolleShark
=========================

Designed to be the most beautiful Subsonic theme in the world.
--------------

![Screenshot (Subsonic powered by Fluid App)](https://raw.githubusercontent.com/ronilaukkarinen/rolleshark-subsonic-theme/master/screenshot.png "Screenshot")

A very quick yet functional Subsonic theme based on Sonic and inspired by Grooveshark UI. Icon-edits and CSS by me.

Code may be crappy, because was forced to use pseudo-selectors and other half-witted gum, because I wanted to respect the function of Subsonic themes by not touching the backend even it frustrates me that it consists mostly of old school HTML code (=tables). But it works and that's all that matters. Because of the old backend, there won't be a responsive version. For mobile, use Android/iPhone apps or [Jamstash](http://jamstash.com).

Contains a lot of advanced CSS3, therefore works best on latest Google Chrome. Coded entirely using Linux command line editor nano :-)

Prequisites
--------------

- Subsonic / musiccabinet
- Sonic White -theme

Installation (Linux)
--------------

git clone this repository, navigate to folder (`cd /path/to/files`) and then input this command (I presume you have Musiccabinet 0.7.24c installed, otherwise please correct the version number in the command):

**Note: Might override other theme files, so use with care!**

##### Subsonic (Vanilla) 5.2.1:

1. Run this command:

    sudo cp rolleshark.css /var/subsonic/jetty/4427/webapp/style/ && sudo cp -R icons/rolleshark /var/subsonic/jetty/4427/webapp/icons/ && sudo cp -R webfonts /var/subsonic/jetty/4427/webapp/ && sudo cp -R WEB-INF_vanilla/* /var/subsonic/jetty/4427/webapp/WEB-INF && sudo cp -R script /var/subsonic/jetty/4427/webapp/

2. Kill subsonic process and start it again
3. Go to Settings and apply RolleShark

##### MusicCabinet 0.7.24c:

1. Run this command:

	sudo cp rolleshark.css /var/subsonic/jetty/0.7.24c/webapp/style/ && sudo cp -R icons/rolleshark /var/subsonic/jetty/0.7.24c/webapp/icons/ && sudo cp -R webfonts /var/subsonic/jetty/0.7.24c/webapp/ && sudo cp -R WEB-INF_vanilla/* /var/subsonic/jetty/0.7.24c/webapp/WEB-INF && sudo cp -R script /var/subsonic/jetty/0.7.24c/webapp/

2. Kill subsonic process and start it again
3. Go to Settings and apply RolleShark