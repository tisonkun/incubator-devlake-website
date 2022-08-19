"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[3002],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(i),m=n,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return i?r.createElement(f,a(a({ref:t},u),{},{components:i})):r.createElement(f,a({ref:t},u))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<o;c++)a[c]=i[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}p.displayName="MDXCreateElement"},78791:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=i(87462),n=(i(67294),i(3905));const o={title:"Bug Age",description:"Bug Age\n",sidebar_position:9},a=void 0,s={unversionedId:"Metrics/BugAge",id:"Metrics/BugAge",title:"Bug Age",description:"Bug Age\n",source:"@site/docs/Metrics/BugAge.md",sourceDirName:"Metrics",slug:"/Metrics/BugAge",permalink:"/zh/docs/Metrics/BugAge",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/BugAge.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Bug Age",description:"Bug Age\n",sidebar_position:9},sidebar:"docsSidebar",previous:{title:"Deleted Lines of Code",permalink:"/zh/docs/Metrics/DeletedLinesOfCode"},next:{title:"Incident Age",permalink:"/zh/docs/Metrics/IncidentAge"}},l={},c=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],u={toc:c};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,n.kt)("p",null,"The amount of time it takes a bug to fix."),(0,n.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Help the team to establish an effective hierarchical response mechanism for bugs. Focus on the resolution of important problems in the backlog."),(0,n.kt)("li",{parentName:"ol"},"Improve team's and individual's bug fixing efficiency. Identify good/to-be-improved practices that affect bug age age")),(0,n.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Jira"),(0,n.kt)("li",{parentName:"ul"},"GitHub"),(0,n.kt)("li",{parentName:"ul"},"Weekly Bug Retro")),(0,n.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,n.kt)("p",null,"This metric equals to ",(0,n.kt)("inlineCode",{parentName:"p"},"resolution_date")," - ",(0,n.kt)("inlineCode",{parentName:"p"},"created_date"),' of issues in type "BUG".'),(0,n.kt)("b",null,"Data Sources Required"),(0,n.kt)("p",null,"This metric relies on issues collected from Jira, GitHub, or TAPD."),(0,n.kt)("b",null,"Transformation Rules Required"),(0,n.kt)("p",null,"This metric relies on the 'type-bug' configuration in Jira, GitHub or TAPD transformation rules to let DevLake know what CI builds/jobs can be regarded as ",(0,n.kt)("inlineCode",{parentName:"p"},"Bugs"),"."),(0,n.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Observe the trend of bug age and locate the key reasons."),(0,n.kt)("li",{parentName:"ol"},"According to the severity level, type (business, functional classification), affected module, source of bugs, count and observe the length of bug age.")))}d.isMDXComponent=!0}}]);