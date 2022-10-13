// The debounce() function forces a function to wait a certain amount of time before running again. The function is built to limit the number of times a function is called.

// Events such as scrolling, mouse movement, and keypress bring great overhead with them if they are captured every single time they fire. The function aims to reduce overhead by preventing a function from being called several times in succession.

// "debounce" returns a function that, as long as it continues to be invoked, will not be triggered. The function will be called after it stops being called for N milliseconds.

/**
 * Jab tak function call kr rhe hain tab tak vo invoke/run nyi hoga. Jab function call hona band ho jayga kuch time k liye tab jake vo 1 baar call hoga.
 *
 * ex- Search bar-  Main "school" type kr rha ha hu, har keyword pe function call hoga but jab main 500ms k liye ruk jau tab vo run hona chahiye
 */



/**
 * As long as it continues to be invoked, it will not be triggered
 * @param {*} func- function to be called
 * @param {*} wait- time for which we need to pause before calling
 * @returns -> returns a function
 */

function debounce(func, interval) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    var later = function () {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, interval || 200);
  };
}


var myHeavyFunction = debounce(function () {
  // do heavy things
}, 250);
window.addEventListener("mousemove", myHeavyFunction);

// ------------------------------------------------------------------------------------------------------------------------------


// Throttling enforces a maximum number of times a function can be called over time. For example, “execute this function at most once every 100 milliseconds.”

// In other words: By using throttle, we don’t allow to our function to execute more than once every X milliseconds.

/**
 * example- Firing a shot gun vs machine gun in a game
 * 
 * Shot gun takes 500ms between 2 rounds and machine gun takes 100ms. But the player is continuously clicking the btn to fire. So, we need to limit the fireShot() function being called.
 * 
 * fireShot() will be executed every 500ms no matter how many times you click (only if you click at 500ms or after)
 * 
 * 
 */


// 

/**
 * as long as it continues to be invoked, raise on every interval
 * 
 * @param {*} func-> fireShot() like function 
 * @param {*} interval 
 * @returns 
 */

function throttle (func, interval) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function () {
      timeout = false;
    };
    if (!timeout) {
      func.apply(context, args) //call for first time
      timeout = true;
      setTimeout(later, interval)
    }
  }
}

