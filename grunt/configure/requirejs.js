//   Module      : requirejs.js
// ----------------------------
//		Description : configures the grunt task
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//
module.exports = {
	build : {
		options : {

			// **READ THIS!!** 99% of requirejs pain is a combination
			// of fucking up path configuration and shitty error
			// messages, if any. So here is the key thing to remember
			// This baseUrl needs to be set to the location of the
			// require-config file AND the baseUrl property of the
			// require-config file needs to be set to its current
			// dir, as in `baseUrl: './'`
			// https://github.com/jrburke/r.js/blob/master/build/example.build.js
			baseUrl : 'dev',

			// this path is relative to this tasks baseUrl option.
			name : '../bower_modules/almond/almond',
			include : [ 'require-config' ],
			insertRequire : [ 'require-config' ],
			wrap : true,
			optimize : 'uglify',
			out : '<%= dir.prod %>main.min.js',

			// This path is relative to the gruntfile.
			mainConfigFile : 'dev/require-config.js',
			replaceRequireScript : [ {

				// this file must exist before it will be rewritten
				// If you clean the the build dir then copy the
				// original index with the require script ref into
				// the build dir before running this task.
				files : [ '<%= dir.prod %>index.html' ],
				module : 'main',

				// This path is relative to the "out" option.
				modulePath : 'main.min'
			} ]
		}
	}
};
