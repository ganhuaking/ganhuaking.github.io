"use strict";(self.webpackChunkganhuaking_github_io=self.webpackChunkganhuaking_github_io||[]).push([[3089],{7595:function(e,a,t){t.d(a,{Z:function(){return E}});var r=t(4750),n=t(9496),l=t(1626),i=t(1585),m=t(6200),s="sidebar_hpIG",o="sidebarItemTitle_muKn",c="sidebarItemList_SIWl",g="sidebarItem_3VVy",d="sidebarItemLink_hYgC",u="sidebarItemLinkActive_gLto",p=t(3133);function v(e){var a=e.sidebar;return 0===a.items.length?null:n.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},a.title),n.createElement("ul",{className:c},a.items.map((function(e){return n.createElement("li",{key:e.permalink,className:g},n.createElement(m.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:u},e.title))}))))}var h=["sidebar","toc","children"];var E=function(e){var a=e.sidebar,t=e.toc,m=e.children,s=(0,r.Z)(e,h),o=a&&a.items.length>0;return n.createElement(i.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},o&&n.createElement("aside",{className:"col col--3"},n.createElement(v,{sidebar:a})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},m),t&&n.createElement("div",{className:"col col--2"},t))))}},2504:function(e,a,t){t.r(a),t.d(a,{default:function(){return g}});var r=t(9496),n=t(1565),l=t(7595),i=t(5742),m=t(6200),s=t(3133);var o=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},t&&r.createElement(m.Z,{className:"pagination-nav__link",to:t},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.createElement(m.Z,{className:"pagination-nav__link",to:n},r.createElement("div",{className:"pagination-nav__label"},r.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},c=t(7010);var g=function(e){var a=e.metadata,t=e.items,m=e.sidebar,s=(0,n.Z)().siteConfig.title,g=a.blogDescription,d=a.blogTitle,u="/"===a.permalink?s:d;return r.createElement(l.Z,{title:u,description:g,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:m},t.map((function(e){var a=e.content;return r.createElement(i.Z,{key:a.metadata.permalink,frontMatter:a.frontMatter,assets:a.assets,metadata:a.metadata,truncated:a.metadata.truncated},r.createElement(a,null))})),r.createElement(o,{metadata:a}))}},5742:function(e,a,t){t.d(a,{Z:function(){return _}});var r=t(9496),n=t(1626),l=t(9613),i=t(3133),m=t(6200),s=t(3556),o=t(7010),c=t(2311),g=t(5473),d="blogPostTitle_Lakp",u="blogPostData_TpsL",p="blogPostDetailsFull_jmUe",v=t(732),h="image_mCak";var E=function(e){var a=e.author,t=a.name,n=a.title,l=a.url,i=a.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(m.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:h,src:i,alt:t})),t&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(m.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},t))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},b="authorCol_Hvp5";function f(e){var a=e.authors,t=e.assets;return 0===a.length?null:r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},a.map((function(e,a){var l;return r.createElement("div",{className:(0,n.Z)("col col--6",b),key:a},r.createElement(E,{author:Object.assign({},e,{imageURL:null!=(l=t.authorsImageUrls[a])?l:e.imageURL})}))})))}var _=function(e){var a,t,h,E,b=(h=(0,o.c2)().selectMessage,function(e){var a=Math.ceil(e);return h(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),_=(0,s.C)().withBaseUrl,N=e.children,Z=e.frontMatter,k=e.assets,P=e.metadata,T=e.truncated,w=e.isBlogPostPage,L=void 0!==w&&w,I=P.date,y=P.formattedDate,C=P.permalink,M=P.tags,U=P.readingTime,x=P.title,A=P.editUrl,B=P.authors,R=null!=(a=k.image)?a:Z.image,D=!L&&T,O=M.length>0;return r.createElement("article",{className:L?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(E=L?"h1":"h2",r.createElement("header",null,r.createElement(E,{className:d,itemProp:"headline"},L?x:r.createElement(m.Z,{itemProp:"url",to:C},x)),r.createElement("div",{className:(0,n.Z)(u,"margin-vert--md")},r.createElement("time",{dateTime:I,itemProp:"datePublished"},y),void 0!==U&&r.createElement(r.Fragment,null," \xb7 ",b(U))),r.createElement(f,{authors:B,assets:k}))),R&&r.createElement("meta",{itemProp:"image",content:_(R,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:c.Z},N)),(O||T)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(t={},t[p]=L,t))},O&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":D})},r.createElement(v.Z,{tags:M})),L&&A&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(g.Z,{editUrl:A})),D&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":O})},r.createElement(m.Z,{to:P.permalink,"aria-label":"Read more about "+x},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},5473:function(e,a,t){t.d(a,{Z:function(){return d}});var r=t(9496),n=t(3133),l=t(5900),i=t(4750),m=t(1626),s="iconEdit_gxXc",o=["className"];var c=function(e){var a=e.className,t=(0,i.Z)(e,o);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,m.Z)(s,a),"aria-hidden":"true"},t),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},g=t(7010);function d(e){var a=e.editUrl;return r.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener",className:g.kM.common.editThisPage},r.createElement(c,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7107:function(e,a,t){t.d(a,{Z:function(){return o}});var r=t(9496),n=t(1626),l=t(6200),i="tag_HsAL",m="tagRegular_OjsP",s="tagWithCount_1oby";var o=function(e){var a,t=e.permalink,o=e.name,c=e.count;return r.createElement(l.Z,{href:t,className:(0,n.Z)(i,(a={},a[m]=!c,a[s]=c,a))},o,c&&r.createElement("span",null,c))}},732:function(e,a,t){t.d(a,{Z:function(){return o}});var r=t(9496),n=t(1626),l=t(3133),i=t(7107),m="tags_bUD9",s="tag_ril3";function o(e){var a=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(m,"padding--none","margin-left--sm")},a.map((function(e){var a=e.label,t=e.permalink;return r.createElement("li",{key:t,className:s},r.createElement(i.Z,{name:a,permalink:t}))}))))}}}]);