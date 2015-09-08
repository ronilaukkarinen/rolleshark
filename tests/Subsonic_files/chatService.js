if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
  if (dwr.engine._getObject("chatService") == undefined) {
    var p;
    
    p = {};
    p._path = '/dwr';

    /**
     * @param {class net.sourceforge.subsonic.service.SecurityService} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.setSecurityService = function(p0, callback) {
      return dwr.engine._execute(p._path, 'chatService', 'setSecurityService', arguments);
    };

    /**
     * @param {class java.lang.String} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.addMessage = function(p0, callback) {
      return dwr.engine._execute(p._path, 'chatService', 'addMessage', arguments);
    };

    /**
     * @param {class java.lang.String} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.doAddMessage = function(p0, callback) {
      return dwr.engine._execute(p._path, 'chatService', 'doAddMessage', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.clearMessages = function(callback) {
      return dwr.engine._execute(p._path, 'chatService', 'clearMessages', arguments);
    };

    /**
     * @param {long} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.getMessages = function(p0, callback) {
      return dwr.engine._execute(p._path, 'chatService', 'getMessages', arguments);
    };

    /**
     * @param {interface net.sf.ehcache.Ehcache} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.setChatCache = function(p0, callback) {
      return dwr.engine._execute(p._path, 'chatService', 'setChatCache', arguments);
    };

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.init = function(callback) {
      return dwr.engine._execute(p._path, 'chatService', 'init', arguments);
    };
    
    dwr.engine._setObject("chatService", p);
  }
})();

