//   Module      : template.js
// ----------------------------
//		Description : Template task configuration
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//
module.exports = {
	options : {
		model : '<%= pkg %>'
	},
	code : {
		files : [ {
			src : '<%= paths.codeEs5 %>',
			dest : '<%= paths.codeEs5 %>'
		} ]
	}
};
