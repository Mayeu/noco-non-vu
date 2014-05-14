/*
 * injector.js
 *
 * Inject the jquery code needed to hide view items into a script element at
 * the end of the body
 */

var noco_non_vu = document.createElement("script");
noco_non_vu.src = chrome.extension.getURL("js/noco-non-vu.js");

document.body.appendChild(noco_non_vu);
