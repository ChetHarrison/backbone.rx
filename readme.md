Backbone.Rx
===========
[![Code Climate](https://codeclimate.com/github/ChetHarrison/backbone.rx/badges/gpa.svg)](https://codeclimate.com/github/ChetHarrison/backbone.rx)

Backbone.Rx adds [RxJS](https://github.com/Reactive-Extensions/RxJS) message streams to
Backbone. This is essentially modified of [Backbone.Radio](https://github.com/marionettejs/backbone.radio/blob/master/src/backbone.radio.js)
which is based on Backbone.Events.

I may change the project to Backbone.Radio.Active so it can be a drop in replacement
for Backbone.Radio augmented with Rx Observables.

Usage with Marionette
---------------------

I will make available via npm and bower next week.

`Marionette` and `Backbone.Radio` use `Backbone.Events` to implement their event based
message patterns. Rx `Observable`s have a `fromEvent` method that take an
object reference and an event name. Objects that wish to subscribe to these events
will need a reference to the `Observable`. They will use the subscribe method
and provide three function arguments: onNext, onError, and onDone.

Any object that can fire an event, such as a `Model`, `ItemView`, or
`Application` can be used to create an event stream or `Observable`. The main
advantage of using `Observables` over `Backbone.Events` is the ability to tell
the Observable when to un-subscribe at declaration. Observable streams are
asynchronous collections so you can chain their output the same way you would
with arrays with map, filter, etc. `Backbone.Rx` has all of the RxJS.lite
[methods](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/libraries/lite/rx.lite.md)
to help you process your streams. For an excellent way to learn how to
process your streams see [RxMarbles](http://rxmarbles.com/)

```
var model = new Backbone.Model();
var chan = Backbone.Rx.channel( 'global' );

// Use takeUntil to trigger clean up on some event
var modelDestroyStream = chan.Observable.fromEvent( model, 'destroy' )
	.takeUntil( modelDestroyStream );
var modelEventstream = chan.Observable.fromEvent( model, 'all' )
	.takeUntil( modelDestroyStream );

modelEventstream.subscribe(
	e => console.log( 'modelEventstream fired: ', e ),
	err => console.log( err ),
	() => console.log( 'modelEventstream done' )
);

var anotherStream = BackboneRx.Observable.fromEvent( model, 'change' )
	.takeUntil( modelDestroyStream );

anotherStream.subscribe(
	e => console.log( 'anotherStream fired: ', e ),
	err => console.log( err ),
	() => console.log( 'anotherStream done' )
);

model.trigger( 'bar' );
model.set( { title: 'foo' } );
model.set( 'title', 'baz' );

// Radio still works too
_.extend( model, Backbone.Rx.Requests );
model.reply( 'test', { data : 'Yo some options' } );
model.request( 'test' );

// don't forget to do this on Requests
model.stopReplying();

model.destroy();
```

This will produce the following logs:

```
og: modelEventstream fired: , bar

log: modelEventstream fired: , change:title

log: anotherStream fired: , [object Object]

log: modelEventstream fired: , change

log: modelEventstream fired: , change:title

log: anotherStream fired: , [object Object]

log: modelEventstream fired: , change

log: {
  "title": "baz"
}

log: "reply"

log: "test"

log: [
  {
    "test": "test"
  },
  null
]

log: {
  "title": "baz"
}

log: "request"

log: "test"

log: []

log: modelEventstream done

log: anotherStream done
```
