define(["exports", "backbone.rx", "backbone", "underscore"], function (exports, _backboneRx, _backbone, _underscore) {
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

	var Backbone = _interopRequire(_backbone);

	var _ = _interopRequire(_underscore);

	describe("backbone.rx", function () {
		"use strict";

		it("should listen to events", function () {
			var model = new Backbone.Model();
			var chan = Backbone.Rx.channel("global");
			var eventable = _.extend({}, Backbone.Events);
			var modelDestroyStream = chan.Observable.fromEvent(model, "destroy");
			var modelEventstream = chan.Observable.fromEvent(model, "all").takeUntil(modelDestroyStream);

			modelEventstream.subscribe(function (e) {
				return console.log("modelEventstream fired: ", e);
			}, function (err) {
				return console.log(err);
			}, function () {
				return console.log("modelEventstream done");
			});

			var anotherStream = BackboneRx.Observable.fromEvent(model, "change").takeUntil(modelDestroyStream);

			anotherStream.subscribe(function (e) {
				return console.log("anotherStream fired: ", e);
			}, function (err) {
				return console.log(err);
			}, function () {
				return console.log("anotherStream done");
			});

			model.trigger("bar");
			model.set({ title: "foo" });
			model.set("title", "baz");

			_.extend(model, Backbone.Rx.Requests);
			model.reply("test", { test: "test" });
			model.request("test");

			model.destroy();
		});

		describe("When Rx is attached to your application", function () {
			it("should attach itself to Backbone.Rx", function () {
				expect(Backbone.Rx).toBeDefined();
			});

			it("should have a VERSION attribute", function () {
				expect(Backbone.Rx.VERSION).toBeDefined();
			});

			it("should have a noConflict method", function () {
				expect(Backbone.Rx.noConflict).toBeDefined();
			});

			it("should have the channel method", function () {
				expect(Backbone.Rx.channel).toBeDefined();
			});

			it("should have the Channel Class attached to it", function () {
				expect(Backbone.Rx.Channel).toBeDefined();
			});

			it("should have the Requests Class attached to it", function () {
				expect(Backbone.Rx.Requests).toBeDefined();
			});
		});
	});
});
//# sourceMappingURL=backbone.rx-spec.js.map