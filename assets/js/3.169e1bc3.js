(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{249:function(t,e,r){},292:function(t,e,r){"use strict";var n=r(14),s=r(95),o=r(44),i=r(39),c=[].sort,a=[1,2,3];n(n.P+n.F*(i(function(){a.sort(void 0)})||!i(function(){a.sort(null)})||!r(40)(c)),"Array",{sort:function(t){return void 0===t?c.call(o(this)):c.call(o(this),s(t))}})},293:function(t,e,r){"use strict";var n=r(249);r.n(n).a},297:function(t,e,r){"use strict";r.r(e);r(292),r(138);var n=r(116),s={name:"DiscordOpenSource",data:function(){return{repos:null}},mounted:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://cdn.jsdelivr.net/gh/discordapp/discord-open-source/communities.json");case 2:return e=t.sent,t.next=5,e.json();case 5:t.t0=function(t,e){return t.title.localeCompare(e.title)},this.repos=t.sent.data.sort(t.t0);case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},o=(r(293),r(11)),i=Object(o.a)(s,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.repos?r("div",{staticClass:"repos"},t._l(t.repos,function(e){return r("a",{key:e.title,staticClass:"repo",attrs:{href:"https://discordapp.com/invite/"+e.inviteCode,target:"_blank",rel:"noopener noreferrer"}},[r("img",{staticClass:"logo",attrs:{src:"https://cdn.jsdelivr.net/gh/discordapp/discord-open-source/logos/"+e.logo,alt:e.title}}),t._v(t._s(e.title))])}),0):t._e()},[],!1,null,"a6fdba56",null);e.default=i.exports}}]);