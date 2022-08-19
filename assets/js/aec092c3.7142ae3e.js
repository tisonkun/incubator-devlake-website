"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[4437],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(i),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return i?n.createElement(f,a(a({ref:t},d),{},{components:i})):n.createElement(f,a({ref:t},d))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},98604:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=i(87462),r=(i(67294),i(3905));const o={title:"Deleted Lines of Code",description:"Deleted Lines of Code\n",sidebar_position:8},a=void 0,s={unversionedId:"Metrics/DeletedLinesOfCode",id:"Metrics/DeletedLinesOfCode",title:"Deleted Lines of Code",description:"Deleted Lines of Code\n",source:"@site/docs/Metrics/DeletedLinesOfCode.md",sourceDirName:"Metrics",slug:"/Metrics/DeletedLinesOfCode",permalink:"/docs/Metrics/DeletedLinesOfCode",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/DeletedLinesOfCode.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Deleted Lines of Code",description:"Deleted Lines of Code\n",sidebar_position:8},sidebar:"docsSidebar",previous:{title:"Added Lines of Code",permalink:"/docs/Metrics/AddedLinesOfCode"},next:{title:"Bug Age",permalink:"/docs/Metrics/BugAge"}},l={},c=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],d={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,r.kt)("p",null,"The accumulated number of deleted lines of code."),(0,r.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"identify potential bottlenecks that may affect the output"),(0,r.kt)("li",{parentName:"ol"},"Encourage the team to implement a development model that matches the business requirements; develop excellent coding habits")),(0,r.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,r.kt)("p",null,"N/A"),(0,r.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,r.kt)("p",null,"This metric is calculated by summing the deletions of commits in the given data range."),(0,r.kt)("b",null,"Data Sources Required"),(0,r.kt)("p",null,"This metric relies on commits collected from GitHub, GitLab or BitBucket."),(0,r.kt)("b",null,"Transformation Rules Required"),(0,r.kt)("p",null,"N/A"),(0,r.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the project/team dimension, observe the accumulated change in Added lines to assess the team activity and code growth rate"),(0,r.kt)("li",{parentName:"ol"},"From version cycle dimension, observe the active time distribution of code changes, and evaluate the effectiveness of project development model."),(0,r.kt)("li",{parentName:"ol"},"From the member dimension, observe the trend and stability of code output of each member, and identify the key points that affect code output by comparison.")))}u.isMDXComponent=!0}}]);