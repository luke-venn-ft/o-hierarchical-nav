/*global exports*/

// Helper function that converts a list of elements into an array
function nodeListToArray(nl) {
	'use strict';
	return [].map.call(nl, function(element) {
		return element;
	});
}

// Helper function to dispatch events
function dispatchCustomEvent(el, name, data) {
	'use strict';
	if (document.createEvent && el.dispatchEvent) {
		var event = document.createEvent('Event');
		event.initEvent(name, true, true);

		if (data) {
			event.detail = data;
		}

		el.dispatchEvent(event);
	}
}

function isIE8() {
	'use strict';

	var b = document.createElement('B');
	var docElem = document.documentElement;
	var isIE;

	b.innerHTML = '<!--[if IE 8]><b id="ie8test"></b><![endif]-->';
	docElem.appendChild(b);
	isIE = !!document.getElementById('ie8test');
	docElem.removeChild(b);
	return isIE;
}

exports.isIE8 = isIE8();
exports.nodeListToArray = nodeListToArray;
exports.dispatchCustomEvent = dispatchCustomEvent;
