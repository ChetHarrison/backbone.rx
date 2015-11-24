//   Module      : test.js
// ----------------------------
//		Description : run Jasmine test suite
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
// Transpile tests to es5 with Babel and run suite.
//
module.exports = function( grunt ) {
	grunt.registerTask(
		'test',
		'Transpile tests to es5 with Babel and run suite.',
		[ 'babel:code', 'babel:tests', 'template', 'jasmine:phantom' ]
	);
};
