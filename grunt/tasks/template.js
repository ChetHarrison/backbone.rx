//   Module      : template.js
// ----------------------------
//		Description : Run underscore template on source.
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
// Used to inject versioning into source.
//
'use strict';
var path = require( 'path' );
var _ = require( '../../bower_components/underscore/underscore' );

module.exports = function (grunt) {
	grunt.registerMultiTask('template', 'Runs underscore template on source', function () {
		var options = this.options();

		this.files.forEach(function ( file ) {
			var code = grunt.file.read( file.src[0] );
			code = _.template( code )( options.model );
			grunt.file.write( file.src[0] , code );
		});
	});
};
