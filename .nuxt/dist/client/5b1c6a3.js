(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,3],{1126:function(e,t,n){"use strict";n(627)},1127:function(e,t,n){var r=n(102),o=n(453),c=n(1128),l=r(!1),h=o(c);l.push([e.i,'html{scroll-behavior:smooth}body{min-height:100vh;background-color:#000;font-family:Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif}body #launcher{min-height:100vh;display:flex;flex-direction:column;justify-content:space-between;background:url('+h+") 50% no-repeat;background-size:cover}@media screen and (min-width:992px){body #launcher{font-size:clamp(1.2em,1.625vw,1.625em)}}body #launcher #launcher-content{padding-top:6vw;background:linear-gradient(180deg,#000 24%,rgba(0,0,0,.62) 48%,hsla(0,0%,100%,0)) top no-repeat;background-size:100vw 9.5em,cover;min-height:52vh;height:calc(100vh - 68vw)}@media screen and (min-width:992px){body #launcher #launcher-content{min-height:unset;height:auto}}body #launcher #launcher-content p{font-family:Roboto,Helvetica,Arial,sans-serif;font-size:1.25em;line-height:1.15;font-weight:500}body #launcher #launcher-content p.launcher-story{max-width:15em}body #launcher #launcher-content p.launcher-copyright{font-size:.75em;font-weight:400;margin-bottom:2em}@media screen and (min-width:992px){body #launcher #launcher-content p.launcher-copyright{margin-bottom:3em}}body #launcher #launcher-content .btn{font-family:Roboto,Helvetica,Arial,sans-serif;font-weight:900;font-size:.875em;color:#000;background:#fff;padding:.6789em;margin:3.5em auto;width:100%;max-width:16em;box-shadow:0 .85em 3.5em rgba(210,50,234,.6);border-radius:.7em;position:relative;display:block}@media screen and (min-width:768px){body #launcher #launcher-content .btn{margin-left:0}}@media screen and (min-width:992px){body #launcher #launcher-content .btn{font-size:.965em;margin:3.625em 0 3.125em;max-width:18em;padding:.9em}}@media screen and (min-width:1200px){body #launcher #launcher-content .btn{font-size:1.15em;margin:.5em 0 3.5em auto;padding:1.17em}}body #launcher #launcher-content .btn .cone{top:-3em;right:1em;width:3.21em;height:3.6em;pointer-events:none;position:absolute;display:block}@media screen and (min-width:992px){body #launcher #launcher-content .btn .cone{top:-3.7em;width:4em;height:4.5em}}@media screen and (min-width:1440px){body #launcher #launcher-content .btn .cone{top:-5.5em;right:0;width:6.2em;height:7em}}.btn:active,button:active{-webkit-transform:scale(.95) translateY(5%);transform:scale(.95) translateY(5%)}",""]),e.exports=l},1128:function(e,t,n){e.exports=n.p+"img/main-bg.d3f547a.jpg"},1136:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{throwCone:!1}},methods:{goToLockerroom:function(){this.throwCone=!0,this.$router.push("/lockerroom")}}},o=(n(1126),n(61)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"launcher"}},[n("FullscreenHero"),e._v(" "),n("section",{attrs:{id:"launcher-content"}},[n("div",{staticClass:"container-fluid pt-3"},[n("div",{staticClass:"row"},[e._m(0),e._v(" "),n("div",{staticClass:"col-10 offset-1 col-lg-5 offset-lg-0 col-xl-4"},[n("NuxtLink",{attrs:{to:"/lockerroom"}},[n("button",{staticClass:"btn launcher-btn"},[e._v("ENTER THE LOCKER ROOM"),n("Cone",{attrs:{throwCone:e.throwCone}})],1)]),e._v(">\n        ")],1)]),e._v(" "),e._m(1)])]),e._v(" "),e._m(2)],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-10 col-lg-6 offset-1 d-flex flex-column"},[n("p",{staticClass:"text-white mb-0"},[e._v("\n            NFT collection of 10.000 unique pieces.\n          ")]),e._v(" "),n("p",{staticClass:"text-white"},[e._v("\n            Warm-ups are over. Get ready for a puck drop.\n          ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row py-3"},[n("div",{staticClass:"col text-center"},[n("p",{staticClass:"launcher-copyright text-white text-uppercase"},[e._v("\n            Copyright 2022 • Locker Room Brotherhood • All rights reserved.\n          ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"d-none"},[t("img",{attrs:{src:"/_nuxt/img/lrbh-hero.jpg"}})])}],!1,null,null,null);t.default=component.exports;installComponents(component,{FullscreenHero:n(632).default,Cone:n(398).default})},317:function(e,t,n){var content=n(372);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(103).default)("2c07a9f7",content,!0,{sourceMap:!1})},349:function(e,t,n){e.exports=n.p+"img/discord.7e5fc9a.svg"},350:function(e,t,n){e.exports=n.p+"img/twitter.5f90ab9.svg"},351:function(e,t,n){e.exports=n.p+"img/insta.3131d4b.svg"},352:function(e,t,n){e.exports=n.p+"img/opensea.48ed84a.svg"},370:function(e,t,n){e.exports=n.p+"img/cone.ea3ce03.png"},371:function(e,t,n){"use strict";n(317)},372:function(e,t,n){var r=n(102)(!1);r.push([e.i,".cone img{width:100%;height:auto;position:absolute;left:0;top:0}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""]),e.exports=r},376:function(e,t,n){var content=n(476);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(103).default)("8ec0f9b8",content,!0,{sourceMap:!1})},398:function(e,t,n){"use strict";n.r(t);var r={props:["throwCone"]},o=(n(371),n(61)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cone"},[r("transition",{attrs:{name:"coneTransition"}},[r("img",{directives:[{name:"show",rawName:"v-show",value:!e.throwCone,expression:"!throwCone"}],attrs:{src:n(370)}})])],1)}),[],!1,null,null,null);t.default=component.exports},453:function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},472:function(e,t,n){e.exports=n.p+"videos/hero.12d365c.webm"},473:function(e,t,n){e.exports=n.p+"videos/hero.763f264.mp4"},474:function(e,t,n){e.exports=n.p+"img/welcome.d2afcbf.svg"},475:function(e,t,n){"use strict";n(376)},476:function(e,t,n){var r=n(102)(!1);r.push([e.i,'#launcher-hero .hero-video-wrapper[data-v-08e242e8]{position:absolute;top:2.5em;left:0;right:0;height:calc(68vw - 2.5em);max-height:calc(48vh - 2.5em);overflow:hidden;display:flex;align-items:center;justify-content:center}@media screen and (min-width:768px){#launcher-hero .hero-video-wrapper[data-v-08e242e8]{left:8.333333%;right:8.333333%;height:calc(47vw - 2.5em);max-height:calc(100vh - 2.5em)}}#launcher-hero .hero-video-wrapper video[data-v-08e242e8]{height:100%;position:absolute;object-fit:cover;object-position:center}#launcher-hero .container-fluid[data-v-08e242e8]{background:linear-gradient(0deg,#000,rgba(0,0,0,.62) 16%,hsla(0,0%,100%,0)) bottom no-repeat;background-size:100vw 9.5em;height:68vw;max-height:48vh;position:relative}@media screen and (min-width:768px){#launcher-hero .container-fluid[data-v-08e242e8]{height:47vw;max-height:100vh;margin-top:1.5em;height:calc(47vw - 1.45em);max-height:calc(100vh - 1.5em)}}#launcher-hero .container-fluid ul.hero-social[data-v-08e242e8]{width:50vw;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;list-style:none;margin:0;padding:0}@media screen and (min-width:768px){#launcher-hero .container-fluid ul.hero-social[data-v-08e242e8]{width:calc(8.33333% - 15px)}}@media screen and (min-width:992px){#launcher-hero .container-fluid ul.hero-social[data-v-08e242e8]{width:60px}}#launcher-hero .container-fluid ul.hero-social li[data-v-08e242e8]{display:flex;justify-content:center;align-items:center}@media screen and (min-width:768px){#launcher-hero .container-fluid ul.hero-social li[data-v-08e242e8]{justify-content:end;width:100%}}#launcher-hero .container-fluid ul.hero-social li a[data-v-08e242e8]{color:#fff;text-align:center;width:30px}@media screen and (min-width:768px){#launcher-hero .container-fluid ul.hero-social li a[data-v-08e242e8]{margin-bottom:30px;margin-right:20px}}#launcher-hero .container-fluid ul.hero-social li a img[data-v-08e242e8]{width:100%}#launcher-hero .container-fluid h1[data-v-08e242e8]{text-align:center}#launcher-hero .container-fluid h1 img[data-v-08e242e8]{width:81.6vw;max-width:100%;bottom:-5vw;position:relative}@media screen and (min-width:992px){#launcher-hero .container-fluid h1[data-v-08e242e8]{text-align:left}#launcher-hero .container-fluid h1 img[data-v-08e242e8]{width:60vw;bottom:-1vw}}#launcher-hero[data-v-08e242e8]:before{content:"";position:absolute;left:0;top:25vw;width:100%;height:18vw;-webkit-transform:scaleY(2);transform:scaleY(2);background:radial-gradient(circle,#0e1b0c 0,transparent 9vw) left -42vw center no-repeat,radial-gradient(circle,#1b0937 0,transparent 9vw) right -42vw center no-repeat}',""]),e.exports=r},627:function(e,t,n){var content=n(1127);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(103).default)("28f1127f",content,!0,{sourceMap:!1})},632:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row h-100 pt-1 pt-md-3"},[r("div",{staticClass:"col-12 pl-3"},[r("ul",{staticClass:"hero-social"},[r("li",[r("a",{attrs:{href:"https://discord.gg/4GYvvreWKm",target:"_blank","aria-label":"discord"}},[r("img",{attrs:{src:n(349),alt:"Discord"}})])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/LockerRoomBH",target:"_blank","aria-label":"twitter"}},[r("img",{attrs:{src:n(350),alt:"Twitter"}})])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://instagram.com/lockerroombrotherhood",target:"_blank","aria-label":"instagram"}},[r("img",{attrs:{src:n(351),alt:"Instagram"}})])]),e._v(" "),r("li",[r("a",{staticStyle:{opacity:".5"},attrs:{"aria-label":"opensea"}},[r("img",{attrs:{src:n(352),alt:"OpenSea"}})])])])]),e._v(" "),r("div",{staticClass:"col offset-lg-1 align-self-end"},[r("h1",[r("img",{attrs:{src:n(474),alt:"Welcome to the brotherhood"}})])])])])}],o=(n(475),n(61)),component=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{attrs:{id:"launcher-hero"}},[r("div",{staticClass:"hero-video-wrapper"},[r("video",{staticClass:"hero-video",attrs:{poster:"/_nuxt/img/hero.jpg",playsInline:"",autoPlay:"",muted:"",loop:""},domProps:{muted:!0}},[r("source",{attrs:{src:n(472),type:"video/webm"}}),e._v(" "),r("source",{attrs:{src:n(473),type:"video/mp4"}})])]),e._v(" "),e._m(0)])}),r,!1,null,"08e242e8",null);t.default=component.exports}}]);