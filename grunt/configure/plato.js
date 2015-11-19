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
			'reports/analysis' : [ 'src/es5/backbone.rx.js' ]
		}
	}
};
