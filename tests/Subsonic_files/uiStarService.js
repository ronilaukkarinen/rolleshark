if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
  if (dwr.engine._getObject("uiStarService") == undefined) {
    var p;
    
    p = {};
    p._path = '/dwr';

    /**
     * @param {class net.sourceforge.subsonic.service.SecurityService} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.setSecurityService = function(p0, callback) {
      return dwr.engine._execute(p._path, 'uiStarService', 'setSecurityService', arguments);
    };

    /**
     * @param {class net.sourceforge.subsonic.service.SettingsService} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.setSettingsService = function(p0, callback) {
      return dwr.engine._execute(p._path, 'uiStarService', 'setSettingsService', arguments);
    };

    /**
     * @param {int} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.starArtist = function(p0, callback) {
      return dwr.engine._execute(p._path, 'uiStarService', 'starArtist', arguments);
    };

    /**
     * @param {int} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.unstarArtist = function(p0, callback) {
      return dwr.engine._execute(p._path, 'uiStarService', 'unstarArtist', arguments);
    };

    /**
     * @param {int} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.starAlbum = function(p0, callback) {
      return dwr.engine._execute(p._path, 'uiStarService', 'starAlbum', arguments);
    };

    /**
     * @param {int} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.unstarAlbum = function(p0, callback) {
      return dwr.engine._execute(p._path, 'uiStarService', 'unstarAlbum', arguments);
    };

    /**
     * @param {int} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.starTrack = function(p0, callback) {
      return dwr.engine._execute(p._path, 'uiStarService', 'starTrack', arguments);
    };

    /**
     * @param {int} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.unstarTrack = function(p0, callback) {
      return dwr.engine._execute(p._path, 'uiStarService', 'unstarTrack', arguments);
    };

    /**
     * @param {class com.github.hakko.musiccabinet.service.StarService} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.setStarService = function(p0, callback) {
      return dwr.engine._execute(p._path, 'uiStarService', 'setStarService', arguments);
    };
    
    dwr.engine._setObject("uiStarService", p);
  }
})();

