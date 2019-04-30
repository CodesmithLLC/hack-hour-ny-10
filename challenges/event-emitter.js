/* eslint-disable func-names */
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
  // Set store for events and functions
  this.events = {};
}

EventEmitter.prototype.on = function(event, func) {
  // If event exists, push onto array
  if (this.events[event]) {
    this.events[event].push(func);
  }
  // Else assign event to a new array with function as first element
  else {
    this.events[event] = [func];
  }
};

EventEmitter.prototype.trigger = function(event, ...args) {
  // If event exists, run every function for event
  if (this.events[event]) {
    this.events[event].forEach(func => {
      func(...args);
    });
  } else return undefined;
};

// ALTERNATIVE

function EventEmitter() {}

EventEmitter.prototype.on = function(funcName, func) {
  if (!this[funcName]) {
    this[funcName] = [];
  }
  this[funcName].push(func);
};

EventEmitter.prototype.trigger = function(funcName) {
  var args = Array.prototype.slice.call(arguments, 1);
  if (this[funcName]) {
    for (var i = 0; i < this[funcName].length; i++) {
      this[funcName][i].apply(this, args);
    }
  }
};

module.exports = EventEmitter;
