//   Module      : require-config.js
// ----------------------------
//		Description : requirejs configuration
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//

// NOTE: THIS FILE MUST BE IN ES5!
requirejs.config( {
	'baseUrl': '',

	'shim': {
		'underscore' : {
			'exports' : '_'
		},
		'backbone' : {
			'deps' : [
			'underscore'
			],
			'exports' : 'Backbone'
		}
	},

	'paths': {
		'backbone.rx' : 'dev/es5/backbone.rx',

		'backbone'    : '../bower_components/backbone/backbone'
		'underscore'  : '../bower_components/underscore/underscore',
		'rx'          : '../bower_components/rxjs/dist/rx.all'
	}
} );
