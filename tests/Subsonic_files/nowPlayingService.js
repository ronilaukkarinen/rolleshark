if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
  if (dwr.engine._getObject("nowPlayingService") == undefined) {
    var p;
    
    p = {};
    p._path = '/dwr';

    /**
     * @param {class com.github.hakko.musiccabinet.service.LibraryBrowserService} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.setLibraryBrowserService = function(p0, callback) {
      return dwr.engine._execute(p._path, 'nowPlayingService', 'setLibraryBrowserService', arguments);
    };

    /**
     * @param {class net.sourceforge.subsonic.service.SettingsService} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.setSettingsService = function(p0, callback) {
      return dwr.engine._execute(p._path, 'nowPlayingService', 'setSettingsService', arguments);
    };

    /**
     * @param {class net.sourceforge.subsonic.service.StatusService} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.setStatusService = function(p0, callback) {
      return dwr.engine._execute(p._path, 'nowPlayingService', 'setStatusService', arguments);
    };

    /**
     * @param {class net.sourceforge.subsonic.service.MediaFileService} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.setmediaFileService = function(p0, callback) {
      return dwr.engine._execute(p._path, 'nowPlayingService', 'setmediaFileService', arguments);
    };

    /**
     * @param {class net.sourceforge.subsonic.service.PlayerService} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.setPlayerService = function(p0, callback) {
      return dwr.engine._execute(p._path, 'nowPlayingService', 'setPlayerService', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.getNowPlayingForCurrentPlayer = function(callback) {
      return dwr.engine._execute(p._path, 'nowPlayingService', 'getNowPlayingForCurrentPlayer', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.getNowPlaying = function(callback) {
      return dwr.engine._execute(p._path, 'nowPlayingService', 'getNowPlaying', arguments);
    };

    /**
     * @param {class com.github.hakko.musiccabinet.service.lastfm.AlbumInfoService} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.setAlbumInfoService = function(p0, callback) {
      return dwr.engine._execute(p._path, 'nowPlayingService', 'setAlbumInfoService', arguments);
    };
    
    dwr.engine._setObject("nowPlayingService", p);
  }
})();

