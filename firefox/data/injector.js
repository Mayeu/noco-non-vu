/*
 * injector.js
 *
 * Inject the jquery code needed to hide view items into a script element at
 * the end of the body
 */

console.log("DEBUG: injector go!");

var noco_non_vu = document.createElement("script");

noco_non_vu.src = self.options.script_path;

console.log("DEBUG: ", noco_non_vu.src);

top.window.content.document.body.appendChild(noco_non_vu);

console.info("DEBUG: injector done!");
