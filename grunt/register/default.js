//   Module      : default.js
// ----------------------------
//		Description : register grunt default task
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//
module.exports = function( grunt ) {
	grunt.registerTask(
		'default',
		'Watch files and run tests',
		[ 'watch' ]
	);
};
