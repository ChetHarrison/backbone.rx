//   Module      : watch.js
// ----------------------------
//		Description : configures the grunt task
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//
module.exports = {
	js : {
		files : [
			'<%= paths.code %>',
			'<%= paths.tests %>',
			'<%= paths.requireConfig %>'
		],
		tasks : [ 'test' ]
	}
};
