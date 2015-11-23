//   Module      : babel.js
// ----------------------------
//		Description : configures the grunt task
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//
module.exports = {
	options : {
		sourceMap : true,
		modules : 'amd'
	},
	code : {
		files : [ {
			src : '<%= paths.code %>',
			dest : '<%= paths.codeEs5 %>'
		} ]
	},
	tests : {
		files : [ {
			src : '<%= paths.tests %>',
			dest : '<%= paths.testsEs5 %>'
		} ]
	}
};
