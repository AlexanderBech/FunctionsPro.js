/* =========================================================
*	FunctionsPro.js 1.0
*	Author: Alexander Bech / www.alexanderbech.com
*	http://github.com/AlexanderBech/FunctionsPro.js
* ========================================================== */

/*
*	Print object as readable
*/
function printObject(object){
	var output = '';
	for (property in object) {
		output += property + ': ' + object[property]+'; ';
	}
	return output;
}

/*
*	Get hash from url
*/
function get_fragment(url) {
	url = url || location.href;
	return url.replace( /^[^#]*#?(.*)$/, '$1' );
}

/*
*	Url decode
*/
function urldecode(str) {
	return decodeURIComponent((str+'').replace(/\+/g, '%20'));
}

/*
*	Random ID
*/
function randomID(){
	var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
	var uniqid = randLetter + Date.now();
	return uniqid;
}

/*
*	SIZE OF OBJECT
*/
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}

/*
*	BINARY SEARCH
*/
function binarySearch(key, array){   
    var low = 0;
    var high = array.length - 1;
    while(low <= high){
        var mid = Math.floor((low + high)/2);
        var value = array[mid];
        if(value < key){
             low = mid + 1;   
        } else if(value > key){
            high = mid - 1;
        } else {
             return mid;   
        }
    }
    return null;
}

/*
*   Fallback requestAnimationFrame
*/
(function () {
    for (var d = 0, a = ["ms", "moz", "webkit", "o"], b = 0; b < a.length && !window.requestAnimationFrame; ++b) window.requestAnimationFrame = window[a[b] + "RequestAnimationFrame"], window.cancelRequestAnimationFrame = window[a[b] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function (b) {
        var a = (new Date).getTime(),
            c = Math.max(0, 16 - (a - d)),
            e = window.setTimeout(function () {
                b(a + c)
            }, c);
        d = a + c;
        return e
    });
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function (a) {
        clearTimeout(a)
    })
})();