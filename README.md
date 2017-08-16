# Weather
A element for my personal framework available in: https://github.com/Malextrap

<br>

## DEPENDENCIES 

```html
<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
```
<br>

## HTML

```html
<!--
/**
 * Created by alejandrorioscalera
 * On 16/8/17
 *
 * - SOCIAL NETWORKS -
 *
 * GitHub: https://github.com/clonalejandro or @clonalejandro
 * Website: https://clonalejandro.me/
 * Twitter: https://twitter.com/clonalejandro11/ or @clonalejandro11
 * Keybase: https://keybase.io/clonalejandro/
 *
 * - LICENSE -
 *
 * All rights reserved for clonalejandro ©Malextrap | Weather 2017 / 2018
 */
-->
  <section id="title">
  </section>
  
  <section id="weather">
    <!-- SUN -->
    <div class="hot">
    </div>
    
    <!-- CLOUD -->
    <div class="cloudy">
    </div>
    
    <!-- SNOW -->
    <div class="snowy">
    </div>
    
    <!-- RAIN -->
    <div class="rain">
    </div>
    
    <!-- NIGHT -->
    <div class="night">
    </div>
  </section>
  
  <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
  <script src="weather.js" type="text/javascript"></script>
```

<br>

## CSS

```css
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

/** FONTS **/

@import url('https://fonts.googleapis.com/css?family=Raleway');


/** WEB ELEMENTS **/

body { background: #fff; }

div {
	  width:130px;
	  height:130px;
	  border-radius: 40%;
	  z-index: 120;
}
 
h1 {
    font-family: 'Raleway', sans-serif;
    position: fixed;
	  left: 30%;
}


/** WEAHTER ELEMENTS **/

/** SUN **/

.hot { 
    position: absolute;
	  top:25%;
	  left:20%;
	  background: linear-gradient( to top right, rgba(255,87,34,1) 0%, rgba(251,140,0 ,1) 100%);
	  box-shadow: 1px 1px 30px rgba(255,111,0 ,1);
}

.sun {
	  position: absolute;
	  top: -10%;
	  left: 65%;
	  width: 50px;
	  height: 50px;
	  border-radius: 100%;
	  background: linear-gradient( to bottom left, rgba(255,235,59,1) 0%, rgba(249,168,37 ,1) 90%);
	  box-shadow: 1px 1px 30px rgba(255,160,0 ,1);
	  animation: sunning 3s infinite linear;
}

.sunx {
	  position: absolute;
	  top: 30%;
	  left: 45%;
	  width: 10px;
	  height: 10px;
	  border-radius: 100%;
	  background-color: #fff;
	  opacity: 0.2;
}


/** CLOUD **/

.cloudy {
    position: absolute;
	  top: 25%;
	  left: 45%;
	  background: linear-gradient( to top right, rgba(63,81,181,1) 0%, rgba(3,155,229 ,1) 40%);
	  box-shadow: 1px 1px 30px rgba(2,119,189 ,1);
}

.cloud {
    position: absolute;
	  top: 5%;
	  left: 70%;
	  width: 60px;
	  height: 20px;
	  border-radius: 10px;
	  background-color: rgba(129,212,250 ,1);
	  box-shadow: 1px 1px 30px rgba(0,151,167 ,1);
    animation: cloudmove 3s infinite linear;
}

.cloudx {
	  position: absolute;
	  top: 23%;
	  left: 55%;
	  width: 60px;
	  height: 20px;
	  border-radius: 10px;
	  background-color: rgba(129,212,250 ,1);
	  animation: cloudmove 3s infinite linear;
}


/** STORM **/

.snowy {
	  position: absolute;
	  top: 25%;
	  left: 70%;
	  background: linear-gradient( to top right,rgba(117,117,117 ,1) 0%, rgba(33,33,33 ,1) 90%);
	  box-shadow: 1px 1px 30px rgba(33,33,33 ,1);
}

.snowy li {
	  position: absolute;
	  list-style: none;
	  width: 5px;
	  height: 5px;
	  border-radius: 100%;
	  background-color:#777;
	  box-shadow: 1px 1px 30px #555;
	  animation: fall 3s infinite linear;
    opacity:0;
}

.snowy li:nth-child(1) {	
    top: 0%;
    left: 100%;
}

.snowy li:nth-child(2) {
    top: 5%;
    left: 90%;
}

.snowy li:nth-child(3) {
    top: -10%;
    left: 80%;
    animation-delay: 2s;
}

.snowy li:nth-child(4) {
    top: 10%;
    left: 100%;
    animation-delay: 2s;
}

.snowy li:nth-child(5) {
    top: 20%;
    left: 80%;
    animation-delay: 0.5s;
}

.snowy li:nth-child(6) {
    top: 35%;
    left: 70%;
    background-color: #bbb;
    animation-delay: 0.5s;
}

.snowy li:nth-child(7) {
    top: 23%;
    left: 60%;
    background-color: #bbb;
    animation-delay: 0.8s;
}

.snowy li:nth-child(8) {
    top: 5%;
    left: 70%;
    background-color: #bbb;
    animation-delay: 0.8s;
}

.snowe {
    position: absolute;
	  top: 60%;
	  left: 40%;
	  width: 40px;
	  height: 40px;
	  border-radius: 60px;
	  background-color: #ddd;
}

.snowex {
	  position: absolute;
	  top: 50%;
	  left:50%;
	  width: 15px;
	  height: 15px;	
	  border-radius: 15px;
	  background-color: #bbb;
}

.stick {
	  position: absolute;
	  top: 60%;
	  left: 40%;
	  width: 3px;
	  height: 15px;	
	  transform: rotate(-45deg);
	  background-color: #333;
    z-index: -10;
}

.stick2 {
	  position: absolute;
	  top: 60%;
	  left: 70%;
	  width: 3px;
	  height: 15px;	
	  transform: rotate(45deg);
	  background-color: #333;
    z-index: -10;
}


/** RAIN **/

.rain {
	  position: absolute;
	  top: 60%;
	  left: 30%;
	  background: linear-gradient( to top right,rgba(156,204,101 ,1) 0%, rgba(38,198,218 ,1) 50%);
	  box-shadow: 1px 1px 30px rgba(38,198,218 ,1);
}

.cloudr {
    position: absolute;
	  top: 5%;
	  left: 60%;
	  width: 60px;
	  height: 20px;
	  border-radius: 10px;
	  background-color: rgba(96,125,139 ,1);
	  box-shadow: 1px 1px 30px rgba(84,110,122 ,1);
    animation: flash 1.5s infinite linear;
}

.rain li {
	  position: absolute;
	  list-style: none;
	  width: 2px;
	  height: 7px;
	  border-radius: 10%;
	  background-color: #eee;
	  opacity: 0;
	  animation: fall 3s infinite linear;
	  transform: rotate(25deg);
}

.rain li:nth-child(1) {
    top: 10%;
    left: 95%;
}

.rain li:nth-child(2) {
    top: 5%;
    left: 83%;
    animation-delay: 0.3s;
}

.rain li:nth-child(3) {
    top: 4%;
    left: 87%;
    animation-delay: 0.6s;
}

.rain li:nth-child(4) {
    top: 15%;
    left: 70%;
    animation-delay: 1s;
}

.rain li:nth-child(5) {
    top: 10%;
    left: 75%;
}


/** NIGHT **/

.night {
	  position: absolute;
	  top: 60%;
	  left: 60%;
	  background: linear-gradient( to bottom right,rgba(63,81,181,1) 0%, rgba(171,71,188 ,1) 70%);
	  box-shadow: 1px 1px 30px rgba(81,45,168 ,1);
}

.moon {
	  position: absolute;
	  top: -10%;
	  left: 65%;
	  width: 70px;
	  height: 70px;
	  border-radius: 100%;
	  background: rgba(255,241,118 ,1);
	  box-shadow: 1px 1px 30px rgba(224,224,224 ,1);
}

.spot1 {
	  position: absolute;
	  top: 0%;
	  left: 85%;
	  width: 10px;
	  height: 10px;
	  border-radius: 100%;
	  background-color: #777;
}

.spot2 {
	  position: absolute;
	  top: 30%;
	  left: 75%;
	  width: 5px;
	  height: 5px;
	  border-radius: 100%;
	  background-color: #777;
}

.night li {
	  position: absolute;
	  list-style: none;
	  width: 3px;
	  height: 3px;
	  border-radius: 100%;
	  background-color: #fff;	
	  transform: rotate(45deg);
}

.night li:nth-child(1) {
    top: 30%;
    left: 65%;
}

.night li:nth-child(2) {
    top: 35%;
    left: 53%;
}

.night li:nth-child(3) {
    opacity: 0;
    top: 20%;
    left: 75%;
    width: 2px;
    height: 2px;
    animation: meteor 1.5s infinite linear;
    animation-delay: 0.6s;
}

.night li:nth-child(4) {
    top: 5%;
    left: 50%;
}

.night li:nth-child(5) {
	  opacity: 0;
    top: 20%;
    left: 55%;
    width: 1px;
    height: 15px;
    animation: meteor 1.5s infinite linear;
}


/** ANIMATIONS **/

@keyframes sunning {
	50% { opacity: 0.4; }
	60% { opacity: 1; }
}

@keyframes cloudmove {
  50% { transform: translateX(-10px); }
}

@keyframes fall {
  10% { opacity:0.8; }

  50% {
		opacity:1;
	  transform: translate(-10px,30px);
	}
  
	100% { transform: translate(-25px,70px); }
}

@keyframes flash {
	48% { background-color: rgba(96,125,139 ,1); }
	50% { background-color: #fff; }
	55% { background-color: rgba(96,125,139 ,1); }
	57% { background-color: #fff; }
}

@keyframes meteor {
  10% { opacity: 1; }
  
  80%	{ 
    left:10%;
    top:75%;
    opacity: 0;
  }
}
```

<br>

## JS 

```js
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
```

<br>

## Test this element

You can test in this web: <a href="https://malextrap.github.io/Weather/src/minify/weather.min.html">this</a>



![picture](https://i.imgur.com/1mIWzya.png)


## Copyright ©
#### Developed by clonalejandro
         
