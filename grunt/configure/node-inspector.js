//   Module      : node-inspector.js
// ----------------------------
//		Description : Debug grunt tasks with node-inspector
//		Copyright   : (c) Nimble Chef Inc. 2015
//		Maintainer  : chet.harrison@nimblechef.com
//		Stability   : experimental
//
module.exports = {
	'node-inspector': {
		custom: {
			options: {
				'web-host': 'localhost',
				'web-port': 1337,
				'debug-port': 5857,
				'save-live-edit': true,
				'preload': false,
				'stack-trace-limit': 4,
			}
		}
	}
};
