//   Module      : gruntfile.js
// ----------------------------
//		Description : main task runner
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
// This will set up all tasks configured in the
// `grunt/configure` directory and registered in the
// `grunt/register` directory. Look mom, a gruntfile
// that's less than 50 lines!
//
'use strict';

var gruntPath = './grunt/',
	gruntConfigurePath = gruntPath + 'configure/',
	gruntRegisterPath = gruntPath + 'register/',
	fs = require( 'fs' ),
	path = require( 'path' );

module.exports = function( grunt ) {

	require( 'time-grunt' )( grunt );

	// This will build a configuration object by reading each tasks
	// config file in the `gruntConfigurePath` as the top of this file.
	var configuration = fs.readdirSync( gruntConfigurePath )
		.reduce( function( obj, taskFileName ) {
			var fileBaseName = path.basename( taskFileName, '.js' );
			obj[ fileBaseName ] = require( gruntConfigurePath +  taskFileName );
			return obj;
		}, {} );
	configuration.dir = require( gruntPath + 'paths.js' );
	configuration.pkg = require( './package.json' );
	grunt.initConfig( configuration );

	// Load tasks but filter the grunt-template-jasmine files
	require( 'matchdep' )
		.filterAll( 'grunt-*' )
		.filter( function( task ) {
			return task.indexOf( 'grunt-template-jasmine' ) === -1;
		} )
		.forEach( grunt.loadNpmTasks );

	// Register tasks by reading all the files in the `gruntRegisterPath`
	// listed at the top of this file.
	fs.readdirSync( gruntRegisterPath )
		.map( function( file ) {
			require( gruntRegisterPath + file )( grunt );
		} );
};
