"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[69850],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=u(a),c=r,d=k["".concat(o,".").concat(c)]||k[c]||s[c]||l;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},55663:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={title:"Rancher Equinix Metal \u5feb\u901f\u5165\u95e8"},i=void 0,p={unversionedId:"getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal",id:"version-2.6/getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal",title:"Rancher Equinix Metal \u5feb\u901f\u5165\u95e8",description:"\u672c\u7ae0\u8282\u5f15\u5bfc\u4f60\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal.md",sourceDirName:"getting-started/quick-start-guides/deploy-rancher-manager",slug:"/getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal",permalink:"/zh/v2.6/getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"Rancher Equinix Metal \u5feb\u901f\u5165\u95e8"},sidebar:"tutorialSidebar",previous:{title:"Vagrant \u5feb\u901f\u5165\u95e8",permalink:"/zh/v2.6/getting-started/quick-start-guides/deploy-rancher-manager/vagrant"},next:{title:"Helm CLI \u5feb\u901f\u5165\u95e8",permalink:"/zh/v2.6/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli"}},o={},u=[{value:"\u672c\u7ae0\u8282\u5f15\u5bfc\u4f60\uff1a",id:"\u672c\u7ae0\u8282\u5f15\u5bfc\u4f60",level:2},{value:"\u5feb\u901f\u5165\u95e8\u6982\u8ff0",id:"\u5feb\u901f\u5165\u95e8\u6982\u8ff0",level:2},{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"1. \u914d\u7f6e Equinix Metal \u4e3b\u673a",id:"1-\u914d\u7f6e-equinix-metal-\u4e3b\u673a",level:3},{value:"2. \u5b89\u88c5 Rancher",id:"2-\u5b89\u88c5-rancher",level:3},{value:"3. \u767b\u5f55",id:"3-\u767b\u5f55",level:3},{value:"4. \u521b\u5efa\u96c6\u7fa4",id:"4-\u521b\u5efa\u96c6\u7fa4",level:3},{value:"\u5df2\u5b8c\u6210\uff01",id:"\u5df2\u5b8c\u6210",level:4},{value:"\u540e\u7eed\u64cd\u4f5c",id:"\u540e\u7eed\u64cd\u4f5c",level:4}],m={toc:u};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u672c\u7ae0\u8282\u5f15\u5bfc\u4f60"},"\u672c\u7ae0\u8282\u5f15\u5bfc\u4f60\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e Equinix Metal server"),(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88c5 Rancher 2.x"),(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4f60\u7684\u7b2c\u4e00\u4e2a\u96c6\u7fa4"),(0,r.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u4e00\u4e2a Nginx \u5e94\u7528")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u672c\u7ae0\u8282\u4e2d\u63d0\u4f9b\u7684\u6307\u5357\uff0c\u65e8\u5728\u5e2e\u52a9\u4f60\u5feb\u901f\u542f\u52a8\u4e00\u4e2a\u7528\u4e8e Rancher \u7684\u6c99\u76d2\uff0c\u4ee5\u8bc4\u4f30 Rancher \u662f\u5426\u80fd\u6ee1\u8db3\u4f60\u7684\u4f7f\u7528\u9700\u6c42\u3002\u4e0d\u5efa\u8bae\u5c06 Docker \u5b89\u88c5\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u3002\u5982\u679c\u4f60\u9700\u8981\u83b7\u53d6\u751f\u4ea7\u73af\u5883\u7684\u64cd\u4f5c\u6307\u5bfc\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/installation-and-upgrade"},"\u5b89\u88c5"),"\u3002")),(0,r.kt)("h2",{id:"\u5feb\u901f\u5165\u95e8\u6982\u8ff0"},"\u5feb\u901f\u5165\u95e8\u6982\u8ff0"),(0,r.kt)("p",null,"\u672c\u6307\u5357\u5212\u5206\u4e3a\u4e0d\u540c\u4efb\u52a1\uff0c\u4ee5\u4fbf\u4e8e\u4f7f\u7528\u3002"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://metal.equinix.com/developers/docs/accounts/users/"},"Equinix Metal \u8d26\u53f7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://metal.equinix.com/developers/docs/accounts/projects/"},"Equinix Metal \u9879\u76ee"))),(0,r.kt)("h3",{id:"1-\u914d\u7f6e-equinix-metal-\u4e3b\u673a"},"1. \u914d\u7f6e Equinix Metal \u4e3b\u673a"),(0,r.kt)("p",null,"\u5f00\u59cb\u90e8\u7f72 Equinix Metal \u4e3b\u673a\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 Equinix Metal \u63a7\u5236\u53f0\uff0cAPI \u6216 CLI \u6765\u914d\u7f6e Equinix Metal Server\u3002\u5982\u679c\u4f60\u9700\u8981\u4e86\u89e3\u5982\u4f55\u90e8\u7f72\u6bcf\u79cd\u7c7b\u578b\u7684 deployment\uff0c\u8bf7\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"https://metal.equinix.com/developers/docs/deploy/on-demand/"},"Equinix Metal \u90e8\u7f72"),"\u3002\u4ee5\u4e0b\u94fe\u63a5\u4ecb\u7ecd Equinix Metal Server \u7684\u7c7b\u578b\u4ee5\u53ca\u4ef7\u683c\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://metal.equinix.com/developers/docs/servers/about/"},"Equinix Metal Server \u7c7b\u578b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://metal.equinix.com/developers/docs/servers/server-specs/"},"Equinix Metal \u4ef7\u683c"))),(0,r.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9879\uff1a",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528 CLI \u6216 API \u914d\u7f6e\u65b0\u7684 Equinix Metal Server\uff0c\u4f60\u9700\u8981\u63d0\u4f9b\u9879\u76ee ID\u3001\u8ba1\u5212\u3001metro \u548c\u64cd\u4f5c\u7cfb\u7edf\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u4f7f\u7528\u4e91\u4e3b\u673a\u7684\u865a\u62df\u673a\u65f6\uff0c\u4f60\u9700\u8981\u5141\u8bb8 80 \u548c 443 \u7aef\u53e3\u7684\u5165\u7ad9 TCP \u901a\u4fe1\u3002\u6709\u5173\u7aef\u53e3\u914d\u7f6e\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1\u4f60\u7684\u4e91\u4e3b\u673a\u7684\u6587\u6863\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u9700\u4e86\u89e3\u6240\u6709\u7aef\u53e3\u8981\u6c42\uff0c\u8bf7\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"li",href:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"},"Docker \u5b89\u88c5"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6839\u636e\u6211\u4eec\u7684",(0,r.kt)("a",{parentName:"li",href:"/zh/v2.6/pages-for-subheaders/installation-requirements"},"\u8981\u6c42"),"\u914d\u7f6e\u4e3b\u673a\u3002"))),(0,r.kt)("h3",{id:"2-\u5b89\u88c5-rancher"},"2. \u5b89\u88c5 Rancher"),(0,r.kt)("p",null,"\u8981\u5728 Equinix Metal \u4e3b\u673a\u4e0a\u5b89\u88c5 Rancher\uff0c\u5148\u4e0e\u5b83\u8fde\u63a5\uff0c\u7136\u540e\u4f7f\u7528 shell \u8fdb\u884c\u5b89\u88c5\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4f60\u60ef\u7528\u7684 shell\uff08\u4f8b\u5982 PuTTy \u6216\u8fdc\u7a0b\u7ec8\u7aef\uff09\u767b\u5f55\u5230\u4f60\u7684 Equinix Metal \u4e3b\u673a\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728 shell \u4e2d\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"sudo docker run -d --restart=unless-stopped -p 80:80 -p 443:443 --privileged rancher/rancher\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1aRancher \u5df2\u5b89\u88c5\u3002"),(0,r.kt)("h3",{id:"3-\u767b\u5f55"},"3. \u767b\u5f55"),(0,r.kt)("p",null,"\u767b\u5f55\u5230 Rancher \u540e\uff0c\u4f60\u8fd8\u9700\u8981\u8fdb\u884c\u4e00\u4e9b\u4e00\u6b21\u6027\u914d\u7f6e\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6253\u5f00 Web \u6d4f\u89c8\u5668\u5e76\u8f93\u5165\u4e3b\u673a\u7684 IP \u5730\u5740",(0,r.kt)("inlineCode",{parentName:"p"},"https://<SERVER_IP>"),"\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"<SERVER_IP>")," \u66ff\u6362\u4e3a\u4f60\u7684\u4e3b\u673a IP \u5730\u5740\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u51fa\u73b0\u63d0\u793a\u65f6\uff0c\u4e3a\u9ed8\u8ba4 ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," \u8d26\u53f7\u521b\u5efa\u5bc6\u7801\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8bbe\u7f6e ",(0,r.kt)("strong",{parentName:"p"},"Rancher Server URL"),"\u3002URL \u53ef\u4ee5\u662f IP \u5730\u5740\u6216\u4e3b\u673a\u540d\u3002\u9700\u8981\u6ce8\u610f\uff0c\u6dfb\u52a0\u5230\u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a\u8282\u70b9\u90fd\u5fc5\u987b\u80fd\u591f\u8fde\u63a5\u5230\u6b64 URL\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null),"\u5982\u679c\u4f60\u5728 URL \u4e2d\u4f7f\u7528\u4e3b\u673a\u540d\uff0c\u5219\u6b64\u4e3b\u673a\u540d\u5fc5\u987b\u5728 DNS \u4e2d\u89e3\u6790\u5230\u4f60\u9700\u8981\u6dfb\u52a0\u5230\u96c6\u7fa4\u7684\u8282\u70b9\u4e0a\u3002"))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"4-\u521b\u5efa\u96c6\u7fa4"},"4. \u521b\u5efa\u96c6\u7fa4"),(0,r.kt)("p",null,"\u6b22\u8fce\u4f7f\u7528 Rancher\uff01\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u4f60\u7684\u7b2c\u4e00\u4e2a Kubernetes \u96c6\u7fa4\u4e86\u3002"),(0,r.kt)("p",null,"\u5728\u6b64\u4efb\u52a1\u4e2d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49"),"\u9009\u9879\u3002\u6b64\u9009\u9879\u5141\u8bb8\u4f60\u628a ",(0,r.kt)("em",{parentName:"p"},"\u4efb\u610f")," Linux \u4e3b\u673a\uff08\u4e91\u865a\u62df\u673a\u3001\u672c\u5730\u865a\u62df\u673a\u6216\u88f8\u673a\uff09\u6dfb\u52a0\u5230\u96c6\u7fa4\u4e2d\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728",(0,r.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u9875\u9762\uff0c\u70b9\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9009\u62e9",(0,r.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8f93\u5165",(0,r.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u540d\u79f0"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8df3\u8fc7",(0,r.kt)("strong",{parentName:"p"},"\u6210\u5458\u89d2\u8272"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u9009\u9879"),"\u3002\u6b64\u90e8\u5206\u6211\u4eec\u7a0d\u540e\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u4e0b\u4e00\u6b65"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728",(0,r.kt)("strong",{parentName:"p"},"\u8282\u70b9\u89d2\u8272"),"\u4e2d\uff0c\u9009\u62e9 ",(0,r.kt)("em",{parentName:"p"},"\u5168\u90e8")," \u89d2\u8272\uff0c\u5373 ",(0,r.kt)("strong",{parentName:"p"},"etcd"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"Control")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"Worker"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u53ef\u9009"),"\uff1aRancher \u4f1a\u81ea\u52a8\u68c0\u6d4b\u7528\u4e8e Rancher \u901a\u4fe1\u548c\u96c6\u7fa4\u901a\u4fe1\u7684 IP \u5730\u5740\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"\u8282\u70b9\u5730\u5740"),"\u5904\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"\u516c\u6709\u5730\u5740"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"\u5185\u7f51\u5730\u5740"),"\u8fdb\u884c\u8986\u76d6\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8df3\u8fc7",(0,r.kt)("strong",{parentName:"p"},"\u6807\u7b7e"),"\u90e8\u5206\u7684\u5185\u5bb9\u3002\u8fd9\u90e8\u5206\u5185\u5bb9\u6682\u65f6\u4e0d\u91cd\u8981\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u5c4f\u5e55\u4e0a\u663e\u793a\u7684\u547d\u4ee4\u590d\u5236\u5230\u526a\u8d34\u677f\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4f60\u60ef\u7528\u7684 shell\uff08\u4f8b\u5982 PuTTy \u6216\u8fdc\u7a0b\u7ec8\u7aef\uff09\u767b\u5f55\u5230\u4f60\u7684 Linux \u4e3b\u673a\u3002\u7c98\u8d34\u526a\u8d34\u677f\u7684\u547d\u4ee4\u5e76\u8fd0\u884c\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728 Linux \u4e3b\u673a\u4e0a\u8fd0\u884c\u5b8c\u547d\u4ee4\u540e\uff0c\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u5b8c\u6210"),"\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a"),(0,r.kt)("p",null,"\u4f60\u5df2\u521b\u5efa\u96c6\u7fa4\uff0c\u96c6\u7fa4\u7684\u72b6\u6001\u662f",(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u4e2d"),"\u3002Rancher \u5df2\u5728\u4f60\u7684\u96c6\u7fa4\u4e2d\u3002"),(0,r.kt)("p",null,"\u5f53\u96c6\u7fa4\u72b6\u6001\u53d8\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"Active")," \u540e\uff0c\u4f60\u53ef\u8bbf\u95ee\u96c6\u7fa4\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active")," \u72b6\u6001\u7684\u96c6\u7fa4\u4f1a\u5206\u914d\u5230\u4e24\u4e2a\u9879\u76ee\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Default"),"\uff1a\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"li"},"default")," \u547d\u540d\u7a7a\u95f4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"System"),"\uff1a\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"li"},"cattle-system"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"kube-public")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u3002")),(0,r.kt)("h4",{id:"\u5df2\u5b8c\u6210"},"\u5df2\u5b8c\u6210\uff01"),(0,r.kt)("p",null,"\u606d\u559c\uff01\u4f60\u5df2\u521b\u5efa\u7b2c\u4e00\u4e2a\u96c6\u7fa4\u3002"),(0,r.kt)("h4",{id:"\u540e\u7eed\u64cd\u4f5c"},"\u540e\u7eed\u64cd\u4f5c"),(0,r.kt)("p",null,"\u4f7f\u7528 Rancher \u521b\u5efa deployment\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/deploy-rancher-workloads"},"\u521b\u5efa Deployment"),"\u3002"))}s.isMDXComponent=!0}}]);