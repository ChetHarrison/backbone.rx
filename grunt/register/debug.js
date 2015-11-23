//   Module      : debug.js
// ----------------------------
//      Description : Debug grunt tasks with node-inspector
//      Copyright   : (c) Nimble Chef Inc. 2015
//      Maintainer  : chet.harrison@nimblechef.com
//      Stability   : experimental
// [See this post](http://stackoverflow.com/questions/11171013/using-node-inspector-with-grunt-tasks)
// This requires a global install of [node-inspector](https://github.com/node-inspector/node-inspector)
//
module.exports = function( grunt ) {
	grunt.registerTask( 'debug', 'My debug task.', function() {
		var done = this.async();
		grunt.util.spawn( {
				cmd: 'node-debug',
				args: [ 'node_modules/grunt/lib/grunt.js', 'jasmine:phantom', '--debug' ],
				opts: {

					//cwd: current workin directory
				}
			},
			function( error, result, code ) {
				if ( error ) {
					grunt.log.write( result );
					grunt.fail.fatal( error );
				}
				done();
			} );
		grunt.log.writeln( 'node started' );
		grunt.util.spawn( {
				cmd: 'node-inspector',
				args: [ '&' ],
				opts: {

					//cwd: current workin directory
				}
			},
			function( error, result, code ) {
				if ( error ) {
					grunt.log.write( result );
					grunt.fail.fatal( error );
				}
				done();
			} );
		grunt.log.writeln( 'inspector started' );
	} );
};
