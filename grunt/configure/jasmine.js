//   Module      : jasmine.js
// ----------------------------
//		Description : configures the grunt task
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//
var testPaths = {
	'jasmine-jquery' : '../node_modules/jasmine-jquery/lib/jasmine-jquery',
	'fixtures' 		 : 'es5/tests/fixtures',
	'sinon'			 : '../node_modules/sinon/lib/sinon'
}

module.exports = {
	options : {
		specs : 'dev/es5/tests/**/*-spec.js',
		keepRunner : true,
		outfile : 'spec-runner.html'
	},

	phantom: {
		options : {
			display : 'full', // short or none
			template : require( 'grunt-template-jasmine-requirejs' ),
			templateOptions : {
				requireConfigFile : 'dev/require-config.js',
				requireConfig : {
					baseUrl : 'dev',
					shim : {
						'jasmine-jquery' : {
							deps : [ 'jquery' ],
							exports : 'jasmine-jquery'
						}
					},
					paths : testPaths
				}
			}
		}
	},

	coverage : {

		// relative to the gruntfile.
		src : [ 'dev/es5/app/**/*.js' ],
		options : {
			template : require( 'grunt-template-jasmine-istanbul' ),
			templateOptions : {
				coverage : 'reports/coverage/coverage.json',
				report : [ {
						type : 'html',
						options : {
							dir : 'reports/coverage/html'
						}
					}, {
						type : 'lcov',
						options : {
							dir : 'reports/coverage/lcov'
						}
					}, {
						type : 'text',
						options : {
							dir : 'reports/coverage/text'
						}
					}, {
						type : 'text-summary',
						options : {
							dir : 'reports/coverage/text-summary'
						}
					} ],
				thresholds : {
					lines : 50,
					statements : 50,
					branches : 50,
					functions : 50
				},

				// 1. don't replace src for the mixed-in template with instrumented sources
				replace : true,
				template : require( 'grunt-template-jasmine-requirejs' ),
				templateOptions : {
					requireConfigFile : 'dev/require-config.js',
					requireConfig : {
						baseUrl : 'dev',
						shim : {
							'jasmine-jquery' : {
								deps : [ 'jquery' ],
								exports : 'jasmine-jquery'
							}
						},
						paths : testPaths
					}
				}
			}
		}
	}
};
