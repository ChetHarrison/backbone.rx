//   Module      : gruntfile.js
// ----------------------------
//		Description : main task runner
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
// This will set up all tasks configured in the
// `grunt/config` directory and registered in the
// `grunt/register-task` directory.
//
'use strict';

var gruntPath = './grunt/',
	gruntConfigPath = gruntPath + 'config/',
	gruntRegisterPath = gruntPath + 'register-task/',
	fs = require( 'fs' ),
	path = require( 'path' );

module.exports = function( grunt ) {

	require( 'time-grunt' )( grunt );

	// This will build a configuration object by reading each tasks
	// config file in the `gruntConfigPath` as the top of this file.
	var configuration = fs.readdirSync( gruntConfigPath )
		.reduce( function( obj, taskFileName ) {
			var fileBaseName = path.basename( taskFileName, '.js' );
			obj[ fileBaseName ] = require( gruntConfigPath +  taskFileName );
			return obj;
		}, {} );
	configuration.dir = require( gruntPath + 'dir-config.js' );
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
