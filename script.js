"use strict";

// class self {
// 	static head = document.querySelector('.head');
// 	static body = document.querySelector('.body');
// 	static debug = document.querySelector('.debug');
// }

// function init() {
// 	resize();
// 	throttle("resize", "optimizedResize");
// 	window.addEventListener("optimizedResize", function() {
//     resize();
// 	});

// 	window.addEventListener('scroll', function() {
// // 		self.debug.textContent = window.pageYOffset;
// 	})
// }

// function resize() {
// 	self.head.style.height = window.innerHeight + 'px';	
// }

// var throttle = function(type, name, obj) {
// 		var obj = obj || window;
// 		var running = false;
// 		var func = function() {
// 				if (running) { return; }
// 				running = true;
// 				requestAnimationFrame(function() {
// 						obj.dispatchEvent(new CustomEvent(name));
// 						running = false;
// 				});
// 		};
// 		obj.addEventListener(type, func);
// };

// window.onload = init;
//