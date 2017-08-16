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
 
/** SMALL CONSTRUCTORS **/

//Grid
const title = "#title";

//Class's of this weather
const sun = ".hot";
const cloud = ".cloudy";
const snow = ".snowy";
const rain = ".rain";
const night = ".night";


/** REST **/

/**
 * {jQuery}
 */
$(document).ready(function(){
    new Main();
});

/**
 * @constructor
 */
var Main = function(){
    //Web
    Title(title);
    
    //Weather
    Sun(sun);
    Cloud(cloud);
    Snow(snow);
    Rain(rain);
    Night(night);
};


/** OTHERS **/

/**
 * @param clazz
 * @returns {jQuery}
 */
function Title(clazz) {
    return $(clazz).html("<h1>Weather Animated Elements - Malextrap</h1>");
}

/**
 * @param clazz
 * @returns {jQuery}
 */
function Sun(clazz){
    return $(clazz).html("<span class='sun'></span><span class='sunx'></span>");
}

/**
 * @param clazz
 * @returns {jQuery}
 */
function Cloud(clazz){
    return $(clazz).html("<span class='cloud'></span><span class='cloudx'></span>");
}

/**
 * @param clazz
 * @returns {jQuery}
 */
function Snow(clazz){
    return $(clazz).html("<ul><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul><span class='snowe'></span><span class='snowex'></span><span class='stick'></span><span class='stick2'></span>");
}

/**
 * @param clazz
 * @returns {jQuery}
 */
function Rain(clazz){
    return $(clazz).html("<ul><li></li><li></li><li></li><li></li><li></li></ul><span class='cloudr'></span>");
}

/**
 * @param clazz
 * @returns {jQuery}
 */
function Night(clazz){
    return $(clazz).html("<span class='moon'></span><span class='spot1'></span><span class='spot2'></span><ul><li></li><li></li><li></li><li></li><li></li></ul>");
}
