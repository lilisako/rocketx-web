(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{226:function(t,e,n){t.exports=n.p+"img/moon.3cab309.svg"},227:function(t,e,n){"use strict";n.r(e);var c=[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"flex py-10"},[c("div",{staticClass:"text-center w-1/2 flex justify-center items-center"},[c("div",[c("h1",{staticClass:"text-white text-7xl"},[t._v("ROCKET X")]),t._v(" "),c("p",{staticClass:"text-white"},[t._v("Powered by "),c("a",{attrs:{target:"”_blank”",href:"https://github.com/r-spacex/SpaceX-API"}},[t._v("SpaceX-API")])])])]),t._v(" "),c("div",{staticClass:"w-1/2"},[c("img",{attrs:{src:n(226),width:"500"}})])])}],l=n(60),r=n.n(l),v={name:"Home",data:function(){return{launches:[]}},created:function(){var t=this;r.a.get("https://api.spacexdata.com/v3/launches/past?order=desc&limit=5").then((function(e){return t.launches=e.data})).catch((function(t){return console.log(t)}))}},_=n(46),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-gray-600 px-5"},[t._m(0),t._v(" "),n("div",{staticClass:"px-20 py-5"},[n("h2",{staticClass:"text-white text-3xl"},[t._v("PAST LAUNCH")]),t._v(" "),n("div",t._l(t.launches,(function(e){return n("div",{key:e.date,staticClass:"flex p-5 m-2 items-center bg-gray-200 rounded-xl"},[n("img",{staticClass:"m-3",attrs:{src:""+e.links.mission_patch,width:"150",height:"150"}}),t._v(" "),n("div",{staticClass:"w-full"},[n("h3",{staticClass:"text-2xl text-gray-600"},[t._v(t._s(e.mission_name))]),t._v(" "),n("p",{staticClass:"text-sm text-gray-500 py-2"},[t._v(t._s(e.details))]),t._v(" "),n("p",{staticClass:"text-gray-600"},[t._v("LAUNCH TIME : "+t._s(e.launch_date_local))]),t._v(" "),n("div",{staticClass:"bg-gray-600 rounded-xl p-4 text-center"},[n("a",{staticClass:"text-white",attrs:{href:""+e.links.video_link,target:"_blank"}},[t._v("  \n              WATCH LIVE STREAM\n            ")])])])])})),0)])])}),c,!1,null,null,null);e.default=component.exports}}]);