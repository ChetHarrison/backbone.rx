//   Module      : backbone.rx-spec.js
// ----------------------------
//		Description : Jasmine test suite.
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//
import BackboneRx from 'backbone.rx';
import Backbone from 'backbone';

describe( 'backbone.rx', function() {
	'use strict';

	describe( 'When Rx is attached to your application', function() {
		it( 'should attach itself to Backbone.Rx', function() {
			expect( Backbone.Rx ).toBeDefined();
		} );

		it( 'should have a VERSION attribute', function() {
			expect( Backbone.Rx.VERSION ).toBeDefined();
		} );

		it( 'should have a noConflict method', function() {
			expect( Backbone.Rx.noConflict ).toBeDefined();
		} );

		it( 'should have the channel method', function() {
			expect( Backbone.Rx.channel ).toBeDefined();
		} );

		it( 'should have the Channel Class attached to it', function() {
			expect( Backbone.Rx.Channel ).toBeDefined();
		} );

		it( 'should have the Requests Class attached to it', function() {
			expect( Backbone.Rx.Requests ).toBeDefined();
		} );
	} );
} );


