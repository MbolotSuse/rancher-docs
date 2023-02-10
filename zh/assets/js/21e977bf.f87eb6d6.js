"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[47833],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>p});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},h={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),p=a,m=d["".concat(i,".").concat(p)]||d[p]||h[p]||o;return t?n.createElement(m,s(s({ref:r},l),{},{components:t})):n.createElement(m,s({ref:r},l))}));function p(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var u=2;u<o;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33946:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const o={title:"Rancher Server and Components"},s=void 0,c={unversionedId:"reference-guides/rancher-manager-architecture/rancher-server-and-components",id:"version-2.5/reference-guides/rancher-manager-architecture/rancher-server-and-components",title:"Rancher Server and Components",description:"The majority of Rancher 2.x software runs on the Rancher Server. Rancher Server includes all the software components used to manage the entire Rancher deployment.",source:"@site/versioned_docs/version-2.5/reference-guides/rancher-manager-architecture/rancher-server-and-components.md",sourceDirName:"reference-guides/rancher-manager-architecture",slug:"/reference-guides/rancher-manager-architecture/rancher-server-and-components",permalink:"/zh/v2.5/reference-guides/rancher-manager-architecture/rancher-server-and-components",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/rancher-manager-architecture/rancher-server-and-components.md",tags:[],version:"2.5",lastUpdatedAt:1662663074,formattedLastUpdatedAt:"2022\u5e749\u67088\u65e5",frontMatter:{title:"Rancher Server and Components"},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/zh/v2.5/pages-for-subheaders/rancher-manager-architecture"},next:{title:"Communicating with Downstream User Clusters",permalink:"/zh/v2.5/reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters"}},i={},u=[],l={toc:u};function h(e){let{components:r,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The majority of Rancher 2.x software runs on the Rancher Server. Rancher Server includes all the software components used to manage the entire Rancher deployment."),(0,a.kt)("p",null,"The figure below illustrates the high-level architecture of Rancher 2.x. The figure depicts a Rancher Server installation that manages two downstream Kubernetes clusters: one created by RKE and another created by Amazon EKS (Elastic Kubernetes Service)."),(0,a.kt)("p",null,"For the best performance and security, we recommend a dedicated Kubernetes cluster for the Rancher management server. Running user workloads on this cluster is not advised. After deploying Rancher, you can ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"create or import clusters")," for running your workloads."),(0,a.kt)("p",null,"The diagram below shows how users can manipulate both ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher-launched Kubernetes")," clusters and ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"hosted Kubernetes")," clusters through Rancher's authentication proxy:"),(0,a.kt)("figcaption",null,"Managing Kubernetes Clusters through Rancher's Authentication Proxy"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Architecture",src:t(16904).Z,width:"766",height:"792"})),(0,a.kt)("p",null,"You can install Rancher on a single node, or on a high-availability Kubernetes cluster."),(0,a.kt)("p",null,"A high-availability Kubernetes installation is recommended for production."),(0,a.kt)("p",null,"A Docker installation of Rancher is recommended only for development and testing purposes. The ability to migrate Rancher to a high-availability cluster depends on the Rancher version:"),(0,a.kt)("p",null,"The Rancher backup operator can be used to migrate Rancher from the single Docker container install to an installation on a high-availability Kubernetes cluster. For details, refer to the documentation on ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"},"migrating Rancher to a new cluster."),"."),(0,a.kt)("p",null,"The Rancher server, regardless of the installation method, should always run on nodes that are separate from the downstream user clusters that it manages. If Rancher is installed on a high-availability Kubernetes cluster, it should run on a separate cluster from the cluster(s) it manages."))}h.isMDXComponent=!0},16904:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/rancher-architecture-rancher-api-server-2743dae746c64cd2ad66711908be4108.svg"}}]);