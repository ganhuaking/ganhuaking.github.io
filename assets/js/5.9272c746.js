(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{243:function(e,t,n){},281:function(e,t,n){"use strict";var r=n(243);n.n(r).a},285:function(e,t,n){"use strict";n.r(t);n(135);var r=n(113),s={name:"DiscordOpenSource",data:function(){return{repos:null}},mounted:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cdn.jsdelivr.net/gh/discordapp/discord-open-source/communities.json");case 2:return t=e.sent,e.next=5,t.json();case 5:this.repos=e.sent.data;case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},o=(n(281),n(37)),c=Object(o.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.repos?n("div",{staticClass:"repos"},e._l(e.repos,function(t){return n("a",{key:t.title,staticClass:"repo",attrs:{href:"https://discordapp.com/invite/"+t.inviteCode,target:"_blank",rel:"noopener noreferrer"}},[n("img",{staticClass:"logo",attrs:{src:"https://cdn.jsdelivr.net/gh/discordapp/discord-open-source/logos/"+t.logo,alt:t.title}}),e._v(e._s(t.title))])}),0):e._e()},[],!1,null,"ebedcf68",null);t.default=c.exports}}]);