/* noco-non-vu.js
 *
 * This script simply inject the jquery code needed to hide view items at the
 * end of the body
 */

//console.log("DEBUG: script injection start");

// Create a script element
var s = document.createElement("script");
// Get the url of the jquery script
s.src = chrome.extension.getURL("js/jquery-noco-non-vu.js");

// Append dat shit
document.body.appendChild(s);

//console.log("DEBUG: script append happened!");
