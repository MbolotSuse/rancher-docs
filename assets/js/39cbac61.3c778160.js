"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[42830],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=o,m=d["".concat(a,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(m,u(u({ref:t},l),{},{components:n})):r.createElement(m,u({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,u[1]=s;for(var c=2;c<i;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"Setting up the Google Compute Engine Cloud Provider"},u=void 0,s={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/google-compute-engine",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/google-compute-engine",title:"Setting up the Google Compute Engine Cloud Provider",description:"In this section, you'll learn how to enable the Google Compute Engine (GCE) cloud provider for custom clusters in Rancher. A custom cluster is one in which Rancher installs Kubernetes on existing nodes.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/google-compute-engine.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/google-compute-engine",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/google-compute-engine",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/google-compute-engine.md",tags:[],version:"current",lastUpdatedAt:1666730461,formattedLastUpdatedAt:"Oct 25, 2022",frontMatter:{title:"Setting up the Google Compute Engine Cloud Provider"},sidebar:"tutorialSidebar",previous:{title:"Setting up the Azure Cloud Provider",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/azure"},next:{title:"How to Configure In-tree vSphere Cloud Provider",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-in-tree-vsphere"}},a={},c=[],l={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section, you'll learn how to enable the Google Compute Engine (GCE) cloud provider for custom clusters in Rancher. A custom cluster is one in which Rancher installs Kubernetes on existing nodes."),(0,o.kt)("p",null,"The official Kubernetes documentation for the GCE cloud provider is ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/cloud-providers/#gce"},"here.")),(0,o.kt)("admonition",{title:"Prerequisites:",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The service account of ",(0,o.kt)("inlineCode",{parentName:"p"},"Identity and API")," access on GCE needs the ",(0,o.kt)("inlineCode",{parentName:"p"},"Computer Admin")," permission.")),(0,o.kt)("p",null,"If you are using Calico,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Clusters")," page, go to the custom cluster and click *",(0,o.kt)("em",{parentName:"p"},"\u22ee > Edit YAML.")," Enter the following configuration:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'rancher_kubernetes_engine_config:\n  cloud_provider:\n    name: gce\n    customCloudProvider: |-\n      [Global]\n      project-id=<your project ID, optional>\n      network-name=<your network, optional if using default network>\n      subnetwork-name=<your subnetwork of the above network, optional if using default network>\n      node-instance-prefix=<your instance group name/your instance name specific prefix, required>\n      node-tags=<your network tags, must patch one or some tags, required>\n  network:\n    options:\n      calico_cloud_provider: "gce"\n    plugin: "calico"\n')))),(0,o.kt)("p",null,"If you are using Canal or Flannel,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Clusters")," page, go to the custom cluster and click *",(0,o.kt)("em",{parentName:"p"},"\u22ee > Edit YAML.")," Enter the following configuration:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"rancher_kubernetes_engine_config:\n  cloud_provider:\n    name: gce\n    customCloudProvider: |-\n      [Global]\n      project-id=<your project ID, optional>\n      network-name=<your network, optional if using default network>\n      subnetwork-name=<your subnetwork of the above network, optional if using default network>\n      node-instance-prefix=<your instance group name/your instance name specific prefix, required>\n      node-tags=<your network tags, must patch one or some tags, required>\n  services:\n    kube_controller:\n      extra_args:\n        configure-cloud-routes: true # we need to allow the cloud provider configure the routes for the hosts\n")))))}p.isMDXComponent=!0}}]);