if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
  if (dwr.engine._getObject("libraryStatusService") == undefined) {
    var p;
    
    p = {};
    p._path = '/dwr';

    /**
     * @param {function|Object} callback callback function or options object
     */
    p.getLastModified = function(callback) {
      return dwr.engine._execute(p._path, 'libraryStatusService', 'getLastModified', arguments);
    };

    /**
     * @param {class net.sourceforge.subsonic.ajax.LibraryStatusService$Message} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.notifyLibraryUpdate = function(p0, callback) {
      return dwr.engine._execute(p._path, 'libraryStatusService', 'notifyLibraryUpdate', arguments);
    };
    
    dwr.engine._setObject("libraryStatusService", p);
  }
})();

