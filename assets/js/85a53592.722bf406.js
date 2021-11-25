"use strict";(self.webpackChunkganhuaking_github_io=self.webpackChunkganhuaking_github_io||[]).push([[517],{9613:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return g}});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(r),g=o,m=f["".concat(p,".").concat(g)]||f[g]||s[g]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8265:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return l},toc:function(){return s},default:function(){return g}});var n=r(2245),o=r(5903),a=(r(9496),r(9613)),i=["components"],c={title:"\u5e79\u8a71#2 - Docker workshop 2.0",date:new Date("2021-11-11T00:00:00.000Z"),description:"11/11 \u7b2c\u4e8c\u6b21\u7684 Docker \u9592\u804a\u3002",authors:["Miles"],tags:["Meetups","\u5e79\u8a71#2"]},p=void 0,u={permalink:"/blog/docker-workshop-2_0-part2",editUrl:"https://github.com/ganhuaking/ganhuaking.github.io/edit/master/website/blog/blog/docker-workshop-2_0-part2.md",source:"@site/blog/docker-workshop-2_0-part2.md",title:"\u5e79\u8a71#2 - Docker workshop 2.0",description:"11/11 \u7b2c\u4e8c\u6b21\u7684 Docker \u9592\u804a\u3002",date:"2021-11-11T00:00:00.000Z",formattedDate:"November 11, 2021",tags:[{label:"Meetups",permalink:"/blog/tags/meetups"},{label:"\u5e79\u8a71#2",permalink:"/blog/tags/\u5e79\u8a71-2"}],readingTime:.83,truncated:!0,authors:[{name:"Miles Chou",title:"\u5e79\u8a71\u738b",url:"https://mileschou.github.io/",imageURL:"https://github.com/MilesChou.png",key:"Miles"}],prevItem:{title:"\u5e79\u8a71#3 - Docker workshop 2.0",permalink:"/blog/docker-workshop-3_0-part3"},nextItem:{title:"\u5e79\u8a71#1 - Docker workshop 2.0",permalink:"/blog/docker-workshop-2_0-part1"}},l={authorsImageUrls:[void 0]},s=[],f={toc:s};function g(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"11/11 \u7b2c\u4e8c\u6b21\u7684 Docker \u9592\u804a\u3002"),(0,a.kt)("p",null,"\u5ef6\u7e8c",(0,a.kt)("a",{parentName:"p",href:"/blog/docker-workshop-2_0-part1"},"\u524d\u4e00\u6b21"),"\u7684 port forwarding \u5167\u5bb9\uff0c\u9019\u6b21\u4e3b\u8981\u8b1b Volume \u7684 bind mount \u548c Network \u529f\u80fd\uff0c\u4e26\u4e14\u8aaa\u660e\u4e86\u5176\u4e2d\u4e00\u7a2e Docker container \u61c9\u7528\u60c5\u5883\u3002"),(0,a.kt)("p",null,"\u5176\u4e2d\u6709\u8a0e\u8ad6\u5230\u4e00\u500b\u8cc7\u5b89\u554f\u984c\uff0d\uff0d\u5982\u679c\u6211\u5011\u60f3\u628a\u5169\u500b container \u653e\u5728\u540c\u4e00\u500b network \u88e1\uff0c\u4f46\u60f3\u8b93\u5176\u4e2d\u4e00\u500b container \u770b\u4e0d\u5230\u53e6\u4e00\u500b\uff0c\u8a72\u600e\u9ebc\u8fa6\uff1f"),(0,a.kt)("p",null,"\u6700\u5f8c\u8a0e\u8ad6\u7684\u7d50\u679c\u662f\u4f7f\u7528 iptables\uff0cDocker \u5b98\u65b9\u6587\u4ef6\u4e5f\u6709\u63d0\u5230",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/network/iptables/"},"\u76f8\u95dc\u7684\u5167\u5bb9"),"\uff0c\u6709\u8208\u8da3\u53ef\u4ee5\u770b\u6587\u4ef6\u4e86\u89e3\u3002"),(0,a.kt)("p",null,"\u672c\u6b21\u52a0\u5165\u5169\u500b\u8a31\u9858\u6e05\u55ae\uff0c\u5206\u5225\u70ba NestJS \u548c Design Pattern\uff0c\u82e5\u6709\u60f3\u5206\u4eab\u7684\u4e3b\u984c\uff0c\u6b61\u8fce\u4f86 ",(0,a.kt)("a",{parentName:"p",href:"https://discord.io/ganhuaking"},"Discord")," \u6216 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ganhuaking/ganhuaking.github.io/discussions"},"GitHub Discussions")," \u4e00\u8d77\u8a0e\u8ad6\u54e6\uff01"))}g.isMDXComponent=!0}}]);