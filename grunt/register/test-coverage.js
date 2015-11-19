//   Module      : test-coverage.js
// ----------------------------
//		Description : register grunt test coverage task
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//
module.exports = function( grunt ) {
	grunt.registerTask(
		'coverage',
		'Coverage report.',
		[ 'babel:tests', 'jasmine:coverage' ]
	);
};
