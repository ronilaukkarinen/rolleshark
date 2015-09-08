if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
  if (dwr.engine._getObject("playlistService") == undefined) {
    var p;
    
    p = {};
    p._path = '/dwr';

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.doStart = function(callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'doStart', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.doStop = function(callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'doStop', arguments);
    };

    /**
     * @param {class net.sourceforge.subsonic.service.SettingsService} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.setSettingsService = function(p0, callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'setSettingsService', arguments);
    };

    /**
     * @param {class net.sourceforge.subsonic.service.MediaFileService} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.setMediaFileService = function(p0, callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'setMediaFileService', arguments);
    };

    /**
     * @param {class net.sourceforge.subsonic.service.TranscodingService} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.setTranscodingService = function(p0, callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'setTranscodingService', arguments);
    };

    /**
     * @param {interface java.util.List} p0 a param
     * @param {class java.lang.String} p1 a param
     * @param {function|Object} callback callback function or options object
     */
    p.play = function(p0, p1, callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'play', arguments);
    };

    /**
     * @param {float} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.setGain = function(p0, callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'setGain', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.getPlaylist = function(callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'getPlaylist', arguments);
    };

    /**
     * @param {class net.sourceforge.subsonic.service.PlayerService} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.setPlayerService = function(p0, callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'setPlayerService', arguments);
    };

    /**
     * @param {interface java.util.List} p2 a param
     * @param {function|Object} callback callback function or options object
     */
    p.doSet = function(p2, callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'doSet', arguments);
    };

    /**
     * @param {int} p2 a param
     * @param {int} p3 a param
     * @param {function|Object} callback callback function or options object
     */
    p.doSkip = function(p2, p3, callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'doSkip', arguments);
    };

    /**
     * @param {interface java.util.List} p0 a param
     * @param {class java.lang.String} p1 a param
     * @param {function|Object} callback callback function or options object
     */
    p.playRandom = function(p0, p1, callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'playRandom', arguments);
    };

    /**
     * @param {int} p0 a param
     * @param {class java.lang.String} p1 a param
     * @param {function|Object} callback callback function or options object
     */
    p.playArtistRadio = function(p0, p1, callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'playArtistRadio', arguments);
    };

    /**
     * @param {int} p0 a param
     * @param {class java.lang.String} p1 a param
     * @param {function|Object} callback callback function or options object
     */
    p.playTopTracks = function(p0, p1, callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'playTopTracks', arguments);
    };

    /**
     * @param {class [Ljava.lang.String;} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.playGenreRadio = function(p0, callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'playGenreRadio', arguments);
    };

    /**
     * @param {class java.lang.String} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.playGroupRadio = function(p0, callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'playGroupRadio', arguments);
    };

    /**
     * @param {int} p0 a param
     * @param {int} p1 a param
     * @param {function|Object} callback callback function or options object
     */
    p.playRelatedArtistsSampler = function(p0, p1, callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'playRelatedArtistsSampler', arguments);
    };

    /**
     * @param {interface java.util.List} p2 a param
     * @param {function|Object} callback callback function or options object
     */
    p.doAdd = function(p2, callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'doAdd', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.doClear = function(callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'doClear', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.doShuffle = function(callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'doShuffle', arguments);
    };

    /**
     * @param {int} p2 a param
     * @param {function|Object} callback callback function or options object
     */
    p.doRemove = function(p2, callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'doRemove', arguments);
    };

    /**
     * @param {class [I} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.removeMany = function(p0, callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'removeMany', arguments);
    };

    /**
     * @param {int} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.up = function(p0, callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'up', arguments);
    };

    /**
     * @param {int} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.down = function(p0, callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'down', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.toggleRepeat = function(callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'toggleRepeat', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.undo = function(callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'undo', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.sortByTrack = function(callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'sortByTrack', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.sortByArtist = function(callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'sortByArtist', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.sortByAlbum = function(callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'sortByAlbum', arguments);
    };

    /**
     * @param {class net.sourceforge.subsonic.service.JukeboxService} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.setJukeboxService = function(p0, callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'setJukeboxService', arguments);
    };

    /**
     * @param {class com.github.hakko.musiccabinet.service.PlaylistGeneratorService} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.setPlaylistGeneratorService = function(p0, callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'setPlaylistGeneratorService', arguments);
    };

    /**
     * @param {int} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.add = function(p0, callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'add', arguments);
    };

    /**
     * @param {int} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.remove = function(p0, callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'remove', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.clear = function(callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'clear', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.start = function(callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'start', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.stop = function(callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'stop', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.shuffle = function(callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'shuffle', arguments);
    };

    /**
     * @param {int} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.skip = function(p0, callback) {
      return dwr.engine._execute(p._path, 'playlistService', 'skip', arguments);
    };
    
    dwr.engine._setObject("playlistService", p);
  }
})();

