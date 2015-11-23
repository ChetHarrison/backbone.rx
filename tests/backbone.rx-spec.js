//   Module      : backbone.rx-spec.js
// ----------------------------
//		Description : Jasmine test suite.
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//
import BackboneRx from 'backbone.rx';

describe( 'backbone.rx', function() {
	'use strict';

	beforeEach( function() {
		this.bbrx = 'foo';
	} );

	afterEach( function() {
		this.bbrx = null;
	} );

	it( 'test stub', function() {
		expect( this.bbrx ).toEqual( 'foo' );
	} );
} );
