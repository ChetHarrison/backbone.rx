//   Module      : plato.js
// ----------------------------
//		Description : configures the grunt task
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//
module.exports = {
	report : {
		options : {

			// jshint: grunt.file.readJSON(".jshintrc")
		},
		files : {
			'reports/analysis' : [ '<%= dir.es5 %>app/**/*.js' ]
		}
	}
};
