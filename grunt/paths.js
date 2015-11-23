//   Module      : paths.js
// ----------------------------
//		Description : path variables for the gruntfile
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
// Here is a longer description of this module
//
var src     = 'src/',
	tests   = 'tests/',
	reports = 'reports/',
	code    = 'backbone.rx',
	es5     = 'es5/',
	js      = '.js',
	spec    = '-spec';

module.exports =  {
	code          : src + code + js,
	codeEs5       : src + es5 + code + js,
	tests         : tests + code + spec + js,
	testsEs5      : tests + es5 + code + spec + js,
	specRunner    : 'spec-runner.html',
	coverage      : reports + 'coverage/',
	requireConfig : 'require-config.js',
	dist          : 'dist/'
};
