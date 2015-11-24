//   Module      : build.js
// ----------------------------
//		Description : register grunt build task
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
// This will compile transpile, optimize and minify
// all required JS and place files
// in the `dist` directory for deployment.
//
module.exports = function( grunt ) {
	grunt.registerTask(
		'build',
		'Build production files to "dist" folder.',
		[
			'babel:app',
			'babel:tests',
			'template',
			'jasmine:phantom',
			'requirejs',
			'jasmine:coverage'
		]
	);
};
