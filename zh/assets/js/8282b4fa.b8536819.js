"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[50657],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(r),h=a,m=c["".concat(i,".").concat(h)]||c[h]||p[h]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},11741:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const o={title:"RKE Add-On Install"},l=void 0,s={unversionedId:"pages-for-subheaders/helm2-rke-add-on",id:"version-2.0-2.4/pages-for-subheaders/helm2-rke-add-on",title:"RKE Add-On Install",description:"#### Important: RKE add-on install is only supported up to Rancher v2.0.8",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/helm2-rke-add-on.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/helm2-rke-add-on",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/helm2-rke-add-on",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/helm2-rke-add-on.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"RKE Add-On Install"},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/troubleshooting"},next:{title:"Kubernetes Install with External Load Balancer (TCP/Layer 4)",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/helm2-rke-add-on-layer-4-lb"}},i={},d=[],u={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("h4",{parentName:"blockquote",id:"important-rke-add-on-install-is-only-supported-up-to-rancher-v208"},(0,a.kt)("strong",{parentName:"h4"},"Important: RKE add-on install is only supported up to Rancher v2.0.8")),(0,a.kt)("p",{parentName:"blockquote"},"Please use the Rancher helm chart to install Rancher on a Kubernetes cluster. For details, see the ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Kubernetes Install "),"."),(0,a.kt)("p",{parentName:"blockquote"},"If you are currently using the RKE add-on install method, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on"},"Migrating from a Kubernetes Install with an RKE Add-on")," for details on how to move to using the helm chart.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/rke-add-on/layer-4-lb"},"Kubernetes installation with External Load Balancer (TCP/Layer 4)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/rke-add-on/layer-7-lb"},"Kubernetes installation with External Load Balancer (HTTPS/Layer 7)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/proxy"},"HTTP Proxy Configuration for a Kubernetes installation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/helm2-rke-add-on-troubleshooting"},"Troubleshooting RKE Add-on Installs"))))}p.isMDXComponent=!0}}]);