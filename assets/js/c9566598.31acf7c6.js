"use strict";(self.webpackChunkganhuaking_github_io=self.webpackChunkganhuaking_github_io||[]).push([[6794],{9613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,k=f["".concat(p,".").concat(m)]||f[m]||l[m]||a;return r?n.createElement(k,c(c({ref:t},s),{},{components:r})):n.createElement(k,c({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6533:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return s},toc:function(){return l},default:function(){return m}});var n=r(5900),o=r(4750),a=(r(9496),r(9613)),c=["components"],i={title:"\u5e79\u8a71#3 - Docker workshop 2.0",date:new Date("2021-11-24T00:00:00.000Z"),description:"\u9072\u4f86\u7684 11/18 \u7b2c\u4e09\u6b21\u7684 Docker \u9592\u804a\uff0c\u7e3d\u7b97\u8dd1\u51fa Dockercraft \u4e86\u3002",authors:["Miles"],tags:["Meetups"]},p=void 0,u={permalink:"/blog/meetup/no-3-docker-workshop-2_0-part3",editUrl:"https://github.com/ganhuaking/ganhuaking.github.io/edit/master/website/blog/blog/meetup/no-3-docker-workshop-2_0-part3.md",source:"@site/blog/meetup/no-3-docker-workshop-2_0-part3.md",title:"\u5e79\u8a71#3 - Docker workshop 2.0",description:"\u9072\u4f86\u7684 11/18 \u7b2c\u4e09\u6b21\u7684 Docker \u9592\u804a\uff0c\u7e3d\u7b97\u8dd1\u51fa Dockercraft \u4e86\u3002",date:"2021-11-24T00:00:00.000Z",formattedDate:"2021\u5e7411\u670824\u65e5",tags:[{label:"Meetups",permalink:"/blog/tags/meetups"}],readingTime:.64,truncated:!0,authors:[{name:"Miles Chou",title:"\u5e79\u8a71\u738b",url:"https://mileschou.github.io/",imageURL:"https://github.com/MilesChou.png",key:"Miles"}],prevItem:{title:"\u5e79\u8a71#4 - NestJS part 1",permalink:"/blog/meetup/no-4-nestjs-part1"},nextItem:{title:"\u5e79\u8a71#2 - Docker workshop 2.0",permalink:"/blog/meetup/no-2-docker-workshop-2_0-part2"}},s={authorsImageUrls:[void 0]},l=[],f={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u9072\u4f86\u7684 11/18 \u7b2c\u4e09\u6b21\u7684 Docker \u9592\u804a\uff0c\u7e3d\u7b97\u8dd1\u51fa Dockercraft \u4e86\u3002"),(0,a.kt)("p",null,"\u518d\u7e7c\u7e8c",(0,a.kt)("a",{parentName:"p",href:"/blog/meetup/no-2-docker-workshop-2_0-part2"},"\u524d\u4e00\u6b21"),"\u7684 network\uff0c\u9019\u6b21\u8b1b Docker Compose \u7684\u76f8\u95dc\u61c9\u7528\uff0c\u4ee5\u53ca demo ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/docker/dockercraft"},"Dockercraft"),"\u3002\u5c31\u7d93\u9a57\u4f86\u8aaa\uff0c\u5982\u679c\u60f3\u8981\u8dd1 Dockercraft \u7684\u8a71\uff0c\u5c31\u9700\u8981\u82b1\u9322\u8cb7 ",(0,a.kt)("a",{parentName:"p",href:"https://www.minecraft.net/"},"Minecraft"),"\uff1b\u4f7f\u7528 Lima \u8dd1 Dockercraft \u7684\u8a71\uff0c\u6703\u9700\u8981\u6b0a\u9650\u5b58\u53d6 host \u7684 docker.sock \u6a94\uff0c\u56e0\u6b64\u9700\u8981\u9032\u5165 Lima \u4e26 sudo \u6210 root \u6b0a\u9650\u624d\u80fd\u6b63\u5e38\u57f7\u884c\u3002"),(0,a.kt)("p",null,"\u4e0b\u4e00\u6b21\u6703\u7531 Gson \u4f86\u804a\u804a ",(0,a.kt)("a",{parentName:"p",href:"https://nestjs.com/"},"NestJS"),"\uff0c\u82e5\u6709\u60f3\u5206\u4eab\u7684\u4e3b\u984c\uff0c\u6b61\u8fce\u4f86 ",(0,a.kt)("a",{parentName:"p",href:"https://discord.io/ganhuaking"},"Discord")," \u6216 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ganhuaking/ganhuaking.github.io/discussions"},"GitHub Discussions")," \u4e00\u8d77\u8a0e\u8ad6\u54e6\uff01"))}m.isMDXComponent=!0}}]);