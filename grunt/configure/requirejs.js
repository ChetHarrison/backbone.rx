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

			// https://github.com/jrburke/r.js/blob/master/build/example.build.js
			baseUrl : 'src',

			// this path is relative to this tasks baseUrl option.
			name : '../bower_modules/almond/almond',
			include : [ '../<%= paths.requireConfig %>' ],
			insertRequire : [ '../<%= paths.requireConfig %>' ],
			wrap : true,
			optimize : 'uglify',
			out : '<%= paths.dist %>backbone.rx.min.js',

			// This path is relative to the gruntfile.
			mainConfigFile : '<%= paths.requireConfig %>'
		}
	}
};
