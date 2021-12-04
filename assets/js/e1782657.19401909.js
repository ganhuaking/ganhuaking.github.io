"use strict";(self.webpackChunkganhuaking_github_io=self.webpackChunkganhuaking_github_io||[]).push([[970],{9613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(n),g=o,f=m["".concat(p,".").concat(g)]||m[g]||l[g]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9920:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return c},toc:function(){return l},default:function(){return g}});var r=n(2245),o=n(5903),a=(n(9496),n(9613)),i=["components"],u={title:"\u5e79\u8a71#4 - NestJS part 1",date:new Date("2021-11-26T00:00:00.000Z"),description:"\u9019\u6b21\u9080\u8acb\u4e86 Gson \u5206\u4eab\u4e86 NestJS\u3002",authors:["Miles"],tags:["Meetups","\u5e79\u8a71#4"]},p=void 0,s={permalink:"/blog/meetup/no-4-nestjs-part1",editUrl:"https://github.com/ganhuaking/ganhuaking.github.io/edit/master/website/blog/blog/meetup/no-4-nestjs-part1.md",source:"@site/blog/meetup/no-4-nestjs-part1.md",title:"\u5e79\u8a71#4 - NestJS part 1",description:"\u9019\u6b21\u9080\u8acb\u4e86 Gson \u5206\u4eab\u4e86 NestJS\u3002",date:"2021-11-26T00:00:00.000Z",formattedDate:"November 26, 2021",tags:[{label:"Meetups",permalink:"/blog/tags/meetups"},{label:"\u5e79\u8a71#4",permalink:"/blog/tags/\u5e79\u8a71-4"}],readingTime:.595,truncated:!0,authors:[{name:"Miles Chou",title:"\u5e79\u8a71\u738b",url:"https://mileschou.github.io/",imageURL:"https://github.com/MilesChou.png",key:"Miles"}],prevItem:{title:"\u5e79\u8a71#5 - NestJS part 2",permalink:"/blog/meetup/no-5-nestjs-part2"},nextItem:{title:"\u5e79\u8a71#3 - Docker workshop 2.0",permalink:"/blog/meetup/no-3-docker-workshop-2_0-part3"}},c={authorsImageUrls:[void 0]},l=[],m={toc:l};function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u9019\u6b21\u9080\u8acb\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/yuanyu90221"},"Gson")," \u5206\u4eab\u4e86 NestJS\u3002"),(0,a.kt)("p",null,"\u9019\u662f\u4e00\u500b Node.js \u7684\u5f8c\u7aef\u6846\u67b6\uff0c\u5b83\u7684\u7279\u9ede\u662f\u652f\u63f4 ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),"\u3002\u9019\u500b\u6846\u67b6\u5b78\u7fd2\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"https://angular.io/"},"Angular")," \u7684\u8a31\u591a\u512a\u9ede\u548c\u7279\u8272\uff0c\u9664\u4e86\u8b93\u958b\u767c\u66f4\u65b9\u4fbf\u5916\uff0c\u4e5f\u540c\u6642\u4e5f\u80fd\u964d\u4f4e Angular \u958b\u767c\u8005\u4e0a\u624b\u7684\u96e3\u5ea6\u3002"),(0,a.kt)("p",null,"\u8a73\u7d30\u7b46\u8a18\u53ef\u4ee5\u53c3\u8003",(0,a.kt)("a",{parentName:"p",href:"https://ganhuaruanti.github.io/nestjs-document/"},"\u50b3\u9001\u9580"),"\u3002"),(0,a.kt)("p",null,"\u4e0b\u4e00\u6b21 Gson \u6703\u518d\u8aaa\u660e NestJS \u7bc4\u4f8b\u5c08\u6848\u5176\u4ed6\u7d30\u7bc0\uff0c\u82e5\u6709\u60f3\u5206\u4eab\u7684\u4e3b\u984c\uff0c\u6b61\u8fce\u4f86 ",(0,a.kt)("a",{parentName:"p",href:"https://discord.io/ganhuaking"},"Discord")," \u6216 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ganhuaking/ganhuaking.github.io/discussions"},"GitHub Discussions")," \u4e00\u8d77\u8a0e\u8ad6\u54e6\uff01"))}g.isMDXComponent=!0}}]);