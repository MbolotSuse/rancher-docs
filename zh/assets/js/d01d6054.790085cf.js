"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[77429],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,g=d["".concat(s,".").concat(m)]||d[m]||l[m]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12613:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u6dfb\u52a0 Pod \u5b89\u5168\u7b56\u7565"},i=void 0,p={unversionedId:"how-to-guides/new-user-guides/manage-clusters/add-a-pod-security-policy",id:"how-to-guides/new-user-guides/manage-clusters/add-a-pod-security-policy",title:"\u6dfb\u52a0 Pod \u5b89\u5168\u7b56\u7565",description:"\u4ee5\u4e0b\u9009\u9879\u4ec5\u9002\u7528\u4e8e\u4f7f\u7528 RKE \u542f\u52a8\u7684\u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/manage-clusters/add-a-pod-security-policy.md",sourceDirName:"how-to-guides/new-user-guides/manage-clusters",slug:"/how-to-guides/new-user-guides/manage-clusters/add-a-pod-security-policy",permalink:"/zh/how-to-guides/new-user-guides/manage-clusters/add-a-pod-security-policy",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/manage-clusters/add-a-pod-security-policy.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",frontMatter:{title:"\u6dfb\u52a0 Pod \u5b89\u5168\u7b56\u7565"},sidebar:"tutorialSidebar",previous:{title:"\u4ece\u8282\u70b9\u4e2d\u79fb\u9664 Kubernetes \u7ec4\u4ef6",permalink:"/zh/how-to-guides/new-user-guides/manage-clusters/clean-cluster-nodes"},next:{title:"\u5206\u914d Pod \u5b89\u5168\u7b56\u7565",permalink:"/zh/how-to-guides/new-user-guides/manage-clusters/assign-pod-security-policies"}},s={},u=[],c={toc:u};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\u5148\u51b3\u6761\u4ef6\uff1a",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u9009\u9879\u4ec5\u9002\u7528\u4e8e",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/launch-kubernetes-with-rancher"},"\u4f7f\u7528 RKE \u542f\u52a8\u7684\u96c6\u7fa4"),"\u3002")),(0,a.kt)("p",null,"\u5f53\u4f60\u7684\u96c6\u7fa4\u4e0a\u8fd0\u884c\u4e86\u5177\u6709\u5b89\u5168\u654f\u611f\u914d\u7f6e\u7684 pod \u65f6\uff0c\u8bf7\u4e3a\u5176\u5206\u914d ",(0,a.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},"pod \u5b89\u5168\u7b56\u7565"),"\uff0c\u8fd9\u662f\u4e00\u7ec4\u7528\u4e8e\u76d1\u63a7 pod \u4e2d\u7684\u72b6\u6001\u548c\u8bbe\u7f6e\u7684\u89c4\u5219\u3002\u5982\u679c pod \u4e0d\u7b26\u5408\u4f60\u7684\u7b56\u7565\u4e2d\u6307\u5b9a\u7684\u89c4\u5219\uff0c\u5219\u8be5\u7b56\u7565\u4f1a\u963b\u6b62\u5b83\u8fd0\u884c\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u914d\u7f6e\u96c6\u7fa4\u65f6\u5206\u914d pod \u5b89\u5168\u7b56\u7565\u3002\u5982\u679c\u4f60\u4ee5\u540e\u9700\u8981\u653e\u677e\u6216\u9650\u5236 pod \u7684\u5b89\u5168\u6027\uff0c\u4f60\u53ef\u4ee5\u5728\u7f16\u8f91\u96c6\u7fa4\u65f6\u66f4\u65b0\u7b56\u7565\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8f6c\u5230\u8981\u5e94\u7528 pod \u5b89\u5168\u7b56\u7565\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728 ",(0,a.kt)("strong",{parentName:"p"},"Pod \u5b89\u5168\u7b56\u7565\u652f\u6301"),"\u4e2d\uff0c\u9009\u62e9",(0,a.kt)("strong",{parentName:"p"},"\u542f\u7528"),"\u3002"),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u6b64\u9009\u9879\u4ec5\u9002\u7528\u4e8e",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/launch-kubernetes-with-rancher"},"\u7531 RKE \u914d\u7f6e\u7684\u96c6\u7fa4"),"\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4ece",(0,a.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4 Pod \u5b89\u5168\u7b56\u7565"),"\u4e0b\u62c9\u5217\u8868\u4e2d\uff0c\u9009\u62e9\u8981\u5e94\u7528\u4e8e\u96c6\u7fa4\u7684\u7b56\u7565\u3002"),(0,a.kt)("p",{parentName:"li"},"Rancher \u652f\u6301\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"\u53d7\u9650"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e0d\u53d7\u9650"),"\u7684",(0,a.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies#%E9%BB%98%E8%AE%A4-psp"},"\u7b56\u7565"),"\uff0c\u4f60\u4e5f\u53ef\u4ee5",(0,a.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies#%E9%BB%98%E8%AE%A4-psp"},"\u521b\u5efa\u81ea\u5b9a\u4e49\u7b56\u7565"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u4fdd\u5b58"),"\u3002"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1apod \u5b89\u5168\u7b56\u7565\u5e94\u7528\u4e8e\u96c6\u7fa4\u548c\u96c6\u7fa4\u5185\u7684\u4efb\u4f55\u9879\u76ee\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u5206\u914d pod \u5b89\u5168\u7b56\u7565\u4e4b\u524d\u5df2\u7ecf\u8fd0\u884c\u7684\u5de5\u4f5c\u8d1f\u8f7d\u662f\u4e0d\u53d7\u9650\u5236\u7684\u3002\u5373\u4f7f\u5b83\u4eec\u4e0d\u7b26\u5408\u4f60\u7684 pod \u5b89\u5168\u7b56\u7565\uff0c\u5728\u5206\u914d\u7b56\u7565\u4e4b\u524d\u8fd0\u884c\u7684\u5de5\u4f5c\u8d1f\u8f7d\u4e5f\u4f1a\u7ee7\u7eed\u8fd0\u884c\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u8981\u68c0\u67e5\u6b63\u5728\u8fd0\u884c\u7684\u5de5\u4f5c\u8d1f\u8f7d\u662f\u5426\u901a\u8fc7\u4e86\u4f60\u7684 pod \u5b89\u5168\u7b56\u7565\uff0c\u8bf7\u514b\u9686\u6216\u5347\u7ea7\u5b83\u3002")))}l.isMDXComponent=!0}}]);