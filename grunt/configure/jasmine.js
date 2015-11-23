//   Module      : jasmine.js
// ----------------------------
//		Description : configures the grunt task
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//
module.exports = {

	options : {
		src : '<%= paths.codeEs5 %>',
		specs : '<%= paths.testsEs5 %>',
		keepRunner : true,
		outfile : '<%= paths.specRunner %>'
	},

	phantom: {
		options : {
			display : 'full', // short or none
			template : require( 'grunt-template-jasmine-requirejs' ),
			templateOptions : {
				requireConfigFile : '<%= paths.requireConfig %>'
			}
		}
	},

	coverage : {

		// relative to the gruntfile.
		src : [ '<%= paths.codeEs5 %>' ],
		options : {
			template : require( 'grunt-template-jasmine-istanbul' ),
			templateOptions : {
				coverage : '<%= paths.coverage %>coverage.json',
				report : [ {
						type : 'html',
						options : {
							dir : '<%= paths.coverage %>html'
						}
					}, {
						type : 'lcov',
						options : {
							dir : '<%= paths.coverage %>lcov'
						}
					}, {
						type : 'text',
						options : {
							dir : '<%= paths.coverage %>text'
						}
					}, {
						type : 'text-summary',
						options : {
							dir : '<%= paths.coverage %>text-summary'
						}
					} ],
				thresholds : {
					lines : 50,
					statements : 50,
					branches : 50,
					functions : 50
				},
				replace : true,
				template : require( 'grunt-template-jasmine-requirejs' ),
				templateOptions : {
					requireConfigFile : '<%= paths.requireConfig %>',
				}
			}
		}
	}
};
