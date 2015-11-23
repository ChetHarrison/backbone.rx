define(["exports", "backbone.rx"], function (exports, _backboneRx) {
	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	//   Module      : backbone.rx-spec.js
	// ----------------------------
	//		Description : Jasmine test suite.
	//		Copyright   : (c) Nimble Chef Inc. 2015
	//		Maintainer  : chet.harrison@nimblechef.com
	//		Stability   : experimental
	//

	var BackboneRx = _interopRequire(_backboneRx);

	describe("backbone.rx", function () {
		"use strict";

		beforeEach(function () {
			this.bbrx = "foo";
		});

		afterEach(function () {
			this.bbrx = null;
		});

		it("test stub", function () {
			expect(this.bbrx).toEqual("foo");
		});
	});
});
//# sourceMappingURL=backbone.rx-spec.js.map