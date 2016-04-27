RolleShark
=========================

Designed to be the most beautiful Subsonic theme in the world.
--------------

**Please note:** This theme is not designed to be responsive and will not be because of the structure of the original Subsonic webview. For tablet and mobile use I recommend [Jamstash](http://beta.jamstash.com/), [Dsub for Android](https://play.google.com/store/apps/details?id=github.daneren2005.dsub&hl=en) and [iSub for iOS](https://itunes.apple.com/en/app/isub-music-streamer/id362920532?mt=8). Theme is NOT compatible with Subsonic 5! (see [#5](https://github.com/ronilaukkarinen/rolleshark/issues/5))

![Screenshot (Macsonic 6.1)](https://dl.dropboxusercontent.com/u/18447700/madsonic-rolleshark-fluid.png "Screenshot")

![Screenshot (Subsonic powered by Fluid App)](https://raw.githubusercontent.com/ronilaukkarinen/rolleshark-subsonic-theme/master/screenshots/screenshot-6.png "Screenshot")

![Screenshot (Subsonic powered by Fluid App)](https://raw.githubusercontent.com/ronilaukkarinen/rolleshark-subsonic-theme/master/screenshots/screenshot-6.png "Screenshot")

![Screenshot (Subsonic powered by Fluid App)](https://raw.githubusercontent.com/ronilaukkarinen/rolleshark-subsonic-theme/master/screenshots/screenshot-5.png "Screenshot")

A very quick yet functional Subsonic theme based on Sonic and inspired by Grooveshark UI. Icon-edits and CSS by me.

Code may be crappy, because was forced to use pseudo-selectors and other half-witted gum, because I wanted to respect the function of Subsonic themes by not touching the backend even it frustrates me that it consists mostly of old school HTML code (=tables). But it works and that's all that matters. Because of the old backend, there won't be a responsive version. For mobile, use Android/iPhone apps or [Jamstash](http://jamstash.com).

Contains a lot of advanced CSS3, therefore works best on latest Google Chrome. Coded entirely using Linux command line editor nano :-)

Prequisites
--------------

- MusicCabinet 0.7.24c or MadSonic

Best compatibility
--------------

- MusicCabinet 0.7.24c
- Madsonic 6.1

Installation (Linux)
--------------

git clone this repository, navigate to folder (`cd /path/to/files`) and run the installer bash script.

**Note: Might override other theme files, so use with care!**

##### Madsonic 6.1:

Last version tested: **20160419_madsonic-6.1.8220-standalone**.

1. Run `sh install_macsonic.sh`
2. Kill subsonic process and start it again
3. Go to Settings and apply RolleShark

##### Subsonic (Vanilla) 5.2.1:

1. Run `sh install_vanilla.sh`
2. Kill subsonic process and start it again
3. Go to Settings and apply RolleShark

##### MusicCabinet 0.7.24c:

1. Run `sh install_musiccabinet.sh`
2. Kill subsonic process and start it again
3. Go to Settings and apply RolleShark
