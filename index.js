/**
 * Created by alejandrorioscalera
 * On 16/8/17
 *
 * -- SOCIAL NETWORKS --
 *
 * GitHub: https://github.com/clonalejandro or @clonalejandro
 * Website: https://clonalejandro.me/
 * Twitter: https://twitter.com/clonalejandro11/ or @clonalejandro11
 * Keybase: https://keybase.io/clonalejandro/
 *
 * -- LICENSE --
 *
 * All rights reserved for clonalejandro ©Malextrap | Weather 2017 / 2018
 */
 
/**
 * Created by alejandrorioscalera
 * On 13/12/17
 *
 * -- SOCIAL NETWORKS --
 *
 * GitHub: https://github.com/clonalejandro or @clonalejandro
 * Website: https://clonalejandro.me/
 * Twitter: https://twitter.com/clonalejandro11/ or @clonalejandro11
 * Keybase: https://keybase.io/clonalejandro/
 *
 * -- LICENSE --
 *
 * All rights reserved for clonalejandro ©malextrap 2017 / 2018
 */

/** SMALL CONSTRUCTORS **/

/**
* @constructor
*/
function Weather() {
    sun(document.querySelector(".hot"));
    cloud(document.querySelector(".cloudy"));
    snow(document.querySelector(".snowy"));
    rain(document.querySelector(".rain"));
    night(document.querySelector(".night"));
 };
 
 
 /** OTHERS **/
 
 /**
 * @param e element
 * @returns element
 */
 function sun(e){
    return e.innerHTML += "<span class='sun'></span><span class='sunx'></span>";
 }
 
 
 /**
 * @param e element
 * @returns element
 */
 function cloud(e){
    return e.innerHTML += "<span class='cloud'></span><span class='cloudx'></span>";
 }
 
 
 /**
 * @param e element
 * @returns element
 */
 function snow(e){
    return e.innerHTML += "<ul><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul><span class='snowe'></span><span class='snowex'></span><span class='stick'></span><span class='stick2'></span>";
 }
 
 
 /**
 * @param e element
 * @returns element
 */
 function rain(e){
    return e.innerHTML = "<ul><li></li><li></li><li></li><li></li><li></li></ul><span class='cloudr'></span>";
 }
 
 
 /**
 * @param e element
 * @returns element
 */
 function night(e){
    return e.innerHTML = "<span class='moon'></span><span class='spot1'></span><span class='spot2'></span><ul><li></li><li></li><li></li><li></li><li></li></ul>";
 }