'use strict';
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
    this.obj = {};
}

EventEmitter.prototype.on = function(funcName, func) {
    this.obj[funcName] = func;
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
    this.obj[funcName](args);
};

// let count = 0;
// let arr = [1,2,3];
// console.log(count);
// console.log(arr);
// let item = new EventEmitter();
// item.on('increment', () => console.log(++count));
// item.on('printArr', (array) => {
//     array.forEach(item => console.log(item));
// });
// item.trigger('increment');
// item.trigger('printArr');
// item.trigger('increment');

module.exports = EventEmitter;
