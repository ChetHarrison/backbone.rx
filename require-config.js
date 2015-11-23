//   Module      : require-config.js
// ----------------------------
//		Description : requirejs configuration
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//
requirejs.config( {
	baseUrl: '',

	shim: {
		'underscore' : {
			'exports' : '_'
		},
		'backbone' : {
			'deps' : [ 'underscore' ],
			'exports' : 'Backbone'
		}
	},

	paths: {
		'backbone.rx' : 'src/es5/backbone.rx',

		'backbone'    : 'bower_components/backbone/backbone',
		'underscore'  : 'bower_components/underscore/underscore',
		'rx'          : 'bower_components/rxjs/dist/rx.all'
	}
} );

requirejs( [ 'backbone.rx' ], function() { } );
